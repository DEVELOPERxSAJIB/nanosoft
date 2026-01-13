<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 727854f9bb6cae25d4b228f00d4edf625e1b06a0
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
<<<<<<< HEAD
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
=======
  FaImage,
  FaCrop,
  FaCompress,
  FaExpand,
  FaFileImage,
  FaFilePdf,
  FaFileWord,
  FaMagic,
  FaFont,
  FaSpellCheck,
  FaAlignLeft,
  FaPalette,
  FaFillDrip,
  FaCode,
  FaQrcode,
  FaLock,
  FaLink,
  FaYoutube,
  FaSitemap,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ToolCard = ({ title, desc, link, icon: Icon }) => (
  <div className="col-lg-4 col-md-6 mb-20">
    <div className="services-item shadow-sm green-bg h-100 tool-card">
      {/* ICON */}
      <div className="services-icon text-center mb-15">
        <Icon className="tool-icon" />
      </div>

      {/* CONTENT */}
      <div className="services-content text-center d-flex flex-column flex-grow-1">
        <div className="services-text mb-10">
          <h3 className="title">
            <Link to={link}>{title}</Link>
          </h3>
        </div>

        <div className="services-desc mt-auto">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  </div>
);
>>>>>>> 727854f9bb6cae25d4b228f00d4edf625e1b06a0

const Tools = () => {
  return (
    <Layout>
      <PageTitle
<<<<<<< HEAD
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
=======
        title="AI Image & Media Tools for Businesses | NanoSoft"
        description="Explore NanoSoft’s collection of AI-powered image and media tools including background removal, face swap, image resizing, enhancement, and more—built for speed, accuracy, and professional use."
      />

      <div>
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

        {/* Tools Section Start */}
        <div className="rs-services style3 pt-80 pb-80 md-pt-75 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <div className="sub-text style-bg">Tools</div>
              <h2 className="title testi-title">Powerful Online Tools</h2>
            </div>

            <div className="row">
              {/* IMAGE TOOLS */}
              <ToolCard
                title="Image Background Remover"
                desc="Remove image backgrounds instantly using AI."
                link="/tools/image-background-remover"
                icon={FaMagic}
              />
              <ToolCard
                title="Image Resize"
                desc="Resize images for web, mobile, and social media."
                link="/tools/image-resize"
                icon={FaExpand}
              />
              <ToolCard
                title="Image Crop"
                desc="Crop images accurately without quality loss."
                link="/tools/image-crop"
                icon={FaCrop}
              />
              <ToolCard
                title="Image Compressor"
                desc="Reduce image file size while keeping quality."
                link="/tools/image-compressor"
                icon={FaCompress}
              />
              <ToolCard
                title="Image Upscaler"
                desc="Enhance and upscale low-resolution images."
                link="/tools/image-upscaler"
                icon={FaExpand}
              />
              <ToolCard
                title="Image Format Converter"
                desc="Convert JPG, PNG, WebP and more formats."
                link="/tools/image-format-converter"
                icon={FaFileImage}
              />
              <ToolCard
                title="Bulk Image Resize"
                desc="Resize multiple images at once easily."
                link="/tools/bulk-image-resize"
                icon={FaExpand}
              />
              <ToolCard
                title="Image Watermark"
                desc="Add custom watermark to protect images."
                link="/tools/image-watermark"
                icon={FaImage}
              />

              {/* PDF & DOCUMENT TOOLS */}
              <ToolCard
                title="JPG to PDF"
                desc="Convert JPG images into PDF files."
                link="/tools/jpg-to-pdf"
                icon={FaFilePdf}
              />
              <ToolCard
                title="PDF to JPG"
                desc="Convert PDF pages into images."
                link="/tools/pdf-to-jpg"
                icon={FaFileImage}
              />
              <ToolCard
                title="Merge PDF"
                desc="Combine multiple PDF files into one."
                link="/tools/merge-pdf"
                icon={FaFilePdf}
              />
              <ToolCard
                title="Split PDF"
                desc="Split PDF into separate pages easily."
                link="/tools/split-pdf"
                icon={FaFilePdf}
              />
              <ToolCard
                title="Compress PDF"
                desc="Reduce PDF file size without quality loss."
                link="/tools/compress-pdf"
                icon={FaCompress}
              />
              <ToolCard
                title="PDF to Word"
                desc="Convert PDF files into editable Word format."
                link="/tools/pdf-to-word"
                icon={FaFileWord}
              />
              <ToolCard
                title="Word to PDF"
                desc="Convert Word documents into PDF files."
                link="/tools/word-to-pdf"
                icon={FaFilePdf}
              />

              {/* AI & TEXT TOOLS */}
              <ToolCard
                title="Image to Text (OCR)"
                desc="Extract editable text from images."
                link="/tools/image-to-text"
                icon={FaFont}
              />
              <ToolCard
                title="Text to Image"
                desc="Generate images from text using AI."
                link="/tools/text-to-image"
                icon={FaMagic}
              />
              <ToolCard
                title="Text Paraphraser"
                desc="Rewrite text while keeping the meaning."
                link="/tools/text-paraphraser"
                icon={FaAlignLeft}
              />
              <ToolCard
                title="Grammar Checker"
                desc="Check and correct grammar instantly."
                link="/tools/grammar-checker"
                icon={FaSpellCheck}
              />
              <ToolCard
                title="Text Summarizer"
                desc="Summarize long text into key points."
                link="/tools/text-summarizer"
                icon={FaAlignLeft}
              />

              {/* DESIGN & COLOR TOOLS */}
              <ToolCard
                title="Gradient Color Generator"
                desc="Create beautiful CSS gradients easily."
                link="/tools/gradient-color-generator"
                icon={FaFillDrip}
              />
              <ToolCard
                title="Color Picker from Image"
                desc="Extract colors from any image."
                link="/tools/color-picker-from-image"
                icon={FaPalette}
              />
              <ToolCard
                title="HEX to RGB Converter"
                desc="Convert HEX colors to RGB format."
                link="/tools/hex-to-rgb"
                icon={FaPalette}
              />
              <ToolCard
                title="Color Palette Generator"
                desc="Generate stunning color palettes."
                link="/tools/color-palette-generator"
                icon={FaPalette}
              />
              <ToolCard
                title="Favicon Generator"
                desc="Create favicons for websites easily."
                link="/tools/favicon-generator"
                icon={FaFileImage}
              />

              {/* DEVELOPER TOOLS */}
              <ToolCard
                title="JSON Formatter"
                desc="Format and validate JSON data."
                link="/tools/json-formatter"
                icon={FaCode}
              />
              <ToolCard
                title="Base64 Encoder / Decoder"
                desc="Encode or decode Base64 strings."
                link="/tools/base64-tool"
                icon={FaCode}
              />
              <ToolCard
                title="HTML Minifier"
                desc="Minify HTML code for performance."
                link="/tools/html-minifier"
                icon={FaCode}
              />

              {/* BONUS HIGH-TRAFFIC TOOLS */}
              <ToolCard
                title="QR Code Generator"
                desc="Generate QR codes for links and text."
                link="/tools/qr-code-generator"
                icon={FaQrcode}
              />
              <ToolCard
                title="Password Generator"
                desc="Create strong and secure passwords."
                link="/tools/password-generator"
                icon={FaLock}
              />
              <ToolCard
                title="URL Shortener"
                desc="Shorten long URLs instantly."
                link="/tools/url-shortener"
                icon={FaLink}
              />
              <ToolCard
                title="YouTube Thumbnail Downloader"
                desc="Download thumbnails from YouTube videos."
                link="/tools/youtube-thumbnail-downloader"
                icon={FaYoutube}
              />
              <ToolCard
                title="Sitemap Generator"
                desc="Generate XML sitemap for SEO."
                link="/tools/sitemap-generator"
                icon={FaSitemap}
              />
            </div>
          </div>
        </div>
        {/* Tools Section End */}

        {/* CTA Section Start */}
        <div className="rs-cta style1 bg7 pt-80 pb-80">
          <div className="container">
            <div className="cta-wrap">
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-12 md-mb-30">
                  <span>Need Custom Tools?</span>
                  <div className="title-wrap">
                    <h2 className="epx-title">
                      We Build Custom AI & Automation Solutions
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 text-right col-md-12">
                  <div className="button-wrap">
                    <Link className="readon learn-more" to="/contact">
                      Talk to Experts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section End */}
>>>>>>> 727854f9bb6cae25d4b228f00d4edf625e1b06a0
      </div>
    </Layout>
  );
};

export default Tools;
