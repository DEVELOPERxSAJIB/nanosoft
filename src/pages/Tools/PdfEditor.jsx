import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFilePdf, FaCloudUploadAlt, FaCheckCircle, FaDownload,
  FaTrash, FaHistory, FaInfoCircle, FaShieldAlt, FaBolt, FaLock,
  FaEdit, FaSave, FaPen
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import { PDFDocument, rgb } from 'pdf-lib';

const PdfEditor = () => {
  const [file, setFile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [editedUrl, setEditedUrl] = useState(null);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Online PDF Editor - Edit PDF Files Free | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Edit your PDF files online safely and securely. Add text, modify properties, and manage pages. Free, fast and secure online PDF editor by NanoSoft.' },
      { name: 'keywords', content: 'pdf editor, edit pdf online, modify pdf, free pdf tool, nanosoft pdf editor, nanotechnology, nanosoft' },
      { property: 'og:title', content: 'Online PDF Editor - Edit PDF Files Free' },
      { property: 'og:description', content: 'Modify your PDF documents instantly in your browser. No registration required.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/pdf-editor' }
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
      "name": "PDF Editor Tool",
      "description": "Edit your PDF files online safely and securely. Add text, modify properties and manage metadata.",
      "url": "https://nanosoft.com/tools/pdf-editor",
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
    const savedHistory = localStorage.getItem('pdfEditorHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));

    return () => {
      if (editedUrl) URL.revokeObjectURL(editedUrl);
    };
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem('pdfEditorHistory', JSON.stringify(history));
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
      setEditedUrl(null);
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleEdit = async () => {
    if (!file) return;

    setEditing(true);
    setProgress(30);
    setError("");
    trackEvent("ToolAction", { tool: "PDFEditor", action: "Start Editing" });

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      setProgress(60);

      // Metadata modification
      if (title) pdfDoc.setTitle(title);
      if (author) pdfDoc.setAuthor(author);
      if (subject) pdfDoc.setSubject(subject);

      pdfDoc.setProducer('NanoSoft PDF Tool');

      // Overlay text on first page
      if (title) {
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { height } = firstPage.getSize();
        firstPage.drawText(title, {
          x: 50,
          y: height - 50,
          size: 15,
          color: rgb(0.01, 0.13, 0.56) // #03228f
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setEditedUrl(url);

      // Add to history
      const historyItem = {
        id: Date.now(),
        name: file.name,
        action: "Metadata/Overlay Edit",
        date: new Date().toLocaleString()
      };
      setHistory(prev => [historyItem, ...prev].slice(0, 10));

      setProgress(100);
      setTimeout(() => {
        setEditing(false);
        setFinished(true);
        trackEvent("ToolAction", { tool: "PDFEditor", action: "Editing Success" });
      }, 500);
    } catch (err) {
      console.error(err);
      setError("An error occurred while editing the PDF. The file might be encrypted or corrupted.");
      setEditing(false);
    }
  };

  const downloadFile = () => {
    if (!editedUrl) return;
    const link = document.createElement("a");
    link.href = editedUrl;
    link.download = `edited_${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "PDFEditor", action: "Download" });
  };

  const clearFile = () => {
    if (editedUrl) URL.revokeObjectURL(editedUrl);
    setFile(null);
    setFinished(false);
    setProgress(0);
    setEditedUrl(null);
    setTitle("");
    setAuthor("");
    setSubject("");
    setError("");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('pdfEditorHistory');
  };

  return (
    <Layout>
      <PageTitle
        title="Interactive PDF Editor"
        description="Quickly modify your PDF documents without installing heavy software. 100% private and secure."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f6f8fb" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 50px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Core PDF Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>PDF Editor</h1>
                  <p className="desc w-75 mx-auto text-muted"> Modify properties and add simple annotations to your PDF files securely in your browser. </p>
                </div>

                {!file && !finished && (
                  <div
                    className="upload-area p-5 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    style={{ border: "2px dashed #03228f", borderRadius: "15px", backgroundColor: "#f9faff", cursor: "pointer" }}
                    onClick={() => document.getElementById('edit-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3>Upload PDF to Edit</h3>
                    <p className="text-muted">Supports all PDF versions</p>
                    <input id="edit-upload" type="file" accept="application/pdf" className="d-none" onChange={(e) => validateAndSetFile(e.target.files[0])} />
                  </div>
                )}

                {file && !finished && (
                  <div className="editor-interface p-4 bg-light rounded text-center">
                    <div className="row g-4 mb-4 text-left">
                      <div className="col-md-5">
                        <div className="p-4 bg-white rounded shadow-sm text-center">
                          <FaFilePdf size={60} color="#e74c3c" className="mb-2" />
                          <h6 className="mb-0 text-truncate">{file.name}</h6>
                          <p className="small text-muted mt-2">{(file.size / 1024).toFixed(1)} KB</p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="form-group mb-3">
                          <label className="small font-weight-bold text-muted uppercase d-block mb-1">Overlay Text (Header)</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Add text to first page header..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div className="row">
                          <div className="col-6 mb-3">
                            <label className="small font-weight-bold text-muted uppercase d-block mb-1">Author</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Document author"
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                            />
                          </div>
                          <div className="col-6 mb-3">
                            <label className="small font-weight-bold text-muted uppercase d-block mb-1">Subject</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Doc subject"
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                        </div>
                        <p className="small text-info mb-0"><FaInfoCircle /> Modifications happen securely in your browser.</p>
                      </div>
                    </div>

                    {!editing ? (
                      <div className="d-flex justify-content-center gap-3">
                        <button onClick={handleEdit} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                          <FaSave className="mr-2" /> Apply Changes
                        </button>
                        <button onClick={clearFile} className="btn text-danger">Discard</button>
                      </div>
                    ) : (
                      <div className="progress-wrap px-lg-5">
                        <div className="d-flex justify-content-between mb-2 small font-weight-bold text-muted uppercase">
                          <span>Processing Document...</span>
                          <span>{progress}%</span>
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
                    <h2>Changes Saved!</h2>
                    <p className="mb-4">Your PDF has been successfully modified and is ready.</p>
                    <div className="actions d-flex justify-content-center gap-3">
                      <button onClick={downloadFile} className="readon bg-success px-5" style={{ border: "none" }}>
                        <FaDownload className="mr-2" /> Download Edited PDF
                      </button>
                      <button onClick={clearFile} className="readon px-5" style={{ backgroundColor: "#03228f", border: "none" }}>
                        Edit New File
                      </button>
                    </div>

                    <div className="mt-4">
                      <button onClick={() => setShowHistory(!showHistory)} className="btn btn-sm btn-link text-muted">
                        <FaHistory className="mr-1" /> {showHistory ? "Hide History" : "View Recent Edits"}
                      </button>
                    </div>

                    {showHistory && (
                      <div className="history-list mt-3 p-3 bg-white rounded border">
                        {history.length > 0 ? (
                          history.map(item => (
                            <div key={item.id} className="d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded small">
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

                {/* Features Row */}
                <div className="row mt-50 text-center">
                  {[
                    { icon: FaShieldAlt, title: "Private Engine", text: "Safe local editing. No cloud storage." },
                    { icon: FaBolt, title: "Speedy Edit", text: "Instant property and text modifications." },
                    { icon: FaLock, title: "Secure", text: "Industry-standard encryption handling." }
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
    </Layout>
  );
};

export default PdfEditor;
