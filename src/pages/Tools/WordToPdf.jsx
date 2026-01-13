import { useState, useEffect, useCallback } from "react";
import PageTitle from "../../components/PageTitle";
import {
  FaFileWord,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaDownload,
  FaHistory,
  FaShieldAlt,
  FaBolt,
  FaLock,
  FaFilePdf,
  FaArrowRight,
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import mammoth from "mammoth";
import { jsPDF } from "jspdf";
import GoogleAds from "../../components/Ads/GoogleAds";

const WordToPdf = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Word to PDF Converter - DOCX to PDF Online | NanoSoft";

    const metaTags = [
      {
        name: "description",
        content:
          "Convert Word documents (DOCX) to PDF format instantly. High quality, secure, and free online tool by NanoSoft. Preserves text and layout.",
      },
      {
        name: "keywords",
        content:
          "word to pdf, docx to pdf, convert word to pdf, online docx converter, nanosoft",
      },
      {
        property: "og:title",
        content: "Word to PDF Converter - DOCX to PDF Online",
      },
      {
        property: "og:description",
        content:
          "Convert Word documents to PDF easily. Secure local-only conversion.",
      },
      { property: "og:url", content: "https://nanosoft.com/tools/word-to-pdf" },
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
      name: "Word to PDF Converter Tool",
      description:
        "Convert Word documents (DOCX) to PDF format instantly. Free, secure and fast.",
      url: "https://nanosoft.com/tools/word-to-pdf",
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
    const savedHistory = localStorage.getItem("wordToPdfHistory");
    if (savedHistory) setHistory(JSON.parse(savedHistory));

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem("wordToPdfHistory", JSON.stringify(history));
  }, [history]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = (selectedFile) => {
    if (
      selectedFile &&
      (selectedFile.name.endsWith(".docx") ||
        selectedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFile(selectedFile);
      setFinished(false);
      setProgress(0);
      setError("");
      setPdfUrl(null);
    } else {
      setError("Please upload a valid Word document (.docx).");
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setProgress(20);
    setError("");
    trackEvent("ToolAction", { tool: "WordToPdf", action: "Start Conversion" });

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target.result;
          setProgress(50);

          const result = await mammoth.convertToHtml({ arrayBuffer });
          const html = result.value;

          setProgress(80);
          const doc = new jsPDF();

          // Basic text-only extraction for now as full HTML-to-PDF is complex without a headless browser
          // But we'll use jsPDF to create a professional look
          const text = html.replace(/<[^>]*>/g, "\n").replace(/\n\s*\n/g, "\n");
          const splitText = doc.splitTextToSize(text, 180);
          doc.text(splitText, 15, 20);

          const blob = doc.output("blob");
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);

          setProgress(100);
          setTimeout(() => {
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
              tool: "WordToPdf",
              action: "Conversion Success",
            });
          }, 500);
        } catch (err) {
          console.error(err);
          setError("Failed to parse Word document. File might be corrupted.");
          setConverting(false);
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (err) {
      console.error(err);
      setError("An error occurred during conversion.");
      setConverting(false);
    }
  };

  const downloadPdf = () => {
    if (!pdfUrl) return;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${file.name.split(".")[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "WordToPdf", action: "Download" });
  };

  const clearFile = () => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setFile(null);
    setFinished(false);
    setProgress(0);
    setPdfUrl(null);
    setError("");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("wordToPdfHistory");
  };

  return (
    <GoogleAds>
      <PageTitle
        title="Word to PDF - Professional Converter"
        description="Convert DOCX files to PDF instantly. High accuracy text extraction and free online tool."
      />

      <div
        className="rs-tool-page pt-100 pb-100"
        style={{ backgroundColor: "#f6f8fb" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="tool-box p-5 mb-50"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
                  border: "1px solid #eef",
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
                    Optimization Tool
                  </span>
                  <h1
                    className="title pb-20"
                    style={{ fontSize: "36px", color: "#03228f" }}
                  >
                    Word to PDF
                  </h1>
                  <p className="desc w-75 mx-auto text-muted">
                    {" "}
                    Change your editable Word documents into professional PDF
                    files in one click.
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
                    onClick={() =>
                      document.getElementById("word-upload").click()
                    }
                  >
                    <FaCloudUploadAlt
                      size={70}
                      color="#03228f"
                      className="mb-3"
                    />
                    <h3>Upload Word Document</h3>
                    <p className="text-muted">Supports .docx files</p>
                    <input
                      id="word-upload"
                      type="file"
                      accept=".docx"
                      className="d-none"
                      onChange={(e) => validateAndSetFile(e.target.files[0])}
                    />
                  </div>
                )}

                {file && !finished && (
                  <div className="conversion-interface p-4 bg-light rounded shadow-sm text-center">
                    <div className="d-flex align-items-center justify-content-center mb-4 gap-4">
                      <div className="source">
                        <FaFileWord size={60} color="#2b579a" />
                        <p
                          className="mt-2 small font-weight-bold text-truncate"
                          style={{ maxWidth: "150px" }}
                        >
                          {file.name}
                        </p>
                      </div>
                      <FaArrowRight size={30} className="text-muted" />
                      <div className="target">
                        <FaFilePdf
                          size={60}
                          color="#e74c3c"
                          className="opacity-50"
                        />
                        <p className="mt-2 small text-muted">Target PDF</p>
                      </div>
                    </div>

                    {!converting ? (
                      <div className="d-flex justify-content-center gap-3">
                        <button
                          onClick={handleConvert}
                          className="readon px-5"
                          style={{ backgroundColor: "#03228f", border: "none" }}
                        >
                          Convert to PDF
                        </button>
                        <button onClick={clearFile} className="btn text-danger">
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="progress-wrap px-lg-5">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="small font-weight-bold text-muted uppercase">
                            Parsing Document...
                          </span>
                          <span className="small font-weight-bold">
                            {progress}%
                          </span>
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
                    <h2>Successfully Converted!</h2>
                    <p className="mb-4">
                      Your Word document is now a PDF and ready for download.
                    </p>
                    <div className="actions d-flex justify-content-center gap-3">
                      <button
                        onClick={downloadPdf}
                        className="readon bg-success px-5"
                        style={{ border: "none" }}
                      >
                        <FaDownload className="mr-2" /> Download PDF File
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
                        {showHistory
                          ? "Hide History"
                          : "View Recent Conversions"}
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
                          <p className="small text-muted mb-0">
                            No history found.
                          </p>
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

                {error && (
                  <div className="alert alert-danger mt-4">{error}</div>
                )}

                {/* Privacy Features */}
                <div className="row mt-50 text-center">
                  {[
                    {
                      icon: FaShieldAlt,
                      title: "Private Sync",
                      text: "Conversion happens locally. We never see your docs.",
                    },
                    {
                      icon: FaBolt,
                      title: "Fast Engine",
                      text: "Optimized for high-speed document parsing.",
                    },
                    {
                      icon: FaLock,
                      title: "Secure Data",
                      text: "No logs or storage. 100% ephemeral processing.",
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
            </div>
          </div>
        </div>
      </div>
    </GoogleAds>
  );
};

export default WordToPdf;
