import { useState, useEffect, useCallback } from "react";
import PageTitle from "../../components/PageTitle";
import {
  FaCloudUploadAlt,
  FaCheckCircle,
  FaDownload,
  FaTrash,
  FaHistory,
  FaInfoCircle,
  FaShieldAlt,
  FaBolt,
  FaLock,
  FaCompressArrowsAlt,
  FaSlidersH,
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import imageCompression from "browser-image-compression";
import AdsLayout from "../../components/Layout/AdsLayout";

const ImageCompressor = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [compressing, setCompressing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressedFile, setCompressedFile] = useState(null);
  const [error, setError] = useState("");
  const [quality, setQuality] = useState(0.8);
  const [history, setHistory] = useState([]);

  // SEO and Meta Tags
  useEffect(() => {
    document.title =
      "Image Compressor Online - Reduce Image Size Free | NanoSoft";

    const metaTags = [
      {
        name: "description",
        content:
          "Compress JPG, JPEG, and PNG images online without losing quality. Free, fast and secure image size reducer tool by NanoSoft.",
      },
      {
        name: "keywords",
        content:
          "image compressor, compress image, reduce image size, jpg compressor, png compressor, online image optimization, nanosoft",
      },
      {
        property: "og:title",
        content: "Image Compressor Online - Reduce Image Size Free",
      },
      {
        property: "og:description",
        content:
          "Compress JPG, JPEG, and PNG images online without losing quality. Free, fast and secure image size reducer.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://nanosoft.com/tools/image-compressor",
      },
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
      name: "Image Compressor Tool",
      description:
        "Reduce the file size of your images for easy sharing while maintaining high quality.",
      url: "https://nanosoft.com/tools/image-compressor",
      applicationCategory: "GraphicsApplication",
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
    const savedHistory = localStorage.getItem("imageCompressionHistory");
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem("imageCompressionHistory", JSON.stringify(history));
  }, [history]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = (selectedFile) => {
    if (
      selectedFile &&
      (selectedFile.type === "image/jpeg" ||
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/webp")
    ) {
      setFile(selectedFile);
      setOriginalSize(selectedFile.size);
      setPreview(URL.createObjectURL(selectedFile));
      setFinished(false);
      setProgress(0);
      setError("");
      setCompressedFile(null);
    } else {
      setError("Please upload a valid image file (JPG, PNG, or WEBP).");
    }
  };

  const handleFileChange = (e) => {
    validateAndSetFile(e.target.files[0]);
  };

  const handleCompress = async () => {
    if (!file) return;

    setCompressing(true);
    setProgress(0);
    setError("");
    trackEvent("ToolAction", {
      tool: "ImageCompressor",
      action: "Start Compression",
    });

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: quality,
      onProgress: (p) => setProgress(p),
    };

    try {
      const result = await imageCompression(file, options);
      setCompressedFile(result);
      setCompressedSize(result.size);
      setCompressing(false);
      setFinished(true);
      setProgress(100);

      // Add to history
      const historyItem = {
        id: Date.now(),
        name: file.name,
        original: file.size,
        compressed: result.size,
        date: new Date().toLocaleString(),
      };
      setHistory((prev) => [historyItem, ...prev].slice(0, 10));

      trackEvent("ToolAction", {
        tool: "ImageCompressor",
        action: "Compression Success",
        reduction: ((1 - result.size / file.size) * 100).toFixed(0) + "%",
      });
    } catch (err) {
      console.error(err);
      setError("Compression failed. Please try again.");
      setCompressing(false);
    }
  };

  const downloadFile = () => {
    if (!compressedFile) return;
    const url = URL.createObjectURL(compressedFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = `compressed_${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "ImageCompressor", action: "Download" });
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const clearFile = () => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setFinished(false);
    setProgress(0);
    setError("");
    setCompressedFile(null);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("imageCompressionHistory");
  };

  return (
    <AdsLayout>
      <PageTitle
        title="Free Image Compressor Online | Fast & High-Quality Compression — NanoSoft"
        description="Optimize images instantly with NanoSoft’s free image compressor. Reduce file size while preserving clarity for JPG, PNG, and WEBP images."
      />

      <div className="col-lg-12">
        <div
          className="tool-box p-5 mb-50"
          style={{
            background: "#fff",
            borderRadius: "20px",
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
              Image Utility
            </span>
            <h1
              className="title pb-20"
              style={{ fontSize: "36px", color: "#03228f" }}
            >
              Image Compressor
            </h1>
            <p className="desc w-75 mx-auto text-muted">
              Optimize your images for faster web performance. Shrink file size
              without losing visual clarity.
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
                transition: "all 0.3s ease",
              }}
              onClick={() => document.getElementById("image-upload").click()}
            >
              <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
              <h3 className="mb-2">Choose Image</h3>
              <p className="mb-4 text-muted">
                or drag and drop JPG, PNG, or WEBP here
              </p>
              <label
                htmlFor="image-upload"
                className="readon btn-hover"
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                  backgroundColor: "#03228f",
                  color: "#fff",
                  padding: "12px 30px",
                  borderRadius: "5px",
                }}
              >
                Select File
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="d-none"
                onChange={handleFileChange}
              />
            </div>
          )}

          {file && !finished && (
            <div
              className="file-info-container text-center p-4"
              style={{ backgroundColor: "#f9faff", borderRadius: "15px" }}
            >
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img
                    src={preview}
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      borderRadius: "10px",
                      maxHeight: "200px",
                    }}
                  />
                </div>
                <div className="col-md-8 text-left md-text-center">
                  <h4 className="mb-2" style={{ fontSize: "18px" }}>
                    {file.name}
                  </h4>
                  <p className="mb-3 text-muted">{formatSize(originalSize)}</p>

                  {!compressing && (
                    <div className="compression-settings mb-4 p-3 bg-white rounded shadow-sm">
                      <label className="d-flex align-items-center gap-2 mb-2 font-weight-bold">
                        <FaSlidersH color="#03228f" /> Compression Level:{" "}
                        {Math.round(quality * 100)}%
                      </label>
                      <input
                        type="range"
                        className="custom-range"
                        min="0.1"
                        max="1.0"
                        step="0.05"
                        value={quality}
                        onChange={(e) => setQuality(parseFloat(e.target.value))}
                        style={{ accentColor: "#03228f" }}
                      />
                      <div className="d-flex justify-content-between small text-muted mt-1">
                        <span>Higher Compression</span>
                        <span>Better Quality</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {!compressing ? (
                <div className="actions mt-4 d-flex justify-content-center gap-3">
                  <button
                    onClick={handleCompress}
                    className="readon"
                    style={{ backgroundColor: "#03228f", border: "none" }}
                  >
                    <FaCompressArrowsAlt className="mr-2" /> Compress Image
                  </button>
                  <button
                    onClick={clearFile}
                    className="readon"
                    style={{ backgroundColor: "#6c757d", border: "none" }}
                  >
                    <FaTrash className="mr-2" /> Remove
                  </button>
                </div>
              ) : (
                <div className="progress-container mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">
                      Analyzing and optimizing...
                    </span>
                    <span
                      className="font-weight-bold"
                      style={{ color: "#03228f" }}
                    >
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div
                    className="progress"
                    style={{ height: "10px", borderRadius: "5px" }}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: "#03228f",
                      }}
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
              <h2 className="mb-2">Image Optimized!</h2>
              <p className="mb-4">Your file is now smaller and ready to use.</p>

              <div className="row justify-content-center mb-4">
                <div className="col-md-4">
                  <div className="p-3 bg-white rounded shadow-sm">
                    <span className="d-block text-muted small text-uppercase">
                      Original
                    </span>
                    <strong className="h4 text-danger">
                      {formatSize(originalSize)}
                    </strong>
                  </div>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-center">
                  <FaBolt size={24} color="#f1c40f" />
                </div>
                <div className="col-md-4">
                  <div className="p-3 bg-white rounded shadow-sm">
                    <span className="d-block text-muted small text-uppercase">
                      Compressed
                    </span>
                    <strong className="h4 text-success">
                      {formatSize(compressedSize)}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="saving-badge mb-4">
                <span
                  className="badge badge-pill badge-success p-2 px-4"
                  style={{ fontSize: "16px" }}
                >
                  Saved {((1 - compressedSize / originalSize) * 100).toFixed(0)}
                  % of file size
                </span>
              </div>

              <div className="actions d-flex justify-content-center gap-3 flex-wrap">
                <button
                  onClick={downloadFile}
                  className="readon"
                  style={{ backgroundColor: "#28a745", border: "none" }}
                >
                  <FaDownload className="mr-2" /> Download Optimized Image
                </button>
                <button
                  onClick={clearFile}
                  className="readon"
                  style={{ backgroundColor: "#03228f", border: "none" }}
                >
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
                <h6>Browser Based</h6>
                <p className="small text-muted">
                  Processing happens in your browser. No files uploaded to
                  server.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <FaBolt size={30} color="#03228f" className="mb-2" />
                <h6>Smart Optimization</h6>
                <p className="small text-muted">
                  Advanced algorithms to maintain visibility while shrinking
                  size.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-item">
                <FaLock size={30} color="#03228f" className="mb-2" />
                <h6>Your Privacy</h6>
                <p className="small text-muted">
                  We never see or store your private images.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        {history.length > 0 && (
          <div
            className="history-box p-4 mb-50"
            style={{
              background: "#fff",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">
                <FaHistory className="mr-2" /> Recent Optimizations
              </h5>
              <button
                onClick={clearHistory}
                className="btn btn-sm btn-outline-danger"
              >
                Clear History
              </button>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image Name</th>
                    <th>Reduction</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <small>{item.name}</small>
                      </td>
                      <td>
                        <span className="text-success">
                          -
                          {(
                            (1 - item.compressed / item.original) *
                            100
                          ).toFixed(0)}
                          %
                        </span>
                      </td>
                      <td>
                        <small>{item.date}</small>
                      </td>
                      <td>
                        <FaCheckCircle color="#28a745" />
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
          <h2 className="mb-40 text-center">Master Image Optimization</h2>

          <div className="row">
            <div className="col-lg-6 mb-40">
              <h3>Why compress images?</h3>
              <p className="text-muted">
                Large images are the #1 cause of slow websites. On average,
                images make up over 60% of a website's page weight. By
                compressing your images (JPG, PNG, WEBP), you can drastically
                improve loading speeds, improve user experience, and boost your
                SEO rankings.
              </p>
            </div>
            <div className="col-lg-6 mb-40">
              <h3>How much can I save?</h3>
              <p className="text-muted">
                Depending on the original file and the quality settings you
                choose, our tool can reduce image file size by up to 80% or
                more. For example, a 5MB high-resolution photo can often be
                reduced to 800KB without any noticeable loss in visual quality
                for web use.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 mb-40">
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: "#f0f4ff",
                  borderLeft: "5px solid #03228f",
                }}
              >
                <h4 className="mb-2">
                  <FaInfoCircle className="mr-2" /> Professional Tip
                </h4>
                <p className="mb-0">
                  Use **WEBP** format for the best balance between size and
                  quality. It's the modern standard supported by all major
                  browsers. If you have PNGs with transparency, try to keep the
                  quality higher to prevent artifacts around the edges.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-section mt-50">
            <h3 className="mb-30 text-center">Frequently Asked Questions</h3>
            <div className="row">
              <div className="col-md-6 mb-30">
                <h5>Does this tool support bulk compression?</h5>
                <p className="small text-muted">
                  Currently, we support one-at-a-time processing to ensure the
                  highest quality and better browser performance, but we are
                  working on a bulk feature!
                </p>
              </div>
              <div className="col-md-6 mb-30">
                <h5>Is my privacy protected?</h5>
                <p className="small text-muted">
                  Absolutely. Your images never leave your computer. The
                  compression engine runs entirely in your browser using modern
                  WebAssembly and JavaScript technologies.
                </p>
              </div>
              <div className="col-md-6 mb-30">
                <h5>Will I lose too much quality?</h5>
                <p className="small text-muted">
                  We use "lossy" compression which is very smart. It removes
                  details the human eye can't see, keeping your images looking
                  sharp while making them much lighter.
                </p>
              </div>
              <div className="col-md-6 mb-30">
                <h5>What's the best quality setting?</h5>
                <p className="small text-muted">
                  For most web uses, 80% (0.8) is the sweet spot. For hero
                  images or photography portfolios, try 90%. For small
                  thumbnails, 60% might be enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdsLayout>
  );
};

export default ImageCompressor;
