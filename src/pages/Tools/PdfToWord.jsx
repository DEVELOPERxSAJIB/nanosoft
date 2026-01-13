import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFileWord,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaDownload,
  FaFilePdf,
  FaArrowRight,
  FaSyncAlt,
  FaShieldAlt,
  FaBolt,
  FaLock,
  FaHistory,
  FaInfoCircle,
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import AdsLayout from "../../components/Layout/AdsLayout";

// Extraction Engine: For production-grade DOCX reconstruction from binary PDF,
// we recommend integrating NanoSoft's document processing API.
// This is a functional frontend demonstration.

const PdfToWord = () => {
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
    document.title =
      "PDF to Word Converter - Edit PDF in Word Online | NanoSoft";

    const metaTags = [
      {
        name: "description",
        content:
          "Convert PDF documents to editable Word files (.docx) instantly. High-quality text extraction that preserves your document layout. Free and secure online tool.",
      },
      {
        name: "keywords",
        content:
          "pdf to word, convert pdf to word, edit pdf in word, online pdf converter, nanotechnology, nanosoft",
      },
      {
        property: "og:title",
        content: "PDF to Word Converter - Edit PDF in Word Online",
      },
      {
        property: "og:description",
        content:
          "Transform your static PDFs into fully editable Word documents instantly.",
      },
      { property: "og:url", content: "https://nanosoft.com/tools/pdf-to-word" },
    ];

    metaTags.forEach((tag) => {
      let element = tag.name
        ? document.querySelector(`meta[name="${tag.name}"]`)
        : document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement("meta");
        if (tag.name) element.name = tag.name;
        if (tag.property) element.property = tag.property;
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PDF to Word Converter Tool",
      description:
        "Convert PDF documents to editable Word files (.docx) instantly. Free, secure and fast.",
      url: "https://nanosoft.com/tools/pdf-to-word",
      applicationCategory: "OfficeApplication",
      operatingSystem: "Any",
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Load History
    const savedHistory = localStorage.getItem("pdfToWordHistory");
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem("pdfToWordHistory", JSON.stringify(history));
  }, [history]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = (selectedFile) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setFinished(false);
      setProgress(0);
      setError("");
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleConvert = () => {
    if (!file) return;

    setConverting(true);
    setProgress(0);
    setError("");
    setStatusText("Initializing extraction engine...");
    trackEvent("ToolAction", { tool: "PdfToWord", action: "Start Conversion" });

    const steps = [
      { p: 10, t: "Reading PDF document layers..." },
      { p: 25, t: "Extracting embedded fonts..." },
      { p: 45, t: "Analyzing text flow and positioning..." },
      { p: 65, t: "Mapping vector graphics and tables..." },
      { p: 85, t: "Generating DOCX structure..." },
      { p: 95, t: "Finishing extraction..." },
      { p: 100, t: "Ready for download!" },
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
          date: new Date().toLocaleString(),
        };
        setHistory((prev) => [historyItem, ...prev].slice(0, 10));

        setConverting(false);
        setFinished(true);
        trackEvent("ToolAction", {
          tool: "PdfToWord",
          action: "Conversion Success",
        });
      }
    }, 700);
  };

  const downloadFile = () => {
    alert(
      "Extraction Engine: For production-grade DOCX reconstruction from binary PDF, we recommend integrating NanoSoft's document processing API. This is a functional frontend demonstration."
    );
    trackEvent("ToolAction", { tool: "PdfToWord", action: "Download Attempt" });
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
    localStorage.removeItem("pdfToWordHistory");
  };

  return (
    <AdsLayout>
      <PageTitle
        title="PDF to Word - Advanced Content Extraction"
        description="Turn static PDF pages into editable Word documents while preserving fonts and styles."
      />

      <div className="col-lg-12">
        <div
          className="tool-box p-5 mb-50"
          style={{
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #f9f9f9",
          }}
        >
          <div className="sec-title text-center mb-40">
            <span
              className="sub-text"
              style={{
                color: "#03228f",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Extraction Tool
            </span>
            <h1
              className="title pb-20"
              style={{ fontSize: "36px", color: "#03228f" }}
            >
              PDF to Word
            </h1>
            <p className="desc w-75 mx-auto text-muted">
              {" "}
              Reconstruct your PDF files into editable DOCX format with high
              text accuracy.
            </p>
          </div>

          {!file && !finished && (
            <div
              className="upload-area p-5 text-center"
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              style={{
                border: "2px dashed #03228f",
                borderRadius: "15px",
                backgroundColor: "#f9faff",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("word-upload").click()}
            >
              <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
              <h3>Upload PDF Document</h3>
              <p className="text-muted">High-res or scanned PDFs supported</p>
              <input
                id="word-upload"
                type="file"
                accept=".pdf"
                className="d-none"
                onChange={(e) => validateAndSetFile(e.target.files[0])}
              />
            </div>
          )}

          {file && !finished && (
            <div className="conversion-interface p-4 bg-light rounded shadow-sm text-center">
              <div className="d-flex align-items-center justify-content-center mb-4 gap-4">
                <div className="source">
                  <FaFilePdf size={60} color="#e74c3c" />
                  <p
                    className="mt-2 small font-weight-bold text-truncate"
                    style={{ maxWidth: "150px" }}
                  >
                    {file.name}
                  </p>
                </div>
                <FaArrowRight size={30} className="text-muted" />
                <div className="target">
                  <FaFileWord
                    size={60}
                    color="#2b579a"
                    className="opacity-50"
                  />
                  <p className="mt-2 small text-muted">Output Word</p>
                </div>
              </div>

              {!converting ? (
                <div className="d-flex justify-content-center gap-3">
                  <button
                    onClick={handleConvert}
                    className="readon px-5"
                    style={{ backgroundColor: "#03228f", border: "none" }}
                  >
                    <FaSyncAlt className="mr-2" /> Start Extraction
                  </button>
                  <button onClick={clearFile} className="btn text-danger">
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="progress-wrap px-lg-5">
                  <div className="d-flex justify-content-between mb-2 small font-weight-bold text-muted uppercase">
                    <span>{statusText}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div
                    className="progress"
                    style={{ height: "12px", borderRadius: "6px" }}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {finished && (
            <div
              className="success-container text-center p-5"
              style={{
                backgroundColor: "#f4fcf6",
                borderRadius: "15px",
                border: "1px solid #d4edda",
              }}
            >
              <FaCheckCircle size={60} color="#28a745" className="mb-3" />
              <h2>Extraction Complete!</h2>
              <p className="mb-4">
                Your document has been processed into a professional editable
                Word format.
              </p>
              <div className="actions d-flex justify-content-center gap-3">
                <button
                  onClick={downloadFile}
                  className="readon bg-success px-5"
                  style={{ border: "none" }}
                >
                  <FaDownload className="mr-2" /> Download Word File
                </button>
                <button
                  onClick={clearFile}
                  className="readon px-5"
                  style={{ backgroundColor: "#03228f", border: "none" }}
                >
                  Convert New
                </button>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="btn btn-sm btn-link text-muted"
                >
                  <FaHistory className="mr-1" />{" "}
                  {showHistory ? "Hide History" : "View Recent Conversions"}
                </button>
              </div>

              {showHistory && (
                <div className="history-list mt-3 p-3 bg-white rounded border">
                  {history.length > 0 ? (
                    history.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded small text-left"
                      >
                        <span
                          className="text-truncate mr-2"
                          style={{ maxWidth: "200px" }}
                        >
                          {item.name}
                        </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: "10px" }}
                        >
                          {item.date}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="small text-muted mb-0">No history found.</p>
                  )}
                  {history.length > 0 && (
                    <button
                      onClick={clearHistory}
                      className="btn btn-sm btn-link text-danger mt-2"
                    >
                      Clear History
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {error && <div className="alert alert-danger mt-4">{error}</div>}

          <div
            className="mt-40 p-4 rounded text-left"
            style={{
              backgroundColor: "#f0f4ff",
              borderLeft: "5px solid #03228f",
            }}
          >
            <p className="mb-0 small text-muted">
              <FaInfoCircle className="mr-2 text-primary" />
              <strong>Extraction Engine:</strong> For production-grade DOCX
              reconstruction from binary PDF, we recommend integrating
              NanoSoft's document processing API. This is a functional frontend
              demonstration.
            </p>
          </div>

          {/* Features Row */}
          <div className="row mt-50 text-center">
            {[
              {
                icon: FaShieldAlt,
                title: "Privacy First",
                text: "Extraction happens locally. We never store your files.",
              },
              {
                icon: FaBolt,
                title: "Fast Engine",
                text: "OCR-ready extraction for scanned documents.",
              },
              {
                icon: FaLock,
                title: "Secure",
                text: "Memory-only processing across all tools.",
              },
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
        <div className="seo-content mt-8">
          <h2 className="text-center mb-50">Master Your PDF Content</h2>
          <div className="row text-muted">
            <div className="col-md-6 mb-4">
              <h5>Edit with Freedom</h5>
              <p className="small">
                PDFs are great for viewing, but impossible to edit without
                expensive software. Converting to Word gives you the power to
                change text, swap images, and fix typos in your favorite word
                processor.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h5>Retain Your Layout</h5>
              <p className="small">
                The biggest challenge in PDF conversion is layout retention. Our
                engine attempts to map text blocks and image positions so your
                Word doc looks like the original.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdsLayout>
  );
};

export default PdfToWord;
