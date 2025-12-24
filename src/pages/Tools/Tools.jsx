import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
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

const Tools = () => {
  return (
    <Layout>
      <PageTitle
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
      </div>
    </Layout>
  );
};

export default Tools;
