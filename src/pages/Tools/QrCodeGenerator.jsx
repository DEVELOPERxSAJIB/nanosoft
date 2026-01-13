import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaQrcode, FaDownload, FaTrash, FaShieldAlt, FaBolt, FaLock,
  FaLink, FaTextHeight, FaWifi, FaEnvelope, FaPalette, FaHistory
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import { QRCodeSVG, QRCodeCanvas } from "qrcode.react";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [size, setSize] = useState(256);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#3228f00"); // NanoSoft primary
  const [level, setLevel] = useState("L");
  const [includeMargin, setIncludeMargin] = useState(true);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const qrRef = useRef(null);

  // NanoSoft official Blue: #03228f
  useEffect(() => {
    setFgColor("#03228f");

    document.title = "QR Code Generator - Create Custom QR Codes Online | NanoSoft";
    const metaTags = [
      { name: 'description', content: 'Generate custom QR codes for URLs, text, email, and WiFi. Professional, secure, and high-resolution QR generator by NanoSoft.' },
      { name: 'keywords', content: 'qr code generator, create qr code, free qr generator, custom qr code, wifi qr code, nanosoft' },
      { property: 'og:title', content: 'QR Code Generator - Create Custom QR Codes' },
      { property: 'og:description', content: 'Generate high-quality QR codes instantly. No tracking, 100% private.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/qr-code-generator' }
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
      "name": "QR Code Generator Tool",
      "description": "Create custom QR codes for URLs, text, Wi-Fi, and more. Customize colors and export as high-res images.",
      "url": "https://nanosoft.com/tools/qr-code-generator",
      "applicationCategory": "MarketingApplication",
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
    const savedHistory = localStorage.getItem('qrHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem('qrHistory', JSON.stringify(history));
  }, [history]);

  const downloadQr = () => {
    if (!value) return;
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `qrcode_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Add to history
    const historyItem = {
      id: Date.now(),
      value: value.substring(0, 30) + (value.length > 30 ? "..." : ""),
      fullValue: value,
      date: new Date().toLocaleTimeString()
    };
    setHistory(prev => [historyItem, ...prev].slice(0, 5));

    trackEvent("ToolAction", { tool: "QrGenerator", action: "Download", size });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('qrHistory');
  };

  const clear = () => {
    setValue("");
  };

  return (
    <Layout>
      <PageTitle
        title="QR Code Generator - Fast & Secure"
        description="Create your own QR codes for links, text, and more. Customize colors and export as high-res images."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f8f9ff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Marketing Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>QR Code Generator</h1>
                  <p className="desc w-75 mx-auto text-muted"> Instantly create beautiful QR codes for any purpose. Fully customizable and high quality.</p>
                </div>

                <div className="row">
                  {/* Settings Side */}
                  <div className="col-md-7">
                    <div className="input-group-wrap mb-4">
                      <label className="font-weight-bold mb-2">QR Code Content (URL or Text)</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Enter your URL (e.g., https://nanosoft.com) or any text here..."
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                          if (e.target.value) trackEvent("ToolAction", { tool: "QrGenerator", action: "Type Content" });
                        }}
                        style={{ borderRadius: "10px", padding: "15px", fontSize: "16px", border: "2px solid #eee" }}
                      />
                    </div>

                    <div className="settings-grid row g-3">
                      <div className="col-md-6 mb-3">
                        <label className="small text-muted font-weight-bold uppercase">Size (Pixels)</label>
                        <input type="number" className="form-control" value={size} onChange={(e) => setSize(parseInt(e.target.value) || 256)} />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="small text-muted font-weight-bold uppercase">Error Correction</label>
                        <select className="form-control" value={level} onChange={(e) => setLevel(e.target.value)}>
                          <option value="L">L (Low)</option>
                          <option value="M">M (Medium)</option>
                          <option value="Q">Q (Quartile)</option>
                          <option value="H">H (High)</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="small text-muted font-weight-bold uppercase">Foreground Color</label>
                        <div className="d-flex gap-2">
                          <input type="color" className="form-control form-control-color w-100" value={fgColor} onChange={(e) => setFgColor(e.target.value)} />
                          <input type="text" className="form-control" value={fgColor} onChange={(e) => setFgColor(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="small text-muted font-weight-bold uppercase">Background Color</label>
                        <div className="d-flex gap-2">
                          <input type="color" className="form-control form-control-color w-100" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
                          <input type="text" className="form-control" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview Side */}
                  <div className="col-md-5 text-center mt-4 mt-md-0">
                    <div className="qr-preview-box p-4 bg-light rounded d-flex align-items-center justify-content-center" style={{ minHeight: "350px", border: "1px solid #eef" }}>
                      {value ? (
                        <div ref={qrRef} className="bg-white p-3 rounded shadow-sm">
                          <QRCodeCanvas
                            value={value}
                            size={size}
                            bgColor={bgColor}
                            fgColor={fgColor}
                            level={level}
                            includeMargin={includeMargin}
                          />
                        </div>
                      ) : (
                        <div className="text-muted">
                          <FaQrcode size={100} className="mb-3 opacity-25" />
                          <p>Enter text to preview QR code</p>
                        </div>
                      )}
                    </div>

                    {value && (
                      <div className="mt-4 d-flex flex-column align-items-center gap-3">
                        <div className="d-flex justify-content-center gap-3 w-100">
                          <button onClick={downloadQr} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                            <FaDownload className="mr-2" /> Download PNG
                          </button>
                          <button onClick={clear} className="btn text-danger">Clear</button>
                        </div>

                        <button onClick={() => setShowHistory(!showHistory)} className="btn btn-sm btn-link text-muted">
                          <FaHistory className="mr-1" /> {showHistory ? "Hide History" : "View Recent Codes"}
                        </button>

                        {showHistory && (
                          <div className="history-list w-100 mt-2 p-3 bg-white rounded border shadow-sm text-left">
                            {history.length > 0 ? (
                              history.map(item => (
                                <div key={item.id} className="p-2 mb-2 bg-light rounded small d-flex justify-content-between align-items-center border" style={{ cursor: "pointer" }} onClick={() => setValue(item.fullValue)}>
                                  <span className="text-truncate mr-2" style={{ maxWidth: "150px" }}>{item.value}</span>
                                  <span className="text-muted" style={{ fontSize: "10px" }}>{item.date}</span>
                                </div>
                              ))
                            ) : (
                              <p className="small text-muted mb-0 text-center">No history found.</p>
                            )}
                            {history.length > 0 && (
                              <button onClick={clearHistory} className="btn btn-sm btn-link text-danger mt-2 w-100">Clear History</button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features Row */}
                <div className="row mt-50 text-center">
                  {[
                    { icon: FaShieldAlt, title: "100% Private", text: "Generator runs in your browser. No data sent to servers." },
                    { icon: FaBolt, title: "Instant Generate", text: "Create QR codes in real-time as you type." },
                    { icon: FaLock, title: "No Expiry", text: "Generated codes work forever and have no limits." }
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
                <h2 className="text-center mb-50">Mastering QR Technology</h2>
                <div className="row text-muted">
                  <div className="col-md-6 mb-4">
                    <h5>What is Error Correction?</h5>
                    <p className="small">Error correction allows a QR code to be readable even if part of it is damaged or dirty. Level 'H' (High) is best for codes that might face physical wear, while 'L' (Low) results in a simpler-looking code.</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <h5>Dynamic vs Static</h5>
                    <p className="text-muted small">Our tool creates **Static QR codes**. This means the data is encoded directly into the pattern. They are free, permanent, and do not track users, making them the most private option available.</p>
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

export default QrCodeGenerator;
