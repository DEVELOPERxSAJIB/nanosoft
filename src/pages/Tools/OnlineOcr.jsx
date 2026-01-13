import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFileImage, FaCloudUploadAlt, FaCheckCircle, FaDownload,
  FaTrash, FaHistory, FaInfoCircle, FaShieldAlt, FaBolt, FaLock,
  FaSearch, FaCopy, FaCheck
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import Tesseract from 'tesseract.js';

const OnlineOcr = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("eng");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Online OCR - Extract Text from Image Free | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Convert images to text using our free online OCR tool. Extract text from JPG, PNG, and PDF. High precision Optical Character Recognition by NanoSoft.' },
      { name: 'keywords', content: 'online ocr, image to text, extract text from image, picture to text, free ocr, text scanner, nanosoft' },
      { property: 'og:title', content: 'Online OCR - Extract Text from Image Free' },
      { property: 'og:description', content: 'Convert images to text instantly with high accuracy. Supports multiple languages including English, Spanish, and French.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/online-ocr' }
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

    // Load History
    const savedHistory = localStorage.getItem('ocrHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));

    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Save history
  useEffect(() => {
    localStorage.setItem('ocrHistory', JSON.stringify(history));
  }, [history]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = (selectedFile) => {
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      if (preview) URL.revokeObjectURL(preview);
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setFinished(false);
      setProgress(0);
      setError("");
      setExtractedText("");
    } else {
      setError("Please upload a valid image file (JPG, PNG).");
    }
  };

  const handleOcr = async () => {
    if (!file) return;

    setProcessing(true);
    setStatus("Initializing AI engine...");
    setProgress(5);
    setError("");
    trackEvent("ToolAction", { tool: "OCR", action: "Start Processing", lang: language });

    try {
      const result = await Tesseract.recognize(
        file,
        language,
        {
          logger: m => {
            if (m.status === 'recognizing text') {
              setProgress(Math.round(m.progress * 100));
              setStatus("Scanning patterns and text...");
            } else {
              setStatus(m.status.charAt(0).toUpperCase() + m.status.slice(1).replace(/_/g, " "));
            }
          }
        }
      );

      setExtractedText(result.data.text);
      setProcessing(false);
      setFinished(true);
      setProgress(100);

      // Add to history
      const historyItem = {
        id: Date.now(),
        name: file.name,
        text: result.data.text.substring(0, 100) + (result.data.text.length > 100 ? "..." : ""),
        fullText: result.data.text,
        date: new Date().toLocaleString()
      };
      setHistory(prev => [historyItem, ...prev].slice(0, 5));

      trackEvent("ToolAction", { tool: "OCR", action: "Processing Success" });
    } catch (err) {
      console.error(err);
      setError("Failed to extract text. The image might be too blurry or the language selection might be incorrect.");
      setProcessing(false);
    }
  };

  const copyText = () => {
    if (!extractedText) return;
    navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent("ToolAction", { tool: "OCR", action: "Copy Text" });
  };

  const downloadText = () => {
    if (!extractedText) return;
    const element = document.createElement("a");
    const fileBlob = new Blob([extractedText], { type: 'text/plain' });
    element.href = URL.createObjectURL(fileBlob);
    element.download = `extracted_${file.name.split('.')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    trackEvent("ToolAction", { tool: "OCR", action: "Download TXT" });
  };

  const clearFile = () => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setFinished(false);
    setProgress(0);
    setError("");
    setExtractedText("");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('ocrHistory');
  };

  return (
    <Layout>
      <PageTitle
        title="Online OCR - Image to Text"
        description="Convert your scanned images and documents into editable text instantly."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f8f9ff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>AI Utility</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>Online OCR</h1>
                  <p className="desc w-75 mx-auto text-muted"> Use Optical Character Recognition to pull text from images automatically. </p>
                </div>

                {!file && !finished && (
                  <div
                    className="upload-area p-5 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    style={{ border: "2px dashed #03228f", borderRadius: "15px", backgroundColor: "#f9faff", cursor: "pointer" }}
                    onClick={() => document.getElementById('ocr-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3>Click to Upload Image</h3>
                    <p className="text-muted">Extract text from your documents here</p>
                    <input id="ocr-upload" type="file" accept="image/*" className="d-none" onChange={(e) => validateAndSetFile(e.target.files[0])} />
                  </div>
                )}

                {file && !finished && (
                  <div className="processing-container p-4 rounded bg-light">
                    <div className="row align-items-center">
                      <div className="col-md-5 text-center">
                        <img src={preview} alt="OCR source" style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "10px", border: "5px solid #fff", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }} />
                      </div>
                      <div className="col-md-7 px-lg-5 py-4">
                        {!processing ? (
                          <>
                            <h5 className="mb-3">Ready to extract?</h5>
                            <div className="form-group mb-3">
                              <label className="small font-weight-bold text-muted d-block mb-2">Select Document Language:</label>
                              <select
                                className="form-control"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                style={{ borderRadius: "10px", border: "1px solid #ddd" }}
                              >
                                <option value="eng">English</option>
                                <option value="spa">Spanish</option>
                                <option value="fra">French</option>
                                <option value="deu">German</option>
                                <option value="por">Portuguese</option>
                                <option value="ita">Italian</option>
                                <option value="chi_sim">Chinese (Simplified)</option>
                                <option value="jpn">Japanese</option>
                              </select>
                            </div>
                            <p className="small text-muted mb-4">Our AI will scan <strong>{file.name}</strong> for all visible characters and words.</p>
                            <div className="d-flex gap-2">
                              <button onClick={handleOcr} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                                <FaSearch className="mr-2" /> Start OCR
                              </button>
                              <button onClick={clearFile} className="btn text-danger">Remove</button>
                            </div>
                          </>
                        ) : (
                          <div className="status-wrap">
                            <h6 className="mb-2 text-primary uppercase small font-weight-bold">{status}</h6>
                            <div className="progress mb-2" style={{ height: "12px", borderRadius: "6px" }}>
                              <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: `${progress}%` }}></div>
                            </div>
                            <span className="small text-muted">Neural network is analyzing patterns... {progress}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {finished && (
                  <div className="result-container">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0 text-success"><FaCheckCircle className="mr-2" /> Extracted Text</h5>
                      <div className="actions d-flex gap-2">
                        <button onClick={copyText} className="btn btn-sm btn-outline-primary border-0">
                          {copied ? <><FaCheck className="mr-1" /> Copied</> : <><FaCopy className="mr-1" /> Copy</>}
                        </button>
                        <button onClick={downloadText} className="btn btn-sm btn-outline-secondary border-0"><FaDownload className="mr-1" /> .txt</button>
                      </div>
                    </div>
                    <textarea
                      className="form-control p-4"
                      readOnly
                      value={extractedText || "No text could be found in this image."}
                      style={{ minHeight: "300px", borderRadius: "15px", fontSize: "15px", backgroundColor: "#f9faff", border: "1px solid #eef" }}
                    />
                    <div className="text-center mt-4 d-flex justify-content-center gap-3">
                      <button onClick={clearFile} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>Convert Another Image</button>
                      <button onClick={() => setShowHistory(!showHistory)} className="btn btn-outline-info" style={{ borderRadius: "10px" }}>
                        <FaHistory className="mr-1" /> {showHistory ? "Hide History" : "View History"}
                      </button>
                    </div>

                    {showHistory && (
                      <div className="history-section mt-5 p-4 rounded" style={{ backgroundColor: "#f8f9fa", border: "1px solid #eef" }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h6 className="mb-0 font-weight-bold">Recent Extractions</h6>
                          <button onClick={clearHistory} className="btn btn-sm btn-link text-danger p-0">Clear All</button>
                        </div>
                        {history.length === 0 ? (
                          <p className="small text-muted mb-0">No recent scans found.</p>
                        ) : (
                          <div className="history-list d-flex flex-column gap-3">
                            {history.map(item => (
                              <div key={item.id} className="history-item p-3 bg-white rounded shadow-sm border" style={{ cursor: "pointer" }} onClick={() => {
                                setExtractedText(item.fullText);
                                setFinished(true);
                                setFile({ name: item.name }); // Fake file object for UI consistency
                              }}>
                                <div className="d-flex justify-content-between mb-1">
                                  <span className="font-weight-bold small text-primary">{item.name}</span>
                                  <span className="text-muted small" style={{ fontSize: "10px" }}>{item.date}</span>
                                </div>
                                <p className="small text-muted mb-0" style={{ fontSize: "12px" }}>{item.text}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {error && <div className="alert alert-danger mt-4">{error}</div>}

                {/* AI Features */}
                <div className="row mt-50 text-center">
                  {[
                    { icon: FaShieldAlt, title: "Private Scan", text: "Processing happens in your browser engine." },
                    { icon: FaBolt, title: "Fast AI", text: "OCR engine optimized for web execution." },
                    { icon: FaLock, title: "Secure", text: "No files are saved on our servers." }
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
                <h2 className="text-center mb-50">Understanding OCR Technology</h2>
                <div className="row text-muted">
                  <div className="col-md-6 mb-4">
                    <h5>Digital archiving</h5>
                    <p className="small">OCR is the primary step in turning paper documents into searchable digital databases. Our tool converts static pixels into dynamic text strings that you can edit and copy.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h5>High-Precision Engine</h5>
                    <p className="small">We use Tesseract.js, a port of the world's most accurate OCR engine, allowing it to recognize hundreds of fonts and maintain document structure even within the browser.</p>
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

export default OnlineOcr;
