import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaImage, FaCloudUploadAlt, FaCheckCircle, FaDownload,
  FaTrash, FaHistory, FaInfoCircle, FaShieldAlt, FaBolt, FaLock,
  FaExchangeAlt, FaSyncAlt
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const ImageConverter = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [converting, setConverting] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [targetFormat, setTargetFormat] = useState("image/png");
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [history, setHistory] = useState([]);

  const formats = [
    { label: "PNG", value: "image/png" },
    { label: "JPG", value: "image/jpeg" },
    { label: "WEBP", value: "image/webp" },
  ];

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Image Converter Online - Convert JPG, PNG, WEBP | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Convert images to PNG, JPG, or WEBP formats instantly. High-quality conversion, free and secure online tool by NanoSoft.' },
      { name: 'keywords', content: 'image converter, convert image, png to jpg, jpg to png, webp converter, online image conversion, nanosoft' },
      { property: 'og:title', content: 'Image Converter Online - Convert JPG, PNG, WEBP' },
      { property: 'og:description', content: 'Convert images to PNG, JPG, or WEBP formats instantly. Free and secure online tool.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/image-converter' }
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

    // History load
    const savedHistory = localStorage.getItem('imageConverterHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem('imageConverterHistory', JSON.stringify(history));
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
      setConvertedUrl(null);
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleFileChange = (e) => {
    validateAndSetFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setProgress(20);
    setError("");
    trackEvent("ToolAction", { tool: "ImageConverter", action: "Start Conversion", target: targetFormat });

    try {
      const img = new Image();
      img.src = preview;

      img.onload = () => {
        setProgress(50);
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        // Handle transparency for JPEG
        if (targetFormat === "image/jpeg") {
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        setProgress(80);
        const formatLabel = formats.find(f => f.value === targetFormat).label;
        const converted = canvas.toDataURL(targetFormat, 1.0);
        setConvertedUrl(converted);

        setProgress(100);
        setTimeout(() => {
          setConverting(false);
          setFinished(true);

          const historyItem = {
            id: Date.now(),
            name: file.name,
            from: file.type.split('/')[1].toUpperCase(),
            to: formatLabel,
            date: new Date().toLocaleString()
          };
          setHistory(prev => [historyItem, ...prev].slice(0, 10));

          trackEvent("ToolAction", { tool: "ImageConverter", action: "Conversion Success" });
        }, 500);
      };

      img.onerror = () => {
        setError("Failed to load image. Try another file.");
        setConverting(false);
      };
    } catch (err) {
      console.error(err);
      setError("Error during conversion.");
      setConverting(false);
    }
  };

  const downloadFile = () => {
    if (!convertedUrl) return;
    const formatLabel = formats.find(f => f.value === targetFormat).label.toLowerCase();
    const link = document.createElement("a");
    link.href = convertedUrl;
    link.download = `${file.name.split('.')[0]}.${formatLabel}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "ImageConverter", action: "Download" });
  };

  const clearFile = () => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setFinished(false);
    setProgress(0);
    setError("");
    setConvertedUrl(null);
  };

  return (
    <Layout>
      <PageTitle
        title="Image Converter - Convert JPG, PNG, WEBP"
        description="Fast and high-quality image format converter. Free to use with no-server privacy."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f6f8fb" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Conversion Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>Image Converter</h1>
                  <p className="desc w-75 mx-auto text-muted"> Change image formats instantly with our professional browser-based engine.</p>
                </div>

                {!file && !finished && (
                  <div
                    className="upload-area p-5 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    style={{ border: "2px dashed #03228f", borderRadius: "15px", backgroundColor: "#f9faff", cursor: "pointer" }}
                    onClick={() => document.getElementById('conv-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3>Select Image to Convert</h3>
                    <p className="text-muted">Drag or click to browse</p>
                    <input id="conv-upload" type="file" accept="image/*" className="d-none" onChange={handleFileChange} />
                  </div>
                )}

                {file && !finished && (
                  <div className="conversion-interface p-4" style={{ backgroundColor: "#f9faff", borderRadius: "15px" }}>
                    <div className="row align-items-center">
                      <div className="col-md-5 text-center">
                        <img src={preview} alt="Input" style={{ maxWidth: "100%", borderRadius: "10px", maxHeight: "250px" }} />
                        <p className="mt-2 small text-muted">{file.name}</p>
                      </div>
                      <div className="col-md-2 text-center py-4">
                        <FaExchangeAlt size={30} color="#03228f" />
                      </div>
                      <div className="col-md-5">
                        <h6 className="mb-3">Convert To:</h6>
                        <div className="d-flex flex-column gap-2">
                          {formats.map(f => (
                            <button
                              key={f.value}
                              onClick={() => setTargetFormat(f.value)}
                              className={`btn btn-block py-3 transition-all ${targetFormat === f.value ? 'bg-primary text-white shadow' : 'bg-white border'}`}
                              style={{ borderRadius: "10px", fontWeight: targetFormat === f.value ? "bold" : "normal" }}
                              disabled={converting}
                            >
                              {f.label} {targetFormat === f.value && <FaCheckCircle className="ml-2" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {!converting ? (
                      <div className="actions mt-5 d-flex justify-content-center gap-3">
                        <button onClick={handleConvert} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                          <FaSyncAlt className="mr-2" /> Convert Now
                        </button>
                        <button onClick={clearFile} className="readon bg-secondary px-5" style={{ border: "none" }}>
                          <FaTrash className="mr-2" /> Different File
                        </button>
                      </div>
                    ) : (
                      <div className="progress-container mt-5 px-lg-5">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Converting format...</span>
                          <span className="font-weight-bold" style={{ color: "#03228f" }}>{progress}%</span>
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
                    <h2 className="mb-2">Conversion Complete!</h2>
                    <p className="mb-4">Your image has been converted to <strong>{formats.find(f => f.value === targetFormat).label}</strong> successfully.</p>

                    <div className="actions d-flex justify-content-center gap-3">
                      <button onClick={downloadFile} className="readon bg-success px-5" style={{ border: "none" }}>
                        <FaDownload className="mr-2" /> Download Converted
                      </button>
                      <button onClick={clearFile} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                        Start New
                      </button>
                    </div>
                  </div>
                )}

                {error && <div className="alert alert-danger mt-4">{error}</div>}

                {/* Privacy Indicators */}
                <div className="row mt-50 text-center">
                  {[
                    { icon: FaShieldAlt, title: "No Server Upload", text: "Files never leave your browser." },
                    { icon: FaBolt, title: "Local Processing", text: "Fastest possible conversions." },
                    { icon: FaLock, title: "100% Private", text: "Secure local-only execution." }
                  ].map((item, i) => (
                    <div key={i} className="col-md-4 mb-3">
                      <item.icon size={30} color="#03228f" className="mb-2" />
                      <h6>{item.title}</h6>
                      <p className="small text-muted">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* History Table */}
              {history.length > 0 && (
                <div className="history-box p-4 mb-50" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                  <h5 className="mb-3"><FaHistory className="mr-2" /> Recent conversions</h5>
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr className="text-muted small uppercase">
                          <th>Original Name</th>
                          <th>From</th>
                          <th>To</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.map(item => (
                          <tr key={item.id} className="border-bottom">
                            <td>{item.name}</td>
                            <td><span className="badge badge-light">{item.from}</span></td>
                            <td><span className="badge badge-primary">{item.to}</span></td>
                            <td><small className="text-muted">{item.date}</small></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SEO Content */}
              <div className="seo-content mt-50">
                <h2 className="text-center mb-40">Understanding Image Formats</h2>
                <div className="row">
                  {[
                    { title: "JPG (JPEG)", text: "Best for photographs and realistic images where file size matters. Uses lossy compression." },
                    { title: "PNG", text: "Best for graphics, logos, and images with transparency. Uses lossless compression." },
                    { title: "WebP", text: "Google's modern format providing superior compression. Perfect for web performance." }
                  ].map((fm, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                      <div className="p-4 bg-white h-100 rounded shadow-sm border-top border-primary" style={{ borderTopWidth: "4px" }}>
                        <h5>{fm.title}</h5>
                        <p className="text-muted small mb-0">{fm.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImageConverter;
