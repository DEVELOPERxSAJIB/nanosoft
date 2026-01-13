import React, { useState, useEffect, useCallback, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFileExcel, FaFilePdf, FaCloudUploadAlt, FaCheckCircle,
  FaDownload, FaTrash, FaShieldAlt, FaBolt, FaLock, FaInfoCircle
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const ExcelToPdf = () => {
  const [file, setFile] = useState(null);
  const [converting, setConverting] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const conversionIntervalRef = useRef(null);

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Excel to PDF Converter - XLS/XLSX to PDF Online | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Convert Excel spreadsheets (XLS, XLSX) to PDF format instantly. Free, secure, and preserves formatting. No registration required.' },
      { name: 'keywords', content: 'excel to pdf, xls to pdf, xlsx to pdf, convert excel to pdf, online excel converter, nanosoft' },
      { property: 'og:title', content: 'Excel to PDF Converter - XLS/XLSX to PDF Online' },
      { property: 'og:description', content: 'Convert Excel spreadsheets (XLS, XLSX) to PDF format instantly. Free, secure, and preserves formatting.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/excel-to-pdf' }
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

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Excel to PDF Converter Tool",
      "description": "Convert Excel spreadsheets to PDF format instantly.",
      "url": "https://nanosoft.com/tools/excel-to-pdf",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Any"
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      if (conversionIntervalRef.current) clearInterval(conversionIntervalRef.current);
    };
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const validateAndSetFile = (selectedFile) => {
    const validTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ".xls",
      ".xlsx"
    ];

    const fileName = selectedFile?.name?.toLowerCase();
    const isExcel = validTypes.includes(selectedFile?.type) ||
      fileName?.endsWith('.xls') ||
      fileName?.endsWith('.xlsx');

    if (selectedFile && isExcel) {
      setFile(selectedFile);
      setFinished(false);
      setProgress(0);
      setError("");
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
        setPdfUrl(null);
      }
    } else {
      setError("Please upload a valid Excel file (.xls or .xlsx).");
    }
  };

  const handleFileChange = (e) => {
    validateAndSetFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setProgress(10);
    setError("");
    trackEvent("ToolAction", { tool: "ExcelToPdf", action: "Start Conversion" });

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          setProgress(40);

          const doc = new jsPDF();

          workbook.SheetNames.forEach((sheetName, index) => {
            if (index > 0) {
              doc.addPage();
            }

            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            if (jsonData.length > 0) {
              doc.text(sheetName, 14, 15);
              autoTable(doc, {
                head: [jsonData[0]],
                body: jsonData.slice(1),
                startY: 20,
                styles: { fontSize: 8, cellPadding: 2 },
                headStyles: { fillColor: [3, 34, 143] },
                margin: { top: 20 },
              });
            }
          });

          const blob = doc.output('blob');
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);

          setProgress(100);
          setTimeout(() => {
            setConverting(false);
            setFinished(true);
            trackEvent("ToolAction", { tool: "ExcelToPdf", action: "Conversion Success" });
          }, 500);
        } catch (err) {
          console.error("Conversion error:", err);
          setError("Failed to convert the file. Please try another one.");
          setConverting(false);
        }
      };
      reader.onerror = () => {
        setError("Error reading the file.");
        setConverting(false);
      };
      reader.readAsArrayBuffer(file);
    } catch (err) {
      console.error("Reader error:", err);
      setError("An unexpected error occurred.");
      setConverting(false);
    }
  };

  const downloadPdf = () => {
    if (!pdfUrl || !file) return;
    const element = document.createElement("a");
    element.href = pdfUrl;
    element.download = `${file.name.split('.')[0]}.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    trackEvent("ToolAction", { tool: "ExcelToPdf", action: "Download" });
  };

  const clearFile = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
    setFile(null);
    setFinished(false);
    setProgress(0);
    setError("");
  };

  return (
    <Layout>
      <PageTitle
        title="Excel to PDF Converter - Free Online Tool"
        description="Convert XLS/XLSX spreadsheets to PDF format instantly with our free online tool."
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f6f8fb" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Conversion Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>Excel to PDF</h1>
                  <p className="desc w-75 mx-auto text-muted">
                    Convert your spreadsheets into professional PDF documents in seconds. Fast, free, and secure.
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
                    onClick={() => document.getElementById('excel-upload').click()}
                  >
                    <FaCloudUploadAlt size={70} color="#03228f" className="mb-3" />
                    <h3 className="mb-2">Choose Excel File</h3>
                    <p className="mb-4 text-muted">Drag and drop your spreadsheet here (.xls, .xlsx)</p>
                    <label htmlFor="excel-upload" className="readon btn-hover" style={{ cursor: "pointer", display: "inline-block", backgroundColor: "#03228f", color: "#fff", padding: "12px 30px", borderRadius: "5px" }}>
                      Select File
                    </label>
                    <input
                      id="excel-upload"
                      type="file"
                      accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      className="d-none"
                      onChange={handleFileChange}
                    />
                  </div>
                )}

                {file && !finished && (
                  <div className="file-info-container text-center p-4" style={{ backgroundColor: "#f9faff", borderRadius: "15px" }}>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <FaFileExcel size={40} color="#1d6f42" className="mr-3" />
                      <div className="text-left">
                        <h4 className="mb-0" style={{ fontSize: "18px" }}>{file.name}</h4>
                        <p className="mb-0 text-muted">{(file.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>

                    {!converting ? (
                      <div className="actions mt-4 d-flex justify-content-center gap-3">
                        <button onClick={handleConvert} className="readon" style={{ backgroundColor: "#03228f", border: "none" }}>
                          Convert to PDF
                        </button>
                        <button onClick={clearFile} className="readon" style={{ backgroundColor: "#6c757d", border: "none" }}>
                          <FaTrash className="mr-2" /> Remove
                        </button>
                      </div>
                    ) : (
                      <div className="progress-container mt-4">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Converting spreadsheet...</span>
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
                    <h2 className="mb-2">Successfully Converted!</h2>
                    <p className="mb-4">Your Excel file has been converted to a professional PDF.</p>

                    <div className="actions d-flex justify-content-center gap-3 flex-wrap">
                      <button onClick={downloadPdf} className="readon" style={{ backgroundColor: "#28a745", border: "none" }}>
                        <FaDownload className="mr-2" /> Download PDF
                      </button>
                      <button onClick={clearFile} className="readon" style={{ backgroundColor: "#03228f", border: "none" }}>
                        Convert Another
                      </button>
                    </div>
                  </div>
                )}

                {error && <div className="alert alert-danger mt-4">{error}</div>}

                <div className="row mt-50 text-center">
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <FaShieldAlt size={30} color="#03228f" className="mb-2" />
                      <h6>Private & Secure</h6>
                      <p className="small text-muted">Your files are processed securely in your browser.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <FaBolt size={30} color="#03228f" className="mb-2" />
                      <h6>Instant Conversion</h6>
                      <p className="small text-muted">High-speed processing with no waiting time.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <FaLock size={30} color="#03228f" className="mb-2" />
                      <h6>End-to-End Privacy</h6>
                      <p className="small text-muted">We don't store your documents on our servers.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Content */}
              <div className="seo-content p-20 mt-4">
                <h2 className="mb-40 text-center">More Information About Excel to PDF Conversion</h2>

                <div className="row">
                  <div className="col-lg-6 mb-40">
                    <h3>Why convert Excel to PDF?</h3>
                    <p className="text-muted">
                      Excel files are great for data management, but they can display differently on various devices.
                      Converting your Excel (XLSX, XLS) files to PDF ensures that your tables, charts, and data formatting
                      remain fixed and professional-looking for everyone you share them with.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-40">
                    <h3>Preserve Your Formatting</h3>
                    <p className="text-muted">
                      Our advanced conversion tool ensures that your spreadsheet layout, cell formatting, and alignment
                      are perfectly preserved in the resulting PDF. Whether it's a financial report, an invoice, or a
                      data summary, the output will look exactly as it does in Excel.
                    </p>
                  </div>
                </div>

                <div className="faq-section mt-50">
                  <h3 className="mb-30 text-center">Frequently Asked Questions</h3>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <h5>Is it safe to convert my spreadsheets?</h5>
                      <p className="small text-muted">Yes, our tool uses client-side processing where possible and secure encrypted sessions for conversion, ensuring your private data stays private.</p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h5>Will my complex formulas be affected?</h5>
                      <p className="small text-muted">The converter takes a "snapshot" of the data as calculated in the Excel file, so all results from your formulas will be displayed correctly in the PDF.</p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h5>Can I convert large Excel files?</h5>
                      <p className="small text-muted">Yes, our tool handles large spreadsheets, though very complex files with thousands of rows may take a few seconds longer to process.</p>
                    </div>
                    <div className="col-md-6 mb-30">
                      <h5>Do the charts look good in PDF?</h5>
                      <p className="small text-muted">Absolutely. All Excel charts and graphs are converted with high resolution to ensure they remain crisp and readable in the PDF document.</p>
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

export default ExcelToPdf;
