import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFilePdf, FaCloudUploadAlt, FaCheckCircle, FaDownload,
  FaTrash, FaHistory, FaInfoCircle, FaShieldAlt, FaBolt, FaLock,
  FaFileImage, FaSyncAlt
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import * as pdfjsLib from 'pdfjs-dist';
import JSZip from 'jszip';

// Set worker path for PDF.js - Using unpkg for better version-specific reliability
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

const PdfToJpg = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [zipUrl, setZipUrl] = useState(null);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [quality, setQuality] = useState(2.0); // 1.0, 2.0, 3.0
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [statusText, setStatusText] = useState("");

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "PDF to JPG Converter - Convert PDF Pages to Images | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Convert PDF pages into high-quality JPG images instantly. Free, secure, and preserves original resolution. Download all pages in a single ZIP file.' },
      { name: 'keywords', content: 'pdf to jpg, convert pdf to image, pdf to jpeg, online pdf converter, extract images from pdf, nanotechnology, nanosoft' },
      { property: 'og:title', content: 'PDF to JPG Converter - Convert PDF Pages to Images' },
      { property: 'og:description', content: 'Convert PDF documents into high-quality JPG images. Fast, free and secure online tool.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/pdf-to-jpg' }
    ];

    metaTags.forEach(tag => {
      let element = tag.name ? document.querySelector(`meta[name="${tag.name}"]`) : document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.name = tag.name;
        if (tag.property) element.property = tag.property;
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "PDF to JPG Converter Tool",
      "description": "Convert PDF pages into high-quality JPG images instantly. Free, secure and fast.",
      "url": "https://nanosoft.com/tools/pdf-to-jpg",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Any"
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Load History
    const savedHistory = localStorage.getItem('pdfToJpgHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));

    return () => {
      if (zipUrl) URL.revokeObjectURL(zipUrl);
    };
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem('pdfToJpgHistory', JSON.stringify(history));
  }, [history]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = async (selectedFile) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;

        setFile(selectedFile);
        setTotalPages(pdf.numPages);
        setFinished(false);
        setProgress(0);
        setError("");
        setZipUrl(null);
      } catch (err) {
        console.error("PDF Load Error:", err);
        if (err.name === 'PasswordException') {
          setError("This PDF is password-protected. Please remove the password and try again.");
        } else {
          setError("Error loading PDF. Please ensure it's a valid document and not corrupted.");
        }
      }
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setProgress(0);
    setError("");
    setStatusText("Loading PDF document...");
    trackEvent("ToolAction", { tool: "PDFtoJPG", action: "Start Conversion", quality });

    try {
      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;

      const zip = new JSZip();
      const filename = file.name.split('.')[0];

      for (let i = 1; i <= pdf.numPages; i++) {
        setStatusText(`Rendering page ${i} of ${pdf.numPages}...`);
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: quality });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport: viewport }).promise;

        const imageData = canvas.toDataURL('image/jpeg', 0.9);
        const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, "");

        zip.file(`${filename}_page_${i}.jpg`, base64Data, { base64: true });
        setProgress(Math.round((i / pdf.numPages) * 100));

        // Manual cleanup to help garbage collection
        canvas.width = 0;
        canvas.height = 0;
      }

      setStatusText("Generating ZIP package...");
      const zipContent = await zip.generateAsync({
        type: "blob",
        compression: "STORE" // Faster for already compressed JPGs
      });
      const url = URL.createObjectURL(zipContent);
      setZipUrl(url);

      // Add to history
      const historyItem = {
        id: Date.now(),
        name: file.name,
        pages: pdf.numPages,
        quality: quality === 1.0 ? "Standard" : quality === 2.0 ? "High" : "Ultra",
        date: new Date().toLocaleString()
      };
      setHistory(prev => [historyItem, ...prev].slice(0, 10));

      setConverting(false);
      setFinished(true);
      setStatusText("Conversion complete!");
      trackEvent("ToolAction", { tool: "PDFtoJPG", action: "Conversion Success" });
    } catch (err) {
      console.error(err);
      setError("An error occurred during conversion. The PDF might be too large or complex for the current browser memory.");
      setConverting(false);
    }
  };

  const downloadZip = () => {
    if (!zipUrl) return;
    const link = document.createElement("a");
    link.href = zipUrl;
    link.download = `${file.name.split('.')[0]}_images.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "PDFtoJPG", action: "Download ZIP" });
  };

  const clearFile = () => {
    if (zipUrl) URL.revokeObjectURL(zipUrl);
    setFile(null);
    setFinished(false);
    setProgress(0);
    setZipUrl(null);
    setTotalPages(0);
    setError("");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('pdfToJpgHistory');
  };

  return (
    <Layout>
      <PageTitle
        title="PDF to JPG Converter - High Quality"
        description="Extract all pages from your PDF as high-resolution JPG images. Secure local processing."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f6f8fb" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Conversion Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>PDF to JPG</h1>
                  <p className="desc w-75 mx-auto text-muted"> Transform your document pages into easily shareable image files. </p>
                </div>

                {!file && !finished && (
                  <div
                    className="upload-area p-5 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    style={{ border: "2px dashed #03228f", borderRadius: "15px", backgroundColor: "#f9faff", cursor: "pointer" }}
                    onClick={() => document.getElementById('pdf-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3>Click to Upload PDF</h3>
                    <p className="text-muted">Extract images from your document pages</p>
                    <input id="pdf-upload" type="file" accept="application/pdf" className="d-none" onChange={(e) => validateAndSetFile(e.target.files[0])} />
                  </div>
                )}

                {file && !finished && (
                  <div className="conversion-interface p-4 bg-light rounded shadow-sm text-center">
                    <FaFilePdf size={60} color="#e74c3c" className="mb-3" />
                    <h5 className="mb-1">{file.name}</h5>
                    <p className="text-muted small mb-4">{totalPages} Pages detected</p>

                    {!converting ? (
                      <>
                        <div className="quality-selector mb-4 p-3 bg-white rounded border d-inline-block">
                          <label className="d-block small font-weight-bold text-muted uppercase mb-3 text-left">Rendering Quality:</label>
                          <div className="btn-group">
                            {[
                              { label: "Standard", value: 1.0, icon: "1x" },
                              { label: "High", value: 2.0, icon: "2x" },
                              { label: "Ultra", value: 3.0, icon: "3x" }
                            ].map((opt) => (
                              <button
                                key={opt.value}
                                className={`btn btn-sm ${quality === opt.value ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setQuality(opt.value)}
                              >
                                {opt.label} ({opt.icon})
                              </button>
                            ))}
                          </div>
                          <p className="small text-muted mt-2 mb-0">Higher quality results in larger image files.</p>
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                          <button onClick={handleConvert} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                            <FaSyncAlt className="mr-2" /> Convert All Pages
                          </button>
                          <button onClick={clearFile} className="btn text-danger">Remove</button>
                        </div>
                      </>
                    ) : (
                      <div className="progress-wrap px-lg-5">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="small font-weight-bold text-muted uppercase">{statusText}</span>
                          <span className="small font-weight-bold">{progress}%</span>
                        </div>
                        <div className="progress" style={{ height: "12px", borderRadius: "6px" }}>
                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: `${progress}%` }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {finished && (
                  <div className="success-container text-center p-5" style={{ backgroundColor: "#f4fcf6", borderRadius: "15px", border: "1px solid #d4edda" }}>
                    <FaCheckCircle size={60} color="#28a745" className="mb-3" />
                    <h2>Conversion Successful!</h2>
                    <p className="mb-4">All {totalPages} pages have been converted at <strong>{quality}x quality</strong>.</p>
                    <div className="actions d-flex justify-content-center gap-3">
                      <button onClick={downloadZip} className="readon bg-success px-5" style={{ border: "none" }}>
                        <FaDownload className="mr-2" /> Download ZIP
                      </button>
                      <button onClick={clearFile} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                        Convert New
                      </button>
                    </div>

                    <div className="mt-4">
                      <button onClick={() => setShowHistory(!showHistory)} className="btn btn-sm btn-link text-muted">
                        <FaHistory className="mr-1" /> {showHistory ? "Hide History" : "View Recent Conversions"}
                      </button>
                    </div>

                    {showHistory && (
                      <div className="history-list mt-3 p-3 bg-white rounded border">
                        {history.length > 0 ? (
                          history.map(item => (
                            <div key={item.id} className="d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded small">
                              <span className="text-truncate mr-2" style={{ maxWidth: "200px" }}>{item.name}</span>
                              <span className="badge badge-info">{item.pages} pgs</span>
                              <span className="text-muted" style={{ fontSize: "10px" }}>{item.date}</span>
                            </div>
                          ))
                        ) : (
                          <p className="small text-muted mb-0">No history found.</p>
                        )}
                        {history.length > 0 && (
                          <button onClick={clearHistory} className="btn btn-sm btn-link text-danger mt-2">Clear History</button>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {error && <div className="alert alert-danger mt-4">{error}</div>}

                {/* Privacy Features */}
                <div className="row mt-50 text-center">
                  {[
                    { icon: FaShieldAlt, title: "100% Private", text: "Rendering happens entirely in your browser." },
                    { icon: FaFileImage, title: "High Res", text: "Images are extracted at 2x original quality." },
                    { icon: FaLock, title: "Secure", text: "We never see or store your PDF contents." }
                  ].map((item, i) => (
                    <div key={i} className="col-md-4 mb-3">
                      <item.icon size={30} color="#03228f" className="mb-2" />
                      <h6>{item.title}</h6>
                      <p className="small text-muted">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Content */}
              <div className="seo-content mt-80 p-20">
                <h2 className="text-center mb-50">High Quality PDF Extraction</h2>
                <div className="row text-muted">
                  <div className="col-md-6 mb-4">
                    <h5>Preserve Every Detail</h5>
                    <p className="small">Our converter uses the advanced PDF.js engine to render pages with pixel-perfect accuracy. Whether it's a presentation slide or a complex document, the output JPGs will be crisp and clear.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h5>The Advantage of ZIP</h5>
                    <p className="text-muted small">Instead of making you download dozens of individual images, we bundle everything into a single, organized ZIP file. Fast, efficient, and ready for use.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PdfToJpg;
