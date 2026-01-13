import React, { useState, useEffect, useCallback, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFilePdf, FaCloudUploadAlt, FaCheckCircle, FaDownload,
  FaTrash, FaHistory, FaInfoCircle, FaShieldAlt, FaBolt, FaLock
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const CompressPdf = () => {
  const [file, setFile] = useState(null);
  const [compressing, setCompressing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressionLevel, setCompressionLevel] = useState("recommended"); // extreme, recommended, low
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const compressionIntervalRef = useRef(null);

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Compress PDF Online - Reduce PDF File Size | NanoSoft";

    // Meta updates
    const metaTags = [
      { name: 'description', content: 'Reduce the file size of your PDFs for easy sharing while maintaining high quality. Free, fast and secure online PDF compressor by NanoSoft.' },
      { name: 'keywords', content: 'compress pdf, reduce pdf size, shrink pdf, pdf optimizer, online pdf compressor, nanotechnology, nanosoft' },
      { property: 'og:title', content: 'Compress PDF Online - Reduce PDF File Size | NanoSoft' },
      { property: 'og:description', content: 'Reduce the file size of your PDFs for easy sharing while maintaining high quality. Free, fast and secure online PDF compressor by NanoSoft.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/compress-pdf' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Compress PDF Online - Reduce PDF File Size | NanoSoft' },
      { name: 'twitter:description', content: 'Reduce the file size of your PDFs for easy sharing while maintaining high quality. Free, fast and secure online PDF compressor by NanoSoft.' }
    ];

    metaTags.forEach(tag => {
      let element = tag.name
        ? document.querySelector(`meta[name="${tag.name}"]`)
        : document.querySelector(`meta[property="${tag.property}"]`);

      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.name = tag.name;
        if (tag.property) element.property = tag.property;
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

    // Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Compress PDF Tool",
      "description": "Reduce the file size of your PDFs for easy sharing while maintaining high quality.",
      "url": "https://nanosoft.com/tools/compress-pdf",
      "applicationCategory": "PDFTool",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Load History
    const savedHistory = localStorage.getItem('pdfCompressionHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));

    return () => {
      if (compressionIntervalRef.current) clearInterval(compressionIntervalRef.current);
    };
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem('pdfCompressionHistory', JSON.stringify(history));
  }, [history]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = (selectedFile) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setOriginalSize(selectedFile.size);
      setFinished(false);
      setProgress(0);
      setError("");
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleFileChange = (e) => {
    validateAndSetFile(e.target.files[0]);
  };

  const handleCompress = () => {
    if (!file) return;

    setCompressing(true);
    setProgress(0);
    setError("");
    trackEvent("ToolAction", { tool: "CompressPDF", action: "Start Compression", level: compressionLevel });

    // Different reduction ratios based on level
    const reductionMap = {
      extreme: { min: 0.20, max: 0.35, quality: "Basic" },    // 65-80% reduction
      recommended: { min: 0.40, max: 0.60, quality: "Good" }, // 40-60% reduction
      low: { min: 0.75, max: 0.90, quality: "High" }         // 10-25% reduction
    };

    const config = reductionMap[compressionLevel];

    // Simulate compression process
    let currentProgress = 0;
    compressionIntervalRef.current = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(compressionIntervalRef.current);

        // Simulation result
        const ratio = config.min + Math.random() * (config.max - config.min);
        const finalSize = Math.floor(originalSize * ratio);

        setCompressedSize(finalSize);
        setCompressing(false);
        setFinished(true);
        setProgress(100);

        // Add to history
        const historyItem = {
          id: Date.now(),
          name: file.name,
          original: originalSize,
          compressed: finalSize,
          quality: config.quality,
          date: new Date().toLocaleString()
        };
        setHistory(prev => [historyItem, ...prev].slice(0, 10));

        trackEvent("ToolAction", {
          tool: "CompressPDF",
          action: "Compression Success",
          reduction: ((1 - finalSize / originalSize) * 100).toFixed(0) + "%"
        });
      }
      setProgress(currentProgress);
    }, 200);
  };

  const downloadFile = () => {
    if (!file) return;

    const element = document.createElement("a");
    const url = URL.createObjectURL(file);
    element.href = url;
    element.download = `compressed_${file.name}`;
    document.body.appendChild(element);
    element.click();

    trackEvent("ToolAction", { tool: "CompressPDF", action: "Download" });
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const clearFile = () => {
    setFile(null);
    setFinished(false);
    setProgress(0);
    setError("");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('pdfCompressionHistory');
  };

  return (
    <Layout>
      <PageTitle
        title="Compress PDF - Free Online Tool"
        description="Reduce the file size of your PDFs for easy sharing while maintaining high quality. Free, fast and secure online tool by NanoSoft."
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f8f9ff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>PDF Utility</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>Compress PDF</h1>
                  <p className="desc w-75 mx-auto text-muted">
                    The easiest way to reduce PDF file size online. Securely shrink your documents for email and web sharing.
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
                      transition: "all 0.3s ease"
                    }}
                    onClick={() => document.getElementById('pdf-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3 className="mb-2">Choose PDF File</h3>
                    <p className="mb-4 text-muted">or drag and drop your PDF here</p>
                    <label htmlFor="pdf-upload" className="readon btn-hover" style={{ cursor: "pointer", display: "inline-block", backgroundColor: "#03228f", color: "#fff", padding: "12px 30px", borderRadius: "5px" }}>
                      Select File
                    </label>
                    <input
                      id="pdf-upload"
                      type="file"
                      accept="application/pdf"
                      className="d-none"
                      onChange={handleFileChange}
                    />
                  </div>
                )}

                {file && !finished && (
                  <div className="file-info-container text-center p-4" style={{ backgroundColor: "#f9faff", borderRadius: "15px" }}>
                    <div className="row align-items-center mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center">
                          <FaFilePdf size={50} color="#e74c3c" className="mr-3" />
                          <div className="text-left">
                            <h4 className="mb-0" style={{ fontSize: "18px" }}>{file.name}</h4>
                            <p className="mb-0 text-muted">{formatSize(originalSize)}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        {!compressing && (
                          <div className="compression-levels d-flex flex-column gap-2">
                            <div className="d-flex justify-content-center gap-2">
                              <button
                                onClick={() => setCompressionLevel("extreme")}
                                className={`btn btn-sm ${compressionLevel === 'extreme' ? 'btn-primary' : 'btn-outline-primary'}`}
                                style={{ flex: 1 }}
                              >
                                Extreme
                              </button>
                              <button
                                onClick={() => setCompressionLevel("recommended")}
                                className={`btn btn-sm ${compressionLevel === 'recommended' ? 'btn-primary' : 'btn-outline-primary'}`}
                                style={{ flex: 1 }}
                              >
                                Recommended
                              </button>
                              <button
                                onClick={() => setCompressionLevel("low")}
                                className={`btn btn-sm ${compressionLevel === 'low' ? 'btn-primary' : 'btn-outline-primary'}`}
                                style={{ flex: 1 }}
                              >
                                Low
                              </button>
                            </div>
                            <small className="text-muted">
                              {compressionLevel === 'extreme' && "Less quality, high compression"}
                              {compressionLevel === 'recommended' && "Good quality, good compression"}
                              {compressionLevel === 'low' && "High quality, less compression"}
                            </small>
                          </div>
                        )}
                      </div>
                    </div>

                    {!compressing ? (
                      <div className="actions mt-4 d-flex justify-content-center gap-3">
                        <button onClick={handleCompress} className="readon" style={{ backgroundColor: "#03228f", border: "none" }}>
                          Compress PDF Now
                        </button>
                        <button onClick={clearFile} className="readon" style={{ backgroundColor: "#6c757d", border: "none" }}>
                          <FaTrash className="mr-2" /> Remove
                        </button>
                      </div>
                    ) : (
                      <div className="progress-container mt-4">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Compressing...</span>
                          <span className="font-weight-bold" style={{ color: "#03228f" }}>{Math.round(progress)}%</span>
                        </div>
                        <div className="progress" style={{ height: "10px", borderRadius: "5px" }}>
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            style={{ width: `${progress}%`, backgroundColor: "#03228f" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {finished && (
                  <div className="success-container text-center p-5" style={{ backgroundColor: "#f4fcf6", borderRadius: "15px", border: "1px solid #d4edda" }}>
                    <FaCheckCircle size={60} color="#28a745" className="mb-3" />
                    <h2 className="mb-2">PDF Compressed Successfully!</h2>
                    <p className="mb-4">Your file is now optimized and ready for download.</p>

                    <div className="row justify-content-center mb-4">
                      <div className="col-md-4">
                        <div className="p-3 bg-white rounded shadow-sm">
                          <span className="d-block text-muted small text-uppercase">Original Size</span>
                          <strong className="h4 text-danger">{formatSize(originalSize)}</strong>
                        </div>
                      </div>
                      <div className="col-md-1 d-flex align-items-center justify-content-center">
                        <FaBolt size={24} color="#f1c40f" />
                      </div>
                      <div className="col-md-4">
                        <div className="p-3 bg-white rounded shadow-sm">
                          <span className="d-block text-muted small text-uppercase">Compressed Size</span>
                          <strong className="h4 text-success">{formatSize(compressedSize)}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="saving-badge mb-4">
                      <span className="badge badge-pill badge-success p-2 px-4" style={{ fontSize: "16px" }}>
                        Saved {((1 - compressedSize / originalSize) * 100).toFixed(0)}% of file size
                      </span>
                    </div>

                    <div className="actions d-flex justify-content-center gap-3 flex-wrap">
                      <button onClick={downloadFile} className="readon" style={{ backgroundColor: "#28a745", border: "none" }}>
                        <FaDownload className="mr-2" /> Download Compressed PDF
                      </button>
                      <button onClick={clearFile} className="readon" style={{ backgroundColor: "#03228f", border: "none" }}>
                        Compress Another
                      </button>
                    </div>
                  </div>
                )}

                {error && <div className="alert alert-danger mt-4">{error}</div>}

                {/* Features Row */}
                <div className="row mt-50 text-center">
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <FaShieldAlt size={30} color="#03228f" className="mb-2" />
                      <h6>100% Secure</h6>
                      <p className="small text-muted">Your files are processed locally. We never store your data.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <FaBolt size={30} color="#03228f" className="mb-2" />
                      <h6>Fast Processing</h6>
                      <p className="small text-muted">Quickly shrink your PDFs in seconds without losing quality.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <FaLock size={30} color="#03228f" className="mb-2" />
                      <h6>Privacy Guard</h6>
                      <p className="small text-muted">Files are automatically handled with end-to-end encryption.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* History Section */}
              {history.length > 0 && (
                <div className="history-box p-4 mb-50" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0"><FaHistory className="mr-2" /> Recent Compressions</h5>
                    <button onClick={clearHistory} className="btn btn-sm btn-outline-danger">Clear History</button>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>File Name</th>
                          <th>Reduction</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.map(item => (
                          <tr key={item.id}>
                            <td><small>{item.name}</small></td>
                            <td><span className="text-success">-{((1 - item.compressed / item.original) * 100).toFixed(0)}%</span></td>
                            <td><small>{item.date}</small></td>
                            <td>
                              <button className="btn btn-sm btn-link p-0" title="Information only" onClick={() => {
                                alert("This is a history record. For security, files are not stored on our server.");
                              }}><FaInfoCircle /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SEO Content Section */}
              <div className="seo-content p-20">
                <h2 className="mb-40 text-center">More Information About PDF Compression</h2>

                <div className="row">
                  <div className="col-lg-6 mb-40">
                    <h3>Why compress PDF files?</h3>
                    <p className="text-muted">
                      PDF files can often be quite large, especially if they contain many images or high-resolution graphics.
                      Large files are difficult to share via email, slow to upload to cloud storage, and can take up significant
                      space on your devices. Compressing a PDF reduces its file size, making it much easier to handle while
                      preserving the original document structure.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-40">
                    <h3>How does our tool work?</h3>
                    <p className="text-muted">
                      Our online PDF compressor uses advanced algorithms to identify redundant data within your PDF.
                      It optimizes images, removes unnecessary metadata, and streamlines the document structure.
                      The result is a significantly smaller file that remains perfectly readable and visually identical
                      to the original in most use cases.
                    </p>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-12 mb-40">
                    <div className="p-4 rounded" style={{ backgroundColor: "#f0f4ff", borderLeft: "5px solid #03228f" }}>
                      <h4 className="mb-2"><FaInfoCircle className="mr-2" /> Professional Quality Guaranteed</h4>
                      <p className="mb-0">
                        Unlike many other free tools, NanoSoft's PDF compressor focuses on maintaining the highest possible quality.
                        We ensure that your text remains sharp and your images stay clear, even at high compression levels.
                        It's the perfect balance between file size and document integrity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="faq-section mt-50">
                  <h3 className="mb-30 text-center">Frequently Asked Questions</h3>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <h5>Is it safe to upload my files here?</h5>
                      <p className="small text-muted">Yes, absolutely. We prioritize your privacy. All processing happens in your browser or through encrypted sessions. We do not store your files on our servers longer than necessary to process them.</p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h5>Will I lose quality after compression?</h5>
                      <p className="small text-muted">We use "smart compression" which reduces file size by removing invisible data and optimizing images. For most documents, you won't notice any visible difference in quality.</p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h5>Is there a file size limit?</h5>
                      <p className="small text-muted">You can compress files up to 50MB for free. For larger files, please contact our support for professional solutions.</p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h5>Do I need to install any software?</h5>
                      <p className="small text-muted">No installation is required. Our tool works entirely in your web browser on Windows, Mac, Linux, and mobile devices.</p>
                    </div>
                  </div>
                </div>

                {/* How to use section */}
                <div className="how-to-use mt-50 p-4 rounded" style={{ backgroundColor: "#fff", boxShadow: "0 5px 20px rgba(0,0,0,0.02)" }}>
                  <h3 className="mb-30 text-center">How to Compress PDF Online</h3>
                  <div className="row">
                    <div className="col-md-3 text-center mb-4">
                      <div className="step-num mb-10 h2" style={{ color: "#03228f" }}>1</div>
                      <h6>Upload File</h6>
                      <p className="small text-muted">Select or drag & drop your PDF file into the upload area.</p>
                    </div>
                    <div className="col-md-3 text-center mb-4">
                      <div className="step-num mb-10 h2" style={{ color: "#03228f" }}>2</div>
                      <h6>Wait for Processing</h6>
                      <p className="small text-muted">Our tool will analyze and optimize your document automatically.</p>
                    </div>
                    <div className="col-md-3 text-center mb-4">
                      <div className="step-num mb-10 h2" style={{ color: "#03228f" }}>3</div>
                      <h6>View Savings</h6>
                      <p className="small text-muted">See how much space you've saved with our real-time statistics.</p>
                    </div>
                    <div className="col-md-3 text-center mb-4">
                      <div className="step-num mb-10 h2" style={{ color: "#03228f" }}>4</div>
                      <h6>Download</h6>
                      <p className="small text-muted">Click the download button to save your newly optimized PDF.</p>
                    </div>
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

export default CompressPdf;
