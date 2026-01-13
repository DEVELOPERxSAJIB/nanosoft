import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFilePdf, FaCloudUploadAlt, FaCheckCircle, FaDownload,
  FaTrash, FaHistory, FaInfoCircle, FaShieldAlt, FaBolt, FaLock,
  FaColumns, FaFastForward
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import { PDFDocument } from 'pdf-lib';

const SplitPdf = () => {
  const [file, setFile] = useState(null);
  const [splitting, setSplitting] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [splitRange, setSplitRange] = useState({ start: 1, end: 1 });
  const [splitResultUrl, setSplitResultUrl] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Split PDF Online - Extract Pages from PDF | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Extract specific pages or page ranges from your PDF documents instantly. Free, secure, and preserves original quality. No registration required.' },
      { name: 'keywords', content: 'split pdf, extract pdf pages, separate pdf, online pdf splitter, nanotechnology, nanosoft' },
      { property: 'og:title', content: 'Split PDF Online - Extract Pages from PDF' },
      { property: 'og:description', content: 'Extract specific pages from your PDF documents instantly. Secure and free online PDF splitter.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/split-pdf' }
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

    script.textContent = JSON.stringify(structuredData);

    // Load History
    const savedHistory = localStorage.getItem('splitPdfHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));

    return () => {
      if (splitResultUrl) URL.revokeObjectURL(splitResultUrl);
    };
  }, [splitResultUrl]);

  // Save history
  useEffect(() => {
    localStorage.setItem('splitPdfHistory', JSON.stringify(history));
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
        const pdf = await PDFDocument.load(arrayBuffer);
        const count = pdf.getPageCount();

        setFile(selectedFile);
        setTotalPages(count);
        setSplitRange({ start: 1, end: count });
        setFinished(false);
        setProgress(0);
        setError("");
        setSplitResultUrl(null);
      } catch (err) {
        setError("Could not read PDF. It might be password protected.");
      }
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleSplit = async () => {
    if (!file || splitRange.start < 1 || splitRange.end > totalPages || splitRange.start > splitRange.end) {
      setError("Invalid page range selected.");
      return;
    }

    setSplitting(true);
    setProgress(30);
    setError("");
    trackEvent("ToolAction", { tool: "SplitPDF", action: "Start Splitting" });

    try {
      const originalPdfBuffer = await file.arrayBuffer();
      const originalPdf = await PDFDocument.load(originalPdfBuffer);
      const newPdf = await PDFDocument.create();

      const pageIndices = [];
      for (let i = splitRange.start - 1; i < splitRange.end; i++) {
        pageIndices.push(i);
      }

      setProgress(60);
      const copiedPages = await newPdf.copyPages(originalPdf, pageIndices);
      copiedPages.forEach((page) => newPdf.addPage(page));

      const splitPdfBytes = await newPdf.save();
      const blob = new Blob([splitPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setSplitResultUrl(url);

      setProgress(100);
      setTimeout(() => {
        // Add to history
        const historyItem = {
          id: Date.now(),
          name: file.name,
          range: `${splitRange.start} - ${splitRange.end}`,
          date: new Date().toLocaleString()
        };
        setHistory(prev => [historyItem, ...prev].slice(0, 10));

        setSplitting(false);
        setFinished(true);
        trackEvent("ToolAction", { tool: "SplitPDF", action: "Splitting Success" });
      }, 500);
    } catch (err) {
      console.error(err);
      setError("An error occurred during splitting.");
      setSplitting(false);
    }
  };

  const downloadFile = () => {
    if (!splitResultUrl) return;
    const link = document.createElement("a");
    link.href = splitResultUrl;
    link.download = `split_${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "SplitPDF", action: "Download" });
  };

  const clearFile = () => {
    if (splitResultUrl) URL.revokeObjectURL(splitResultUrl);
    setFile(null);
    setTotalPages(0);
    setFinished(false);
    setProgress(0);
    setError("");
    setSplitResultUrl(null);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('splitPdfHistory');
  };

  return (
    <Layout>
      <PageTitle
        title="Split PDF - Extract Specific Pages"
        description="Choose exactly which pages you need from your PDF document. Secure and fast."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f6f8fb" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>PDF Utility</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>Split PDF</h1>
                  <p className="desc w-75 mx-auto text-muted"> Extract a range of pages into a new PDF file instantly.</p>
                </div>

                {!file && !finished && (
                  <div
                    className="upload-area p-5 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    style={{ border: "2px dashed #03228f", borderRadius: "15px", backgroundColor: "#f9faff", cursor: "pointer" }}
                    onClick={() => document.getElementById('split-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3>Upload PDF to Split</h3>
                    <p className="text-muted">or Click to select file</p>
                    <input id="split-upload" type="file" accept="application/pdf" className="d-none" onChange={(e) => validateAndSetFile(e.target.files[0])} />
                  </div>
                )}

                {file && !finished && (
                  <div className="split-interface p-4 bg-light rounded shadow-sm">
                    <div className="row align-items-center mb-4">
                      <div className="col-md-3 text-center">
                        <FaFilePdf size={60} color="#e74c3c" />
                        <p className="mt-2 small font-weight-bold mb-0 text-truncate">{file.name}</p>
                        <span className="badge badge-primary">{totalPages} Pages</span>
                      </div>
                      <div className="col-md-9 px-lg-4 mt-3 mt-md-0">
                        <h6 className="mb-3">Select Page Range:</h6>
                        <div className="d-flex align-items-center gap-3">
                          <div className="flex-fill">
                            <label className="small text-muted mb-1">From Page</label>
                            <input
                              type="number"
                              className="form-control"
                              min="1"
                              max={totalPages}
                              value={splitRange.start}
                              onChange={(e) => setSplitRange(prev => ({ ...prev, start: Math.max(1, parseInt(e.target.value) || 0) }))}
                            />
                          </div>
                          <div className="pt-4 text-muted"><FaFastForward /></div>
                          <div className="flex-fill">
                            <label className="small text-muted mb-1">To Page</label>
                            <input
                              type="number"
                              className="form-control"
                              min="1"
                              max={totalPages}
                              value={splitRange.end}
                              onChange={(e) => setSplitRange(prev => ({ ...prev, end: Math.min(totalPages, parseInt(e.target.value) || 0) }))}
                            />
                          </div>
                        </div>
                        <p className="mt-3 small text-info"><FaInfoCircle className="mr-1" /> This will create a new PDF with <strong>{splitRange.end - splitRange.start + 1}</strong> pages.</p>
                      </div>
                    </div>

                    {!splitting ? (
                      <div className="d-flex justify-content-center gap-3 pt-3">
                        <button onClick={handleSplit} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                          <FaColumns className="mr-2" /> Split PDF Now
                        </button>
                        <button onClick={clearFile} className="btn text-muted">Cancel</button>
                      </div>
                    ) : (
                      <div className="progress-container pt-4">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="small text-muted font-weight-bold">Extracting pages...</span>
                          <span className="small font-weight-bold">{progress}%</span>
                        </div>
                        <div className="progress" style={{ height: "10px", borderRadius: "5px" }}>
                          <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${progress}%`, backgroundColor: "#03228f" }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {finished && (
                  <div className="success-container text-center p-5" style={{ backgroundColor: "#f4fcf6", borderRadius: "15px", border: "1px solid #d4edda" }}>
                    <FaCheckCircle size={60} color="#28a745" className="mb-3" />
                    <h2>PDF Split Successfully!</h2>
                    <p className="mb-4">Pages {splitRange.start} to {splitRange.end} have been extracted.</p>
                    <div className="actions d-flex justify-content-center gap-3">
                      <button onClick={downloadFile} className="readon bg-success px-5" style={{ border: "none" }}>
                        <FaDownload className="mr-2" /> Download Extracted PDF
                      </button>
                      <button onClick={clearFile} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                        Split New
                      </button>
                    </div>

                    <div className="mt-4">
                      <button onClick={() => setShowHistory(!showHistory)} className="btn btn-sm btn-link text-muted">
                        <FaHistory className="mr-1" /> {showHistory ? "Hide History" : "View Recent Splits"}
                      </button>
                    </div>

                    {showHistory && (
                      <div className="history-list mt-3 p-3 bg-white rounded border">
                        {history.length > 0 ? (
                          history.map(item => (
                            <div key={item.id} className="d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded small text-left border">
                              <div className="text-truncate mr-2" style={{ maxWidth: "200px" }}>
                                <div className="font-weight-bold">{item.name}</div>
                                <div className="text-muted" style={{ fontSize: "10px" }}>Range: {item.range}</div>
                              </div>
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

                {/* Benefits Indicators */}
                <div className="row mt-50 text-center">
                  {[
                    { icon: FaShieldAlt, title: "Private Extraction", text: "Processing stays in your browser." },
                    { icon: FaLock, title: "Zero Logs", text: "We never see your document contents." },
                    { icon: FaBolt, title: "Instant", text: "Split thousands of pages in seconds." }
                  ].map((item, i) => (
                    <div key={i} className="col-md-4 mb-3">
                      <item.icon size={30} color="#03228f" className="mb-2" />
                      <h6>{item.title}</h6>
                      <p className="small text-muted">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Content Section */}
              <div className="seo-content mt-80 p-20">
                <h2 className="text-center mb-50">Master Your PDF Content</h2>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h5>Why split a PDF?</h5>
                    <p className="text-muted small">Large PDF manuals or reports often contain information you don't need. Splitting allows you to extract only the relevant chapters or specific invoice pages for easier sharing and smaller file sizes.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h5>Quality Guaranteed</h5>
                    <p className="text-muted small">Our extraction engine preserves the original resolution, fonts, and internal links of your document. The split pages will look identical to the original.</p>
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

export default SplitPdf;
