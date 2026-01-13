import { useState, useEffect, useCallback } from "react";
import PageTitle from "../../components/PageTitle";
import {
  FaFilePdf,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaDownload,
  FaTrash,
  FaInfoCircle,
  FaShieldAlt,
  FaBolt,
  FaLock,
  FaPlus,
  FaArrowUp,
  FaArrowDown,
  FaTimes,
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import { PDFDocument } from "pdf-lib";
import AdsLayout from "../../components/Layout/AdsLayout";

const MergePdf = () => {
  const [files, setFiles] = useState([]);
  const [merging, setMerging] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mergedUrl, setMergedUrl] = useState(null);
  const [error, setError] = useState("");

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Merge PDF Online - Combine PDF Files Free | NanoSoft";

    const metaTags = [
      {
        name: "description",
        content:
          "Merge multiple PDF files into one document instantly. Free, secure, and no registration required. Reorder files before merging.",
      },
      {
        name: "keywords",
        content:
          "merge pdf, combine pdf, join pdf files, online pdf merger, nanotechnology, nanosoft",
      },
      {
        property: "og:title",
        content: "Merge PDF Online - Combine PDF Files Free",
      },
      {
        property: "og:description",
        content:
          "Merge multiple PDF files into one document instantly. Free and secure online PDF merger.",
      },
      { property: "og:url", content: "https://nanosoft.com/tools/merge-pdf" },
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
      if (mergedUrl) URL.revokeObjectURL(mergedUrl);
    };
  }, [mergedUrl]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  }, []);

  const addFiles = (newFiles) => {
    const pdfs = newFiles.filter((f) => f.type === "application/pdf");
    if (pdfs.length < newFiles.length) {
      setError("Only PDF files are allowed.");
    }
    setFiles((prev) => [...prev, ...pdfs]);
    setFinished(false);
    if (mergedUrl) {
      URL.revokeObjectURL(mergedUrl);
      setMergedUrl(null);
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (mergedUrl) {
      URL.revokeObjectURL(mergedUrl);
      setMergedUrl(null);
    }
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newFiles = [...files];
    [newFiles[index - 1], newFiles[index]] = [
      newFiles[index],
      newFiles[index - 1],
    ];
    setFiles(newFiles);
  };

  const moveDown = (index) => {
    if (index === files.length - 1) return;
    const newFiles = [...files];
    [newFiles[index + 1], newFiles[index]] = [
      newFiles[index],
      newFiles[index + 1],
    ];
    setFiles(newFiles);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please add at least 2 PDF files to merge.");
      return;
    }

    setMerging(true);
    setProgress(10);
    setError("");
    trackEvent("ToolAction", { tool: "MergePDF", action: "Start Merger" });

    try {
      const mergedPdf = await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setProgress(Math.round((i / files.length) * 100)); // Update progress before processing

        try {
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await PDFDocument.load(arrayBuffer);
          const copiedPages = await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          );
          copiedPages.forEach((page) => mergedPdf.addPage(page));
        } catch (fileErr) {
          console.error(`Error processing file ${file.name}:`, fileErr);
          throw new Error(
            `Failed to load "${file.name}". It might be password-protected or encrypted.`
          );
        }
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setMergedUrl(url);

      setProgress(100);
      setMerging(false);
      setFinished(true);
      trackEvent("ToolAction", { tool: "MergePDF", action: "Merger Success" });
    } catch (err) {
      console.error(err);
      setError(
        err.message ||
          "An error occurred while merging PDFs. Some files might be encrypted."
      );
      setMerging(false);
    }
  };

  const downloadFile = () => {
    if (!mergedUrl) return;
    const link = document.createElement("a");
    link.href = mergedUrl;
    link.download = "merged_document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "MergePDF", action: "Download" });
  };

  const clearAll = () => {
    if (mergedUrl) URL.revokeObjectURL(mergedUrl);
    setFiles([]);
    setFinished(false);
    setMergedUrl(null);
    setProgress(0);
    setError("");
  };

  return (
    <AdsLayout>
      <PageTitle
        title="Merge PDF Online | Combine PDF Files Securely — NanoSoft"
        description="Merge multiple PDF files into a single, perfectly formatted document. Fast, secure, and private PDF joining tool built by NanoSoft."
      />

      <div>
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
              PDF Utility
            </span>
            <h1
              className="title pb-20"
              style={{ fontSize: "36px", color: "#03228f" }}
            >
              Merge PDF
            </h1>
            <p className="desc w-75 mx-auto text-muted">
              {" "}
              Combine several PDF documents into one. Reorder your files before
              merging to get the perfect sequence.
            </p>
          </div>

          {!finished && (
            <>
              <div
                className="upload-area p-5 text-center mb-4"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                style={{
                  border: "2px dashed #03228f",
                  borderRadius: "15px",
                  backgroundColor: "#f9faff",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onClick={() => document.getElementById("pdf-upload").click()}
              >
                <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                <h3 className="mb-2">Click to Add PDF Files</h3>
                <p className="text-muted">
                  or drag and drop multiple files here
                </p>
                <input
                  id="pdf-upload"
                  type="file"
                  accept="application/pdf"
                  multiple
                  className="d-none"
                  onChange={(e) => addFiles(Array.from(e.target.files))}
                />
              </div>

              {files.length > 0 && (
                <div
                  className="file-list p-4 bg-light rounded"
                  style={{ marginBottom: "30px", border: "1px solid #eee" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Files to Merge ({files.length})</h5>
                    <button
                      onClick={clearAll}
                      className="btn btn-sm btn-outline-danger border-0"
                    >
                      <FaTimes className="mr-1" /> Clear All
                    </button>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {files.map((f, i) => (
                      <div
                        key={i}
                        className="p-3 bg-white rounded shadow-sm d-flex align-items-center justify-content-between border"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <FaFilePdf color="#e74c3c" size={20} />
                          <div className="text-left">
                            <div
                              className="font-weight-bold"
                              style={{
                                fontSize: "14px",
                                color: "#333",
                                maxWidth: "250px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {f.name}
                            </div>
                            <small className="text-muted">
                              {(f.size / 1024 / 1024).toFixed(2)} MB
                            </small>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <div className="reorder-btns d-flex flex-column gap-1 mr-3">
                            <button
                              onClick={() => moveUp(i)}
                              className="btn p-0 border-0 text-muted"
                              title="Move Up"
                              disabled={i === 0}
                            >
                              <FaArrowUp size={12} />
                            </button>
                            <button
                              onClick={() => moveDown(i)}
                              className="btn p-0 border-0 text-muted"
                              title="Move Down"
                              disabled={i === files.length - 1}
                            >
                              <FaArrowDown size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFile(i)}
                            className="btn btn-sm btn-link text-danger p-0 border-0"
                            title="Remove"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!merging ? (
                    <div className="mt-4 pt-3 border-top d-flex flex-column align-items-center">
                      <button
                        onClick={handleMerge}
                        className="readon px-5 py-3"
                        style={{
                          backgroundColor: "#03228f",
                          border: "none",
                          fontSize: "18px",
                          borderRadius: "10px",
                        }}
                      >
                        <FaPlus className="mr-2" /> Combine All Files
                      </button>
                      <p className="small text-muted mt-3">
                        <FaInfoCircle className="mr-1" /> Your files are
                        processed locally. Security guaranteed.
                      </p>
                    </div>
                  ) : (
                    <div className="progress-wrap mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="font-weight-bold text-primary">
                          Creating merged PDF...
                        </span>
                        <strong className="text-primary">{progress}%</strong>
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
            </>
          )}

          {finished && (
            <div
              className="success-container text-center p-5"
              style={{
                backgroundColor: "#f4fcf6",
                borderRadius: "20px",
                border: "1px solid #d4edda",
                boxShadow: "0 10px 30px rgba(40, 167, 69, 0.05)",
              }}
            >
              <div
                className="icon-circle bg-white shadow-sm d-inline-flex p-4 rounded-circle mb-4"
                style={{ color: "#28a745" }}
              >
                <FaCheckCircle size={50} />
              </div>
              <h2 className="mb-2" style={{ color: "#1e4d2b" }}>
                Merge Successful!
              </h2>
              <p className="mb-4 text-muted">
                A single PDF containing all{" "}
                <strong>{files.length} documents</strong> is ready.
              </p>
              <div className="actions d-flex flex-column align-items-center gap-3">
                <button
                  onClick={downloadFile}
                  className="readon bg-success px-5 py-3 w-100 max-w-400"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "18px",
                  }}
                >
                  <FaDownload className="mr-2" /> Download Final PDF
                </button>
                <button onClick={clearAll} className="btn text-muted mt-2">
                  <FaArrowUp
                    className="mr-1"
                    style={{ transform: "rotate(-90deg)" }}
                  />{" "}
                  Merge More Files
                </button>
              </div>
            </div>
          )}

          {error && (
            <div
              className="alert alert-danger mt-4 p-3 rounded shadow-sm border-0"
              style={{ background: "#fff5f5", color: "#c53030" }}
            >
              {error}
            </div>
          )}

          {/* Privacy Row */}
          <div className="row mt-50 g-4">
            {[
              {
                icon: FaShieldAlt,
                title: "100% Privacy",
                text: "Files never leave your browser engine.",
              },
              {
                icon: FaLock,
                title: "Enterprise Grade",
                text: "Encrypted memory-only processing sequence.",
              },
              {
                icon: FaBolt,
                title: "Real-time Speed",
                text: "Instant joining without server upload delays.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-4 text-center">
                <div className="icon-box p-3 bg-light rounded d-inline-block mb-3">
                  <item.icon size={25} color="#03228f" />
                </div>
                <h6 className="mb-2">{item.title}</h6>
                <p className="small text-muted mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="seo-content p-4 bg-white rounded shadow-sm">
          <h2 className="text-center mb-50">
            Master Your Documents with NanoSoft
          </h2>
          <div className="row g-5">
            <div className="col-md-6">
              <h5 className="text-primary mb-3">
                Streamlined Order Management
              </h5>
              <p className="text-muted small">
                Our merger tool allows you to manually reorder your PDF
                documents before the final join. This is essential for creating
                cohesive reports, e-books, or presentation decks where page
                sequence is critical. Use the Up/Down arrows to move files until
                the order is perfect.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary mb-3">
                Browser-Side Processing Explained
              </h5>
              <p className="text-muted small">
                Unlike traditional online PDF tools that upload your sensitive
                data to their cloud servers, NanoSoft uses the power of your
                CPU. The `pdf-lib` engine runs locally in your browser memory.
                This means even if you're not connected to the internet during
                the final merge step, the tool still works—and your privacy is
                objectively guaranteed.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary mb-3">Ideal for Professional Use</h5>
              <p className="text-muted small">
                From lawyers combining evidence files to students merging thesis
                chapters, our tool maintains the original resolution and
                formatting of every page. We don't add watermarks, and we don't
                limit the file count, making it a professional-grade alternative
                to desktop software.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary mb-3">
                Zero Installation Requirement
              </h5>
              <p className="text-muted small">
                Save your disk space. You don't need to install Acrobat or any
                bulky software suites. Simply open this page on Windows, macOS,
                Linux, or even your iPad, and start merging documents instantly
                with high precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdsLayout>
  );
};

export default MergePdf;
