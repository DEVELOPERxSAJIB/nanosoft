import React, { useState, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaCloudUploadAlt, FaImage, FaCheckCircle, FaTrash, FaDownload, FaMagic } from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

// Access API Key from environment variables (Vite)
const API_KEY = import.meta.env.VITE_REMOVE_BG_API_KEY;

const BackgroundRemover = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [processedUrl, setProcessedUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file (JPG, PNG, JPEG).");
        return;
      }
      if (file.size > 10 * 1024 * 1024) { // remove.bg supports up to 12MB, set cautious 10MB limit
        setError("File size exceeds 10MB limit.");
        return;
      }

      setError(null);
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setProcessedUrl(null); // Reset previous result

      trackEvent("ToolAction", {
        tool: "BackgroundRemover",
        action: "ImageSelected",
        fileName: file.name
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file (JPG, PNG, JPEG).");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setError("File size exceeds 10MB limit.");
        return;
      }

      setError(null);
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setProcessedUrl(null);

      trackEvent("ToolAction", {
        tool: "BackgroundRemover",
        action: "ImageDropped",
        fileName: file.name
      });
    }
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) return;

    if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE" || API_KEY === "INSERT_YOUR_REMOVE_BG_API_KEY_HERE") {
      setError("API Key not configured. Please add VITE_REMOVE_BG_API_KEY to your .env file.");
      return;
    }

    setIsProcessing(true);
    setError(null);
    trackEvent("ToolAction", {
      tool: "BackgroundRemover",
      action: "ProcessStarted"
    });

    try {
      const formData = new FormData();
      formData.append("image_file", selectedFile);
      formData.append("size", "auto");

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": API_KEY,
        },
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 402) {
          throw new Error("API Credit limit exceeded or payment required.");
        } else if (response.status === 403) {
          throw new Error("Invalid API Key.");
        } else {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData?.errors?.[0]?.title || `API Error: ${response.status} ${response.statusText}`);
        }
      }

      const imageBlob = await response.blob();
      const url = URL.createObjectURL(imageBlob);
      setProcessedUrl(url);

      trackEvent("ToolAction", {
        tool: "BackgroundRemover",
        action: "ProcessCompleted"
      });
    } catch (err) {
      console.error("Background removal failed:", err);
      setError(`${err.message}`);
      trackEvent("ToolAction", {
        tool: "BackgroundRemover",
        action: "ProcessFailed",
        error: err.message
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedUrl) return;

    const link = document.createElement("a");
    link.href = processedUrl;
    link.download = `nanosoft-bg-removed-${selectedFile.name.split('.')[0]}.png`; // Result is always PNG
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    trackEvent("ToolAction", {
      tool: "BackgroundRemover",
      action: "DownloadClicked"
    });
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setProcessedUrl(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Layout>
      <PageTitle
        title="Free AI Background Remover - Remove Backgrounds Instantly"
        description="Remove image backgrounds automatically in 5 seconds with one click. Our free pattern-recognizing AI detects major subjects and removes bg transparently."
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f6f7f9" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Tool Area */}
              <div className="tool-box text-center p-5 mb-60" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>

                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>AI Powered (Remove.bg)</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px" }}>
                    Remove Image Background
                  </h1>
                  <p className="desc w-75 mx-auto">
                    Upload your image and let our AI handle the rest. High Precision Professional Quality.
                  </p>
                </div>

                {!selectedFile ? (
                  <div
                    className="upload-area p-5 mb-4"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    style={{ border: "3px dashed #e5e8f0", borderRadius: "20px", cursor: "pointer", transition: "all 0.3s ease", backgroundColor: "#f8f9fc" }}
                  >
                    <div className="icon-part mb-3">
                      <FaCloudUploadAlt size={70} color="#03228f" />
                    </div>
                    <h3 className="mb-2" style={{ fontSize: "24px" }}>Drag & Drop image here</h3>
                    <p className="mb-4 text-muted">or click to browse contents</p>
                    <button
                      className="readon learn-more"
                      onClick={() => fileInputRef.current.click()}
                      style={{ padding: "12px 35px", fontSize: "16px" }}
                    >
                      Upload Image
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="d-none"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleFileChange}
                    />
                    <p className="mt-3 text-small text-muted">Supports JPG, PNG, JPEG | Max 10MB</p>
                  </div>
                ) : (
                  <div className="processing-area">
                    {error && <div className="alert alert-danger mb-4">{error}</div>}

                    <div className="row align-items-center justify-content-center">
                      {/* Original Image */}
                      <div className="col-md-5 mb-4 mb-md-0">
                        <div className="img-box overflow-hidden position-relative" style={{ borderRadius: "10px", border: "1px solid #ddd" }}>
                          <span className="position-absolute bg-dark text-white px-2 py-1" style={{ top: "10px", left: "10px", borderRadius: "4px", fontSize: "12px", zIndex: "2" }}>Original</span>
                          <img src={previewUrl} alt="Original" className="img-fluid" style={{ maxHeight: "300px", objectFit: "contain" }} />
                        </div>
                      </div>

                      {/* Arrow / Loader */}
                      <div className="col-md-2 text-center mb-4 mb-md-0">
                        {isProcessing ? (
                          <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                            <span className="visually-hidden">Processing...</span>
                          </div>
                        ) : (
                          <FaMagic size={30} color="#03228f" />
                        )}
                      </div>

                      {/* Processed/Result Image */}
                      <div className="col-md-5">
                        <div className="img-box overflow-hidden position-relative" style={{ borderRadius: "10px", border: "1px solid #ddd", background: processedUrl ? "url('https://t3.ftcdn.net/jpg/03/52/04/98/360_F_352049884_P67u8o1m2g0m2g0m.jpg')" : "#f0f0f0" }}> {/* Checkerboard bg pattern url placeholder */}
                          <span className="position-absolute bg-success text-white px-2 py-1" style={{ top: "10px", left: "10px", borderRadius: "4px", fontSize: "12px", zIndex: "2" }}>{processedUrl ? "Removed BG" : "Result"}</span>
                          {processedUrl ? (
                            <img src={processedUrl} alt="Processed" className="img-fluid" style={{ maxHeight: "300px", objectFit: "contain" }} />
                          ) : (
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "250px", color: "#aaa" }}>
                              Waiting to process...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="actions mt-40">
                      {!processedUrl ? (
                        <div className="d-flex justify-content-center gap-3">
                          <button
                            className="readon learn-more"
                            onClick={handleRemoveBackground}
                            disabled={isProcessing}
                          >
                            {isProcessing ? "Processing..." : "Remove Background (API)"}
                          </button>
                          <button
                            className="readon learn-more"
                            style={{ background: "#dc3545", color: "#fff" }}
                            onClick={handleReset}
                          >
                            <FaTrash className="mr-2" /> Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="d-flex justify-content-center gap-3">
                          <button
                            className="readon learn-more"
                            onClick={handleDownload}
                          >
                            <FaDownload className="mr-2" /> Download Image
                          </button>
                          <button
                            className="readon learn-more ml-3"
                            style={{ background: "#03228f", color: "#fff" }}
                            onClick={handleReset}
                          >
                            Upload New
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* SEO Content Area */}
              <div className="seo-content text-left pl-20 pr-20">
                <div className="row">
                  <div className="col-lg-12 mb-50">
                    <h2 className="title mb-20" style={{ fontSize: "28px" }}>How to Remove Background from Image Online?</h2>
                    <ol className="process-list" style={{ paddingLeft: "20px", fontSize: "16px", lineHeight: "1.8" }}>
                      <li className="mb-2"><strong>Upload your image:</strong> Click the "Upload Image" button or drag and drop your JPG/PNG file into the box.</li>
                      <li className="mb-2"><strong>Get automated removal:</strong> Click the "Remove Background" button. Our AI will analyze the subject and cut out the background instantly.</li>
                      <li className="mb-2"><strong>Download result:</strong> Once processed, preview the transparent image and click "Download" to save it to your device.</li>
                    </ol>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <div className="service-item p-4" style={{ background: "#fff", borderRadius: "10px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)" }}>
                      <div className="icon mb-3">
                        <FaCheckCircle size={30} color="#28a745" />
                      </div>
                      <h3 className="mb-2 fw-bold" style={{ fontSize: "20px" }}>100% Free & Unlimited</h3>
                      <p>No credit cards, no subscriptions. Use our background remover tool as many times as you like for free. High-quality results every time.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <div className="service-item p-4" style={{ background: "#fff", borderRadius: "10px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)" }}>
                      <div className="icon mb-3">
                        <FaCheckCircle size={30} color="#28a745" />
                      </div>
                      <h3 className="mb-2 fw-bold" style={{ fontSize: "20px" }}>Secure & Private</h3>
                      <p>Your privacy matters. All images uploaded to our server are processed automatically and deleted after a short period. We do not store your personal photos.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <div className="service-item p-4" style={{ background: "#fff", borderRadius: "10px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)" }}>
                      <div className="icon mb-3">
                        <FaCheckCircle size={30} color="#28a745" />
                      </div>
                      <h3 className="mb-2 fw-bold" style={{ fontSize: "20px" }}>High Precision AI</h3>
                      <p>Our tool handles complex edges like hair and fur with ease. Perfect for e-commerce products, profile pictures, and design assets.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <div className="service-item p-4" style={{ background: "#fff", borderRadius: "10px", boxShadow: "0 2px 15px rgba(0,0,0,0.05)" }}>
                      <div className="icon mb-3">
                        <FaCheckCircle size={30} color="#28a745" />
                      </div>
                      <h3 className="mb-2 fw-bold" style={{ fontSize: "20px" }}>Time Saving</h3>
                      <p>Forget manual lasso tools in Photoshop. Get professionally cut-out images in seconds, speeding up your workflow significantly.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-section mt-50">
                  <h2 className="title mb-30 text-center" style={{ fontSize: "28px" }}>Frequently Asked Questions</h2>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="accordion" id="faqAccordion">

                        <div className="accordion-item mb-3" style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
                          <h3 className="accordion-header">
                            <button className="accordion-button collapsed p-3 w-100 text-left bg-white border-0 fw-bold" type="button" style={{ fontSize: "18px", boxShadow: "none" }}>
                              What image formats are supported?
                            </button>
                          </h3>
                          <div className="accordion-body p-3 text-muted border-top">
                            We support the most common image formats including JPG, JPEG, and PNG.
                          </div>
                        </div>

                        <div className="accordion-item mb-3" style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
                          <h3 className="accordion-header">
                            <button className="accordion-button collapsed p-3 w-100 text-left bg-white border-0 fw-bold" type="button" style={{ fontSize: "18px", boxShadow: "none" }}>
                              Will the image quality decrease?
                            </button>
                          </h3>
                          <div className="accordion-body p-3 text-muted border-top">
                            Our AI attempts to preserve the original resolution and quality of the subject while removing the background.
                          </div>
                        </div>

                        <div className="accordion-item" style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
                          <h3 className="accordion-header">
                            <button className="accordion-button collapsed p-3 w-100 text-left bg-white border-0 fw-bold" type="button" style={{ fontSize: "18px", boxShadow: "none" }}>
                              Is it free for commercial use?
                            </button>
                          </h3>
                          <div className="accordion-body p-3 text-muted border-top">
                            Yes, our online tool is completely free for both personal and commercial use.
                          </div>
                        </div>

                      </div>
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

export default BackgroundRemover;
