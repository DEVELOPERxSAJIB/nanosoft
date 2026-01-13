import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaLaptopCode, FaCopy, FaTrash, FaFileDownload, FaCheckCircle,
  FaCompressAlt, FaExpandAlt, FaCog, FaExchangeAlt, FaInfoCircle
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const CodeFormatter = () => {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [codeType, setCodeType] = useState("json"); // json, html, xml
  const [indentSize, setIndentSize] = useState(2);
  const [useTabs, setUseTabs] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [isMinifying, setIsMinifying] = useState(false);
  const [processing, setProcessing] = useState(false);
  const outputRef = useRef(null);

  // Update document title and meta tags
  useEffect(() => {
    document.title = "HTML/JSON/XML Formatter - Free Online Tool | NanoSoft";

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Beautify and format your HTML, JSON, or XML code. Free, fast and secure online tool by NanoSoft.";

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "HTML formatter, JSON formatter, XML formatter, code beautifier, code formatter, code minifier, HTML beautifier, JSON beautifier, XML beautifier";

    // Create canonical link if it doesn't exist
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://nanosoft.com/tools/code-formatter';
      document.head.appendChild(canonical);
    }

    // Create Open Graph meta tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/code-formatter' },
      { property: 'og:title', content: 'HTML/JSON/XML Formatter - Free Online Tool' },
      { property: 'og:description', content: 'Beautify and format your HTML, JSON, or XML code. Free, fast and secure online tool by NanoSoft.' },
      { property: 'og:image', content: 'https://nanosoft.com/images/code-formatter-tool.png' }
    ];

    ogTags.forEach(tag => {
      if (!document.querySelector(`meta[property="${tag.property}"]`)) {
        const meta = document.createElement('meta');
        meta.property = tag.property;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Create Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://nanosoft.com/tools/code-formatter' },
      { name: 'twitter:title', content: 'HTML/JSON/XML Formatter - Free Online Tool' },
      { name: 'twitter:description', content: 'Beautify and format your HTML, JSON, or XML code. Free, fast and secure online tool by NanoSoft.' },
      { name: 'twitter:image', content: 'https://nanosoft.com/images/code-formatter-tool.png' }
    ];

    twitterTags.forEach(tag => {
      if (!document.querySelector(`meta[name="${tag.name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Create structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Code Formatter Tool",
      "description": "Beautify and format your HTML, JSON, or XML code. Free, fast and secure online tool by NanoSoft.",
      "url": "https://nanosoft.com/tools/code-formatter",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "HTML formatting",
        "JSON formatting",
        "XML formatting",
        "Code minification",
        "Custom indentation",
        "Copy to clipboard",
        "Download formatted code"
      ]
    };

    // Check if structured data script already exists
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    return () => {
      // Clean up when component unmounts
    };
  }, []);

  const formatCode = () => {
    if (!inputCode.trim()) {
      setError("Please enter some code to format");
      return;
    }

    setProcessing(true);
    setError("");

    try {
      let formatted = "";
      const indentChar = useTabs ? "\t" : " ".repeat(indentSize);

      if (codeType === "json") {
        try {
          const parsedJson = JSON.parse(inputCode);
          formatted = JSON.stringify(parsedJson, null, indentChar);
        } catch (e) {
          throw new Error("Invalid JSON: " + e.message);
        }
      } else if (codeType === "html") {
        formatted = formatHTML(inputCode, indentChar);
      } else if (codeType === "xml") {
        formatted = formatXML(inputCode, indentChar);
      }

      setOutputCode(formatted);
      trackEvent("ToolAction", {
        tool: "CodeFormatter",
        action: "Format",
        type: codeType
      });
    } catch (e) {
      setError(e.message);
    } finally {
      setProcessing(false);
    }
  };

  const minifyCode = () => {
    if (!inputCode.trim()) {
      setError("Please enter some code to minify");
      return;
    }

    setProcessing(true);
    setError("");

    try {
      let minified = "";

      if (codeType === "json") {
        try {
          const parsedJson = JSON.parse(inputCode);
          minified = JSON.stringify(parsedJson);
        } catch (e) {
          throw new Error("Invalid JSON: " + e.message);
        }
      } else if (codeType === "html") {
        minified = inputCode
          .replace(/\s+/g, " ")
          .replace(/>\s+</g, "><")
          .trim();
      } else if (codeType === "xml") {
        minified = inputCode
          .replace(/\s+/g, " ")
          .replace(/>\s+</g, "><")
          .trim();
      }

      setOutputCode(minified);
      setIsMinifying(true);
      trackEvent("ToolAction", {
        tool: "CodeFormatter",
        action: "Minify",
        type: codeType
      });
    } catch (e) {
      setError(e.message);
    } finally {
      setProcessing(false);
    }
  };

  const formatHTML = (html, indent) => {
    // Simple HTML formatter
    let result = "";
    let indentLevel = 0;
    const tags = html.match(/<\/?[^>]+>/g) || [];
    let lastIndex = 0;

    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      const tagIndex = html.indexOf(tag, lastIndex);

      // Add text before tag
      if (tagIndex > lastIndex) {
        const text = html.substring(lastIndex, tagIndex).trim();
        if (text) {
          result += indent.repeat(indentLevel) + text + "\n";
        }
      }

      // Handle tag
      if (tag.startsWith("</")) {
        // Closing tag
        indentLevel--;
        result += indent.repeat(indentLevel) + tag + "\n";
      } else if (tag.endsWith("/>") || ["br", "hr", "img", "meta", "link", "input"].some(t => tag.includes(`<${t}`))) {
        // Self-closing tag
        result += indent.repeat(indentLevel) + tag + "\n";
      } else {
        // Opening tag
        result += indent.repeat(indentLevel) + tag + "\n";
        indentLevel++;
      }

      lastIndex = tagIndex + tag.length;
    }

    // Add remaining text
    if (lastIndex < html.length) {
      const text = html.substring(lastIndex).trim();
      if (text) {
        result += indent.repeat(indentLevel) + text + "\n";
      }
    }

    return result.trim();
  };

  const formatXML = (xml, indent) => {
    // Simple XML formatter
    let result = "";
    let indentLevel = 0;
    const tags = xml.match(/<\/?[^>]+>/g) || [];
    let lastIndex = 0;

    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];
      const tagIndex = xml.indexOf(tag, lastIndex);

      // Add text before tag
      if (tagIndex > lastIndex) {
        const text = xml.substring(lastIndex, tagIndex).trim();
        if (text) {
          result += indent.repeat(indentLevel) + text + "\n";
        }
      }

      // Handle tag
      if (tag.startsWith("</")) {
        // Closing tag
        indentLevel--;
        result += indent.repeat(indentLevel) + tag + "\n";
      } else if (tag.endsWith("/>")) {
        // Self-closing tag
        result += indent.repeat(indentLevel) + tag + "\n";
      } else {
        // Opening tag
        result += indent.repeat(indentLevel) + tag + "\n";
        indentLevel++;
      }

      lastIndex = tagIndex + tag.length;
    }

    // Add remaining text
    if (lastIndex < xml.length) {
      const text = xml.substring(lastIndex).trim();
      if (text) {
        result += indent.repeat(indentLevel) + text + "\n";
      }
    }

    return result.trim();
  };

  const copyToClipboard = () => {
    if (!outputCode) return;

    navigator.clipboard.writeText(outputCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
    trackEvent("ToolAction", {
      tool: "CodeFormatter",
      action: "Copy"
    });
  };

  const downloadCode = () => {
    if (!outputCode) return;

    const element = document.createElement("a");
    const file = new Blob([outputCode], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `formatted-code.${codeType}`;
    document.body.appendChild(element);
    element.click();
    trackEvent("ToolAction", {
      tool: "CodeFormatter",
      action: "Download"
    });
  };

  const clearAll = () => {
    setInputCode("");
    setOutputCode("");
    setError("");
    setIsMinifying(false);
    trackEvent("ToolAction", {
      tool: "CodeFormatter",
      action: "Clear"
    });
  };

  const swapInputOutput = () => {
    const temp = inputCode;
    setInputCode(outputCode);
    setOutputCode(temp);
    setIsMinifying(false);
    trackEvent("ToolAction", {
      tool: "CodeFormatter",
      action: "Swap"
    });
  };

  const handleCodeTypeChange = (type) => {
    setCodeType(type);
    setError("");
    setIsMinifying(false);
  };

  return (
    <Layout>
      <PageTitle
        title="HTML/JSON/XML Formatter - Free Online Tool"
        description="Beautify and format your HTML, JSON, or XML code. Free, fast and secure online tool by NanoSoft."
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f6f7f9" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Developer Tool</span>
                  <h1 className="title pb-20" style={{ fontSize: "32px" }}>Code Formatter</h1>
                  <p className="desc w-75 mx-auto">
                    Beautify and format your HTML, JSON, or XML code with our free online formatter.
                  </p>
                </div>

                {/* Code Type Selector */}
                <div className="code-type-selector mb-4">
                  <div className="btn-group w-100" role="group">
                    <button
                      type="button"
                      className={`btn ${codeType === 'json' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleCodeTypeChange('json')}
                    >
                      JSON
                    </button>
                    <button
                      type="button"
                      className={`btn ${codeType === 'html' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleCodeTypeChange('html')}
                    >
                      HTML
                    </button>
                    <button
                      type="button"
                      className={`btn ${codeType === 'xml' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleCodeTypeChange('xml')}
                    >
                      XML
                    </button>
                  </div>
                </div>

                {/* Settings */}
                <div className="settings-bar d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary mr-2"
                      onClick={() => setShowSettings(!showSettings)}
                    >
                      <FaCog className="mr-1" /> Settings
                    </button>

                    {showSettings && (
                      <div className="settings-options d-flex align-items-center p-2 bg-light rounded">
                        <div className="form-group mr-3 mb-0">
                          <label htmlFor="indentSize" className="mr-2">Indent Size:</label>
                          <select
                            id="indentSize"
                            className="form-control form-control-sm d-inline-block w-auto"
                            value={indentSize}
                            onChange={(e) => setIndentSize(parseInt(e.target.value))}
                            disabled={useTabs}
                          >
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                          </select>
                        </div>
                        <div className="form-check mb-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="useTabs"
                            checked={useTabs}
                            onChange={(e) => setUseTabs(e.target.checked)}
                          />
                          <label className="form-check-label" htmlFor="useTabs">
                            Use Tabs
                          </label>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-muted">
                    <small>
                      <FaInfoCircle className="mr-1" />
                      {codeType.toUpperCase()} Formatter
                    </small>
                  </div>
                </div>

                {/* Input/Output Areas */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="inputCode" className="form-label font-weight-bold">
                        Input {codeType.toUpperCase()} Code
                      </label>
                      <textarea
                        id="inputCode"
                        className="form-control"
                        rows="15"
                        placeholder={`Paste your ${codeType.toUpperCase()} code here...`}
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        style={{ fontFamily: "monospace", fontSize: "14px" }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <label htmlFor="outputCode" className="form-label font-weight-bold mb-0">
                          Formatted {codeType.toUpperCase()} Code
                        </label>
                        {outputCode && (
                          <div className="d-flex">
                            <button
                              className="btn btn-sm btn-outline-secondary mr-1"
                              onClick={swapInputOutput}
                              title="Swap input/output"
                            >
                              <FaExchangeAlt />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={copyToClipboard}
                              title="Copy to clipboard"
                            >
                              {copySuccess ? <FaCheckCircle className="text-success" /> : <FaCopy />}
                            </button>
                          </div>
                        )}
                      </div>
                      <textarea
                        ref={outputRef}
                        id="outputCode"
                        className="form-control"
                        rows="15"
                        placeholder="Formatted code will appear here..."
                        value={outputCode}
                        readOnly
                        style={{ fontFamily: "monospace", fontSize: "14px" }}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="alert alert-danger mb-3">
                    {error}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="actions d-flex justify-content-center gap-3 flex-wrap">
                  <button
                    onClick={formatCode}
                    className="readon learn-more"
                    disabled={processing}
                  >
                    <FaExpandAlt className="mr-2" /> Format
                  </button>
                  <button
                    onClick={minifyCode}
                    className="readon learn-more"
                    style={{ background: "#6c757d" }}
                    disabled={processing}
                  >
                    <FaCompressAlt className="mr-2" /> Minify
                  </button>
                  <button
                    onClick={downloadCode}
                    className="readon learn-more"
                    style={{ background: "#17a2b8" }}
                    disabled={!outputCode}
                  >
                    <FaFileDownload className="mr-2" /> Download
                  </button>
                  <button
                    onClick={clearAll}
                    className="readon learn-more"
                    style={{ background: "#dc3545" }}
                  >
                    <FaTrash className="mr-2" /> Clear
                  </button>
                </div>

                {/* Processing Indicator */}
                {processing && (
                  <div className="text-center mt-3">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Processing...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* SEO Content */}
              <div className="seo-content text-left pl-20 pr-20">
                <div className="row">
                  <div className="col-lg-12 mb-40">
                    <h2 className="title mb-20" style={{ fontSize: "28px" }}>Why Use Our Code Formatter Tool?</h2>
                    <p className="desc mb-15">
                      Our Code Formatter tool helps developers and content creators to beautify and format their code, making it more readable and maintainable. Whether you're working with JSON data, HTML markup, or XML documents, our tool can quickly transform your code into a properly indented and structured format.
                    </p>
                    <p className="desc mb-15">
                      Clean, well-formatted code is easier to debug, review, and collaborate on. It helps identify syntax errors quickly and improves overall code quality. Our formatter supports customization options like indentation size and tab usage to match your coding standards.
                    </p>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <h4 className="title mb-10">Key Features</h4>
                    <ul className="check-list">
                      <li className="mb-2"><strong>Format Multiple Languages:</strong> Support for JSON, HTML, and XML formatting.</li>
                      <li className="mb-2"><strong>Custom Indentation:</strong> Choose between spaces or tabs with customizable size.</li>
                      <li className="mb-2"><strong>Minify Option:</strong> Compress your code to reduce file size.</li>
                      <li className="mb-2"><strong>Copy & Download:</strong> Easily copy formatted code or download as a file.</li>
                      <li className="mb-2"><strong>Error Detection:</strong> Identifies syntax errors in your code.</li>
                      <li className="mb-2"><strong>100% Secure:</strong> All processing happens in your browser, no data sent to servers.</li>
                    </ul>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <h4 className="title mb-10">Benefits</h4>
                    <ul className="check-list">
                      <li className="mb-2">Improve code readability and maintainability</li>
                      <li className="mb-2">Standardize code formatting across your team</li>
                      <li className="mb-2">Quickly identify and fix syntax errors</li>
                      <li className="mb-2">Reduce file size with minification for faster loading</li>
                      <li className="mb-2">No software installation required</li>
                      <li className="mb-2">Works on all devices - desktop, tablet, and mobile</li>
                    </ul>
                  </div>

                  <div className="col-lg-12 mt-30">
                    <h3 className="title mb-20" style={{ fontSize: "24px" }}>Frequently Asked Questions</h3>

                    <div className="d-flex flex-column gap-4">
                      <div>
                        <h5 className="mb-2">Is my code secure when using this formatter?</h5>
                        <p className="text-muted">Yes, absolutely. All code processing happens entirely within your web browser using JavaScript. We do not see, store, or transmit your code to any server.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">Can I format large files with this tool?</h5>
                        <p className="text-muted">The tool can handle moderately large files, but extremely large files (several megabytes) might slow down your browser due to the processing requirements.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">Does this tool validate my code?</h5>
                        <p className="text-muted">Yes, the formatter will detect and report syntax errors in JSON, HTML, and XML. It won't fix the errors but will highlight them so you can make corrections.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">Can I customize the formatting style?</h5>
                        <p className="text-muted">Yes, you can customize the indentation size (2, 4, or 8 spaces) and choose between using spaces or tabs for indentation.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">Is this tool free to use?</h5>
                        <p className="text-muted">Yes, our Code Formatter is completely free to use with no registration required. You can format as much code as you need without any limitations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-30">
                    <h3 className="title mb-20" style={{ fontSize: "24px" }}>Use Cases for Our Code Formatter</h3>

                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Web Developers</h5>
                        <p className="text-muted">Format HTML templates and JSON API responses to improve readability and debugging efficiency.</p>
                      </div>
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Backend Developers</h5>
                        <p className="text-muted">Format configuration files, API documentation, and data exchange formats for better maintainability.</p>
                      </div>
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Content Creators</h5>
                        <p className="text-muted">Format XML sitemaps, RSS feeds, and structured data to ensure proper syntax and structure.</p>
                      </div>
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Students & Learners</h5>
                        <p className="text-muted">Understand code structure better by viewing properly formatted examples and assignments.</p>
                      </div>
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

export default CodeFormatter;