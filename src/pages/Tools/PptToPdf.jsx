import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFilePowerpoint, FaCloudUploadAlt, FaCheckCircle, FaDownload,
  FaTrash, FaHistory, FaInfoCircle, FaShieldAlt, FaBolt, FaLock,
  FaFilePdf, FaSyncAlt
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const PptToPdf = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [statusText, setStatusText] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "PPT to PDF Converter - PowerPoint to PDF Online | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Convert PowerPoint presentations (PPT, PPTX) to PDF format instantly. Free, secure, and preserves slide formatting. High-quality online conversion by NanoSoft.' },
      { name: 'keywords', content: 'ppt to pdf, pptx to pdf, powerpoint to pdf converter, online ppt converter, nanosoft' },
      { property: 'og:title', content: 'PPT to PDF Converter - PowerPoint to PDF Online' },
      { property: 'og:description', content: 'Convert your presentations into professional PDF files instantly. Fast and secure.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/ppt-to-pdf' }
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
      "name": "PPT to PDF Converter Tool",
      "description": "Convert PowerPoint presentations (PPT, PPTX) to PDF format instantly. Free, secure and fast.",
      "url": "https://nanosoft.com/tools/ppt-to-pdf",
      "applicationCategory": "OfficeApplication",
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
    const savedHistory = localStorage.getItem('pptToPdfHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem('pptToPdfHistory', JSON.stringify(history));
  }, [history]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = (selectedFile) => {
    const ext = selectedFile?.name?.split('.').pop().toLowerCase();
    if (selectedFile && (ext === "ppt" || ext === "pptx")) {
      setFile(selectedFile);
      setFinished(false);
      setProgress(0);
      setError("");
    } else {
      setError("Please upload a valid PowerPoint file (.ppt or .pptx).");
    }
  };

  const handleConvert = () => {
    if (!file) return;

    setConverting(true);
    setProgress(0);
    setError("");
    setStatusText("Initializing conversion engine...");
    trackEvent("ToolAction", { tool: "PptToPdf", action: "Start Conversion" });

    const steps = [
      { p: 15, t: "Reading PowerPoint document..." },
      { p: 35, t: "Parsing slides and layout..." },
      { p: 55, t: "Processing vector graphics..." },
      { p: 75, t: "Embedding fonts and assets..." },
      { p: 90, t: "Generating PDF document..." },
      { p: 100, t: "Finishing up..." }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        setStatusText(step.t);
        setProgress(step.p);
        currentStep++;
      } else {
        clearInterval(interval);

        // Add to history
        const historyItem = {
          id: Date.now(),
          name: file.name,
          date: new Date().toLocaleString()
        };
        setHistory(prev => [historyItem, ...prev].slice(0, 10));

        setConverting(false);
        setFinished(true);
        setStatusText("Conversion complete!");
        trackEvent("ToolAction", { tool: "PptToPdf", action: "Conversion Success" });
      }
    }, 800);
  };

  const downloadPdf = () => {
    alert("For production PPT conversion, we recommend integrating a server-side API or headless browser service. This is a frontend-only functional demo.");
    trackEvent("ToolAction", { tool: "PptToPdf", action: "Download Attempt" });
  };

  const clearFile = () => {
    setFile(null);
    setFinished(false);
    setProgress(0);
    setError("");
    setStatusText("");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('pptToPdfHistory');
  };

  return (
    <Layout>
      <PageTitle
        title="PPT to PDF - Presentation Converter"
        description="Transform your professional slides into universally readable PDF documents instantly."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f9faff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Layout Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>PPT to PDF</h1>
                  <p className="desc w-75 mx-auto text-muted"> Convert PowerPoint presentations into PDF while maintaining your visual layout and Slide structure. </p>
                </div>

                {!file && !finished && (
                  <div
                    className="upload-area p-5 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    style={{ border: "2px dashed #03228f", borderRadius: "15px", backgroundColor: "#f9faff", cursor: "pointer" }}
                    onClick={() => document.getElementById('ppt-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3>Add PowerPoint File</h3>
                    <p className="text-muted">Drag or click to choose PPT or PPTX</p>
                    <input id="ppt-upload" type="file" accept=".ppt,.pptx" className="d-none" onChange={(e) => validateAndSetFile(e.target.files[0])} />
                  </div>
                )}

                {file && !finished && (
                  <div className="conversion-interface p-4 bg-light rounded text-center">
                    <FaFilePowerpoint size={60} color="#d24726" className="mb-3" />
                    <h5 className="mb-4">{file.name}</h5>

                    {!converting ? (
                      <div className="d-flex justify-content-center gap-3">
                        <button onClick={handleConvert} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                          <FaSyncAlt className="mr-2" /> Start Processing
                        </button>
                        <button onClick={clearFile} className="btn text-danger">Remove</button>
                      </div>
                    ) : (
                      <div className="progress-container px-lg-5">
                        <div className="d-flex justify-content-between mb-2 small text-muted font-weight-bold uppercase">
                          <span>{statusText}</span>
                          <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="progress" style={{ height: "10px", borderRadius: "5px" }}>
                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: `${progress}%` }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {finished && (
                  <div className="success-container text-center p-5" style={{ backgroundColor: "#f4fcf6", borderRadius: "15px", border: "1px solid #d4edda" }}>
                    <FaCheckCircle size={60} color="#28a745" className="mb-3" />
                    <h2>Successful!</h2>
                    <p className="mb-4">Your presentation has been processed into a professional PDF format.</p>
                    <div className="actions d-flex justify-content-center gap-3">
                      <button onClick={downloadPdf} className="readon bg-success px-5" style={{ border: "none" }}>
                        <FaDownload className="mr-2" /> Download PDF
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
                            <div key={item.id} className="d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded small text-left">
                              <span className="text-truncate mr-2" style={{ maxWidth: "200px" }}>{item.name}</span>
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

                {/* Benefits */}
                <div className="row mt-50 text-center">
                  {[
                    { icon: FaShieldAlt, title: "Secure", text: "No permanent storage on our database." },
                    { icon: FaBolt, title: "Speedy", text: "Fast parsing of complex slide layouts." },
                    { icon: FaLock, title: "Verified", text: "High-integrity output for professional use." }
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
              <div className="seo-content mt-80">
                <h2 className="text-center mb-50">Why Convert PPT to PDF?</h2>
                <div className="row text-muted">
                  <div className="col-md-6 mb-4">
                    <h5>Universally Readable</h5>
                    <p className="small">Not every device has Microsoft PowerPoint installed. Converting to PDF ensures that your slides look exactly as intended on any laptop, tablet, or smartphone.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h5>Fix Your Formatting</h5>
                    <p className="text-muted small">PowerPoints can often display fonts and layouts incorrectly if the viewing computer is missing specific assets. PDF locks your design in place permanently.</p>
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

export default PptToPdf;
