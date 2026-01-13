import React, { useState, useEffect, useCallback, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaImage,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaDownload,
  FaTrash,
  FaHistory,
  FaInfoCircle,
  FaShieldAlt,
  FaBolt,
  FaLock,
  FaExpandArrowsAlt,
  FaCompress,
  FaLayerGroup,
  FaArrowRight,
  FaUndo,
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import AdsLayout from "../../components/Layout/AdsLayout";

const ImageResizer = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [resizing, setResizing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    originalWidth: 0,
    originalHeight: 0,
  });
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [resizedUrl, setResizedUrl] = useState(null);
  const [scale, setScale] = useState(100);

  // SEO and Meta Tags
  useEffect(() => {
    document.title =
      "Image Resizer Online - Resize JPG, PNG to Pixels | NanoSoft";

    const metaTags = [
      {
        name: "description",
        content:
          "Resize your images to exact pixel or percentage dimensions online. Maintain aspect ratio or stretch. Free and secure image resizer by NanoSoft.",
      },
      {
        name: "keywords",
        content:
          "image resizer, resize image, change image dimensions, online resizer, pixel resizer, nanosoft",
      },
      {
        property: "og:title",
        content: "Image Resizer Online - Resize JPG, PNG to Pixels",
      },
      {
        property: "og:description",
        content:
          "Resize your images to exact pixel dimensions instantly. Fast, free, and secure.",
      },
      {
        property: "og:url",
        content: "https://nanosoft.com/tools/image-resizer",
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

    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (resizedUrl) URL.revokeObjectURL(resizedUrl);
    };
  }, []);

  const validateAndSetFile = (selectedFile) => {
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(selectedFile);
      const img = new Image();
      img.onload = () => {
        setFile(selectedFile);
        if (preview) URL.revokeObjectURL(preview);
        setPreview(url);
        setDimensions({
          width: img.width,
          height: img.height,
          originalWidth: img.width,
          originalHeight: img.height,
        });
        setScale(100);
        setFinished(false);
        setProgress(0);
        setError("");
        setResizedUrl(null);
      };
      img.src = url;
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      const droppedFile = e.dataTransfer.files[0];
      validateAndSetFile(droppedFile);
    },
    [preview]
  );

  const handleScaleChange = (e) => {
    const s = parseInt(e.target.value);
    setScale(s);
    const newWidth = Math.round((dimensions.originalWidth * s) / 100);
    const newHeight = Math.round((dimensions.originalHeight * s) / 100);
    setDimensions((prev) => ({ ...prev, width: newWidth, height: newHeight }));
  };

  const handleWidthChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    if (maintainAspectRatio && dimensions.originalWidth > 0) {
      const ratio = dimensions.originalHeight / dimensions.originalWidth;
      setDimensions((prev) => ({
        ...prev,
        width: val,
        height: Math.round(val * ratio),
      }));
    } else {
      setDimensions((prev) => ({ ...prev, width: val }));
    }
    setScale(Math.round((val / dimensions.originalWidth) * 100));
  };

  const handleHeightChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    if (maintainAspectRatio && dimensions.originalHeight > 0) {
      const ratio = dimensions.originalWidth / dimensions.originalHeight;
      setDimensions((prev) => ({
        ...prev,
        height: val,
        width: Math.round(val * ratio),
      }));
    } else {
      setDimensions((prev) => ({ ...prev, height: val }));
    }
    setScale(Math.round((val / dimensions.originalHeight) * 100));
  };

  const handleResize = () => {
    if (!file || dimensions.width <= 0 || dimensions.height <= 0) return;

    setResizing(true);
    setProgress(30);
    trackEvent("ToolAction", {
      tool: "ImageResizer",
      action: "Start Resizing",
    });

    setTimeout(() => {
      const canvas = document.createElement("canvas");
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
        setProgress(80);

        canvas.toBlob(
          (blob) => {
            const url = URL.createObjectURL(blob);
            if (resizedUrl) URL.revokeObjectURL(resizedUrl);
            setResizedUrl(url);
            setProgress(100);
            setTimeout(() => {
              setResizing(false);
              setFinished(true);
              trackEvent("ToolAction", {
                tool: "ImageResizer",
                action: "Resizing Success",
              });
            }, 500);
          },
          file.type,
          0.95
        );
      };
      img.src = preview;
    }, 100);
  };

  const downloadFile = () => {
    if (!resizedUrl) return;
    const link = document.createElement("a");
    link.href = resizedUrl;
    link.download = `resized_${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "ImageResizer", action: "Download" });
  };

  const clearFile = () => {
    if (preview) URL.revokeObjectURL(preview);
    if (resizedUrl) URL.revokeObjectURL(resizedUrl);
    setFile(null);
    setPreview(null);
    setFinished(false);
    setProgress(0);
    setError("");
    setResizedUrl(null);
  };

  return (
    <AdsLayout>
      <PageTitle
        title="Image Resizer - Professional Precision"
        description="Change image dimensions precisely for social media, print, or web. Real-time scaling."
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
              Visual Utility
            </span>
            <h1
              className="title pb-20"
              style={{ fontSize: "36px", color: "#03228f" }}
            >
              Image Resizer
            </h1>
            <p className="desc w-75 mx-auto text-muted">
              {" "}
              Dial in the perfect dimensions for your graphics instantly.{" "}
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
              onClick={() => document.getElementById("resize-upload").click()}
            >
              <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
              <h3>Add Image to Resize</h3>
              <p className="text-muted">
                High-res JPG, PNG, and WebP supported
              </p>
              <input
                id="resize-upload"
                type="file"
                accept="image/*"
                className="d-none"
                onChange={(e) => validateAndSetFile(e.target.files[0])}
              />
            </div>
          )}

          {file && !finished && (
            <div className="resize-interface p-4 bg-light rounded shadow-sm">
              <div className="row align-items-center">
                <div className="col-md-5 text-center px-4">
                  <div
                    className="preview-wrap mb-3 p-1 bg-white rounded shadow-sm"
                    style={{ border: "4px solid #fff" }}
                  >
                    <img
                      src={preview}
                      alt="Resize target"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "250px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-center gap-2 small font-weight-bold text-muted uppercase">
                    <span>
                      {dimensions.originalWidth}x{dimensions.originalHeight}
                    </span>
                    <FaArrowRight className="mt-1" />
                    <span className="text-primary">
                      {dimensions.width}x{dimensions.height}
                    </span>
                  </div>
                </div>

                <div className="col-md-7 px-lg-5 py-4 py-md-0">
                  <div className="settings-panel">
                    <div className="d-flex justify-content-between mb-2">
                      <label className="small text-muted font-weight-bold uppercase">
                        Resize Step (Scale)
                      </label>
                      <span className="badge badge-primary">{scale}%</span>
                    </div>
                    <input
                      type="range"
                      className="custom-range mb-4"
                      min="1"
                      max="200"
                      value={scale}
                      onChange={handleScaleChange}
                      style={{ accentColor: "#03228f" }}
                    />

                    <div className="row g-2 mb-4">
                      <div className="col-6">
                        <label className="small text-muted font-weight-bold">
                          WIDTH (PX)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={dimensions.width}
                          onChange={handleWidthChange}
                        />
                      </div>
                      <div className="col-6">
                        <label className="small text-muted font-weight-bold">
                          HEIGHT (PX)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={dimensions.height}
                          onChange={handleHeightChange}
                        />
                      </div>
                    </div>

                    <div className="custom-control custom-switch mb-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="aspectRatio"
                        checked={maintainAspectRatio}
                        onChange={(e) =>
                          setMaintainAspectRatio(e.target.checked)
                        }
                      />
                      <label
                        className="custom-control-label small font-weight-bold"
                        htmlFor="aspectRatio"
                        style={{ cursor: "pointer" }}
                      >
                        Lock Aspect Ratio
                      </label>
                    </div>

                    {!resizing ? (
                      <div className="actions d-flex gap-2">
                        <button
                          onClick={handleResize}
                          className="readon w-100 flex-grow-1"
                          style={{ backgroundColor: "#03228f", border: "none" }}
                        >
                          <FaExpandArrowsAlt className="mr-2" /> Resize Image
                        </button>
                        <button
                          onClick={clearFile}
                          className="btn btn-outline-danger"
                          title="Clear"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ) : (
                      <div className="status py-2">
                        <div
                          className="progress"
                          style={{ height: "8px", borderRadius: "4px" }}
                        >
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <p className="small text-muted mt-2 text-center">
                          Processing pixels... {progress}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
              <h2>Perfect Fit!</h2>
              <p className="mb-4 text-muted">
                Your image has been resized to{" "}
                <strong>
                  {dimensions.width} x {dimensions.height}
                </strong>
                .
              </p>
              <div className="actions d-flex justify-content-center gap-3">
                <button
                  onClick={downloadFile}
                  className="readon bg-success px-5"
                  style={{ border: "none" }}
                >
                  <FaDownload className="mr-2" /> Download Image
                </button>
                <button
                  onClick={clearFile}
                  className="readon px-5"
                  style={{ backgroundColor: "#03228f", border: "none" }}
                >
                  <FaUndo className="mr-2" /> Resize New Image
                </button>
              </div>
            </div>
          )}

          {error && <div className="alert alert-danger mt-4">{error}</div>}

          {/* Privacy Row */}
          <div className="row mt-50 text-center">
            {[
              {
                icon: FaShieldAlt,
                title: "Client Side",
                text: "Pixels never leave your browser.",
              },
              {
                icon: FaLock,
                title: "Zero Data Store",
                text: "No files are cached or logged.",
              },
              {
                icon: FaBolt,
                title: "High Perf",
                text: "Canvas-accelerated scaling engine.",
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

        {/* SEO Content */}
        <div className="seo-content mt-80 p-20">
          <h2 className="text-center mb-50">Precision Digital Sizing</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5>Why High Resolution Matters?</h5>
              <p className="small text-muted">
                When you resize an image, the browser recalculates every pixel.
                Our tool uses smart resampling to ensure your graphics remain
                crisp even when scaling up or down for retina displays.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h5>The Math of Aspect Ratio</h5>
              <p className="text-muted small">
                A locked aspect ratio ensures that if width goes up 50%, the
                height follows exactly. This prevents 'warping' or vertical
                distortion that can make professional photos look amateurish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdsLayout>
  );
};

export default ImageResizer;
