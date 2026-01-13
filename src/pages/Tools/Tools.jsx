import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaFilePdf,
  FaImage,
  FaFont,
  FaLock,
  FaCompress,
  FaObjectGroup,
  FaCut,
  FaFileWord,
  FaCrop,
  FaFileImage,
  FaListOl,
  FaQrcode,
  FaEraser,
  FaEdit,
  FaEye,
  FaFileExcel,
  FaFilePowerpoint,
  FaExchangeAlt,
  FaCode,
} from "react-icons/fa";

const toolsData = [
  {
    id: 1,
    title: "PDF to Word",
    description: "Convert your PDF files to editable Word documents instantly.",
    icon: <FaFilePdf size={40} color="#ff0000" />,
    link: "/tools/pdf-to-word",
  },
  {
    id: 2,
    title: "Image Compressor",
    description:
      "Compress JPG and PNG images to reduce file size without losing quality.",
    icon: <FaCompress size={40} color="#106eea" />,
    link: "/tools/image-compressor",
  },
  {
    id: 3,
    title: "Merge PDF",
    description: "Combine multiple PDF files into a single document.",
    icon: <FaObjectGroup size={40} color="#dc3545" />,
    link: "/tools/merge-pdf",
  },
  {
    id: 4,
    title: "Split PDF",
    description: "Separate specific pages or ranges from a PDF file.",
    icon: <FaCut size={40} color="#fd7e14" />,
    link: "/tools/split-pdf",
  },
  {
    id: 5,
    title: "Word to PDF",
    description: "Convert Microsoft Word documents (DOC/DOCX) to PDF.",
    icon: <FaFileWord size={40} color="#007bff" />,
    link: "/tools/word-to-pdf",
  },
  {
    id: 6,
    title: "Image Resizer",
    description: "Resize and crop images to exact pixel dimensions.",
    icon: <FaCrop size={40} color="#6610f2" />,
    link: "/tools/image-resizer",
  },
  {
    id: 7,
    title: "Compress PDF",
    description: "Reduce the file size of your PDFs for easy sharing.",
    icon: <FaCompress size={40} color="#e83e8c" />,
    link: "/tools/compress-pdf",
  },
  {
    id: 8,
    title: "PDF to JPG",
    description: "Convert PDF pages into high-quality JPG or PNG images.",
    icon: <FaFileImage size={40} color="#20c997" />,
    link: "/tools/pdf-to-jpg",
  },
  {
    id: 9,
    title: "Word Counter",
    description:
      "Count words, characters, sentences, and paragraphs in your text.",
    icon: <FaListOl size={40} color="#28a745" />,
    link: "/tools/word-counter",
  },
  {
    id: 10,
    title: "QR Code Generator",
    description: "Create custom QR codes for URLs, text, Wi-Fi, and more.",
    icon: <FaQrcode size={40} color="#343a40" />,
    link: "/tools/qr-code-generator",
  },
  {
    id: 11,
    title: "Background Remover",
    description: "Automatically remove backgrounds from images instantly.",
    icon: <FaEraser size={40} color="#6f42c1" />,
    link: "/tools/background-remover",
  },
  {
    id: 12,
    title: "PDF Editor",
    description: "Add text, shapes, and signatures to your PDF documents.",
    icon: <FaEdit size={40} color="#17a2b8" />,
    link: "/tools/pdf-editor",
  },
  {
    id: 13,
    title: "Online OCR",
    description: "Extract text from scanned images and PDFs.",
    icon: <FaEye size={40} color="#ffc107" />,
    link: "/tools/online-ocr",
  },
  {
    id: 14,
    title: "Excel to PDF",
    description: "Convert Excel spreadsheets (XLS/XLSX) to PDF format.",
    icon: <FaFileExcel size={40} color="#28a745" />,
    link: "/tools/excel-to-pdf",
  },
  {
    id: 15,
    title: "PPT to PDF",
    description: "Convert PowerPoint presentations (PPT/PPTX) to PDF.",
    icon: <FaFilePowerpoint size={40} color="#d63384" />,
    link: "/tools/ppt-to-pdf",
  },
  {
    id: 16,
    title: "Image Converter",
    description: "Convert between various image formats like PNG, JPG, WebP.",
    icon: <FaImage size={40} color="#0dcaf0" />,
    link: "/tools/image-converter",
  },
  {
    id: 17,
    title: "Case Converter",
    description:
      "Convert text between upper case, lower case, title case, and more.",
    icon: <FaFont size={40} color="#343a40" />,
    link: "/tools/case-converter",
  },
  {
    id: 18,
    title: "Password Generator",
    description: "Generate strong, secure, and random passwords.",
    icon: <FaLock size={40} color="#ffc107" />,
    link: "/tools/password-generator",
  },
  {
    id: 19,
    title: "Code Formatter",
    description: "Beautify and format your HTML, JSON, or XML code.",
    icon: <FaCode size={40} color="#007bff" />,
    link: "/tools/code-formatter",
  },
  {
    id: 20,
    title: "Diff Checker",
    description: "Compare two text files to find differences and changes.",
    icon: <FaExchangeAlt size={40} color="#fd7e14" />,
    link: "/tools/diff-checker",
  },
];

const Tools = () => {
  return (
    <Layout>
      <PageTitle
        title="NanoSoft Tools - Free Online Utilities"
        description="Everyday tools for developers, designers, and business professionals. PDF converters, image tools, text utilities, and more."
      />

      {/* Breadcrumbs Start */}
      <div className="rs-breadcrumbs img3">
        <div className="breadcrumbs-inner text-center">
          <h1 className="page-title">Our Tools</h1>
          <ul>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>Tools</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumbs End */}

      <div className="rs-services style2 pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="container">
          <div className="sec-title2 text-center mb-45">
            <div className="sub-text style-bg">Tools</div>
            <h2 className="title testi-title">Powerful Online Tools</h2>
          </div>

          <div className="row">
            {toolsData.map((tool) => (
              <div
                key={tool.id}
                className="col-lg-4 col-md-6 mb-30 d-flex align-items-stretch"
              >
                <Link
                  to={tool.link}
                  className="services-item w-100"
                  style={{
                    padding: "35px 30px",
                    border: "1px solid #eef",
                    borderRadius: "15px",
                    transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    backgroundColor: "#fff",
                    display: "block",
                    textDecoration: "none",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(3, 34, 143, 0.08)";
                    e.currentTarget.style.borderColor = "#03228f40";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px rgba(0,0,0,0.02)";
                    e.currentTarget.style.borderColor = "#eef";
                  }}
                >
                  <div
                    className="services-icon mb-25"
                    style={{
                      width: "70px",
                      height: "70px",
                      lineHeight: "70px",
                      backgroundColor: "#f8f9ff",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {tool.icon}
                  </div>
                  <div className="services-content">
                    <h3
                      className="title mb-15"
                      style={{ fontSize: "22px", color: "#03228f" }}
                    >
                      {tool.title}
                    </h3>
                    <p
                      className="desc mb-20"
                      style={{
                        color: "#666",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      {tool.description}
                    </p>
                    <div
                      className="readon view-more"
                      style={{
                        color: "#03228f",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      Use Tool <i className="fa fa-arrow-right ml-1"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
