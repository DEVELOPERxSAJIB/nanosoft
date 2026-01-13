import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaCopy, FaTrash, FaFileDownload, FaFont, FaCheckCircle,
  FaAlignLeft, FaTextHeight, FaTextWidth, FaHistory, FaShareAlt
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const CaseConverter = () => {
  const [text, setText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedCase, setSelectedCase] = useState("sentence");
  const textareaRef = useRef(null);

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('caseConverterHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('caseConverterHistory', JSON.stringify(history));
    }
  }, [history]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const saveToHistory = (originalText, convertedText, conversionType) => {
    const newEntry = {
      id: Date.now(),
      original: originalText,
      converted: convertedText,
      type: conversionType,
      timestamp: new Date().toLocaleString()
    };

    setHistory(prevHistory => [newEntry, ...prevHistory.slice(0, 9)]); // Keep only last 10 entries
  };

  const toUpperCase = () => {
    const originalText = text;
    const convertedText = text.toUpperCase();
    setText(convertedText);
    track("UpperCase");
    saveToHistory(originalText, convertedText, "UPPER CASE");
  };

  const toLowerCase = () => {
    const originalText = text;
    const convertedText = text.toLowerCase();
    setText(convertedText);
    track("LowerCase");
    saveToHistory(originalText, convertedText, "lower case");
  };

  const toSentenceCase = () => {
    const originalText = text;
    const res = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
    setText(res);
    track("SentenceCase");
    saveToHistory(originalText, res, "Sentence case");
  };

  const toCapitalizedCase = () => {
    const originalText = text;
    const res = text.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText(res);
    track("CapitalizedCase");
    saveToHistory(originalText, res, "Capitalized Case");
  };

  const toAlternatingCase = () => {
    const originalText = text;
    let res = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) res += text[i].toLowerCase();
      else res += text[i].toUpperCase();
    }
    setText(res);
    track("AlternatingCase");
    saveToHistory(originalText, res, "aLtErNaTiNg cAsE");
  };

  const toInverseCase = () => {
    const originalText = text;
    let res = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) res += text[i].toLowerCase();
      else res += text[i].toUpperCase();
    }
    setText(res);
    track("InverseCase");
    saveToHistory(originalText, res, "InVeRsE CaSe");
  };

  const toTitleCase = () => {
    const originalText = text;
    const res = text.toLowerCase().replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
    setText(res);
    track("TitleCase");
    saveToHistory(originalText, res, "Title Case");
  };

  const toCamelCase = () => {
    const originalText = text;
    const res = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    setText(res);
    track("CamelCase");
    saveToHistory(originalText, res, "camelCase");
  };

  const toPascalCase = () => {
    const originalText = text;
    const res = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
      return word.toUpperCase();
    }).replace(/\s+/g, '');
    setText(res);
    track("PascalCase");
    saveToHistory(originalText, res, "PascalCase");
  };

  const toSnakeCase = () => {
    const originalText = text;
    const res = text.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
    setText(res);
    track("SnakeCase");
    saveToHistory(originalText, res, "snake_case");
  };

  const toKebabCase = () => {
    const originalText = text;
    const res = text.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('-');
    setText(res);
    track("KebabCase");
    saveToHistory(originalText, res, "kebab-case");
  };

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
    track("Copy");
  };

  const clearText = () => {
    setText("");
    track("Clear");
  };

  const downloadText = () => {
    if (!text) return;
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "nanosoft-converted-text.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    track("Download");
  };

  const shareText = async () => {
    if (!text) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Converted Text',
          text: text,
        });
        track("Share");
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback - copy to clipboard
      copyToClipboard();
    }
  };

  const loadFromHistory = (item) => {
    setText(item.converted);
    setShowHistory(false);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('caseConverterHistory');
  };

  const track = (action) => {
    trackEvent("ToolAction", {
      tool: "CaseConverter",
      action: action
    });
  };

  // Stats calculation
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, '').length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const lineCount = text.split(/\r\n|\r|\n/).length;
  const paragraphCount = text.split(/\n\n+/).filter(Boolean).length;

  // Update document title and meta tags
  useEffect(() => {
    document.title = "Free Online Case Converter Tool - Upper, Lower & Title Case | NanoSoft";

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Easily convert text between upper case, lower case, sentence case, and capitalized case. Features word count, character count, and text formatting.";

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "case converter, text case converter, uppercase, lowercase, sentence case, title case, camel case, snake case, text formatter, text tool";

    // Create canonical link if it doesn't exist
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = 'https://nanosoft.com/tools/case-converter';
      document.head.appendChild(canonical);
    }

    // Create Open Graph meta tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/case-converter' },
      { property: 'og:title', content: 'Free Online Case Converter Tool - Upper, Lower & Title Case' },
      { property: 'og:description', content: 'Easily convert text between upper case, lower case, sentence case, and capitalized case. Features word count, character count, and text formatting.' },
      { property: 'og:image', content: 'https://nanosoft.com/images/case-converter-tool.png' }
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
      { name: 'twitter:url', content: 'https://nanosoft.com/tools/case-converter' },
      { name: 'twitter:title', content: 'Free Online Case Converter Tool - Upper, Lower & Title Case' },
      { name: 'twitter:description', content: 'Easily convert text between upper case, lower case, sentence case, and capitalized case. Features word count, character count, and text formatting.' },
      { name: 'twitter:image', content: 'https://nanosoft.com/images/case-converter-tool.png' }
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
      "name": "Case Converter Tool",
      "description": "Easily convert text between upper case, lower case, sentence case, and capitalized case. Features word count, character count, and text formatting.",
      "url": "https://nanosoft.com/tools/case-converter",
      "applicationCategory": "Utilities",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Upper case conversion",
        "Lower case conversion",
        "Sentence case conversion",
        "Capitalized case conversion",
        "Alternating case conversion",
        "Inverse case conversion",
        "Title case conversion",
        "Camel case conversion",
        "Pascal case conversion",
        "Snake case conversion",
        "Kebab case conversion",
        "Text statistics",
        "Copy to clipboard",
        "Download text file",
        "Conversion history"
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
      // This is optional and might not be necessary in all cases
    };
  }, []);

  return (
    <Layout>
      <PageTitle
        title="Free Online Case Converter Tool - Upper, Lower & Title Case"
        description="Easily convert text between upper case, lower case, sentence case, and capitalized case. Features word count, character count, and text formatting."
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f6f7f9" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Text Utility</span>
                  <h1 className="title pb-20" style={{ fontSize: "32px" }}>Case Converter</h1>
                  <p className="desc w-75 mx-auto">
                    Paste your text below and choose the case format you want to convert it to.
                  </p>
                </div>

                {/* Case Type Selector */}
                <div className="case-selector mb-4">
                  <div className="btn-group w-100" role="group">
                    <button
                      type="button"
                      className={`btn ${selectedCase === 'basic' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setSelectedCase('basic')}
                    >
                      Basic Cases
                    </button>
                    <button
                      type="button"
                      className={`btn ${selectedCase === 'programming' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setSelectedCase('programming')}
                    >
                      Programming Cases
                    </button>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="case-toolbar d-flex flex-wrap justify-content-center gap-2 mb-3">
                  {selectedCase === 'basic' ? (
                    <>
                      <button onClick={toSentenceCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>Sentence case</button>
                      <button onClick={toLowerCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "lowercase" }}>lower case</button>
                      <button onClick={toUpperCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "uppercase" }}>UPPER CASE</button>
                      <button onClick={toCapitalizedCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "capitalize" }}>Capitalized Case</button>
                      <button onClick={toTitleCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>Title Case</button>
                      <button onClick={toAlternatingCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>aLtErNaTiNg cAsE</button>
                      <button onClick={toInverseCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>InVeRsE CaSe</button>
                    </>
                  ) : (
                    <>
                      <button onClick={toCamelCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>camelCase</button>
                      <button onClick={toPascalCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>PascalCase</button>
                      <button onClick={toSnakeCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>snake_case</button>
                      <button onClick={toKebabCase} className="readon" style={{ padding: "10px 20px", fontSize: "14px", textTransform: "none" }}>kebab-case</button>
                    </>
                  )}
                </div>

                {/* Text Area */}
                <div className="input-group mb-3">
                  <textarea
                    ref={textareaRef}
                    className="form-control"
                    rows="12"
                    placeholder="Type or paste your content here..."
                    value={text}
                    onChange={handleTextChange}
                    style={{ borderRadius: "10px", padding: "20px", border: "2px solid #eef", fontSize: "16px", lineHeight: "1.6" }}
                  ></textarea>
                </div>

                {/* Stats Bar */}
                <div className="stats-bar d-flex flex-wrap justify-content-between align-items-center mb-30 p-3" style={{ background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e9ecef" }}>
                  <div className="stats d-flex gap-4 flex-wrap">
                    <span><FaFont className="mr-2 text-primary" /><b>{wordCount}</b> Words</span>
                    <span><FaTextHeight className="mr-2 text-primary" /><b>{charCount}</b> Characters</span>
                    <span><FaTextHeight className="mr-2 text-primary" /><b>{charCountNoSpaces}</b> No Spaces</span>
                    <span><FaAlignLeft className="mr-2 text-primary" /><b>{sentenceCount}</b> Sentences</span>
                    <span><FaTextWidth className="mr-2 text-primary" /><b>{lineCount}</b> Lines</span>
                    <span><FaTextWidth className="mr-2 text-primary" /><b>{paragraphCount}</b> Paragraphs</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="actions d-flex justify-content-center gap-3 flex-wrap">
                  <button onClick={copyToClipboard} className={`readon learn-more ${copySuccess ? 'bg-success border-success' : ''}`} style={{ minWidth: "160px" }}>
                    {copySuccess ? <><FaCheckCircle className="mr-2" /> Copied!</> : <><FaCopy className="mr-2" /> Copy to Clipboard</>}
                  </button>
                  <button onClick={downloadText} className="readon learn-more" style={{ background: "#17a2b8" }}>
                    <FaFileDownload className="mr-2" /> Download Text
                  </button>
                  <button onClick={shareText} className="readon learn-more" style={{ background: "#6c757d" }}>
                    <FaShareAlt className="mr-2" /> Share
                  </button>
                  <button onClick={() => setShowHistory(!showHistory)} className="readon learn-more" style={{ background: "#6f42c1" }}>
                    <FaHistory className="mr-2" /> History
                  </button>
                  <button onClick={clearText} className="readon learn-more" style={{ background: "#dc3545" }}>
                    <FaTrash className="mr-2" /> Clear
                  </button>
                </div>

                {/* History Panel */}
                {showHistory && (
                  <div className="history-panel mt-4 p-3" style={{ background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e9ecef" }}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">Conversion History</h5>
                      <button onClick={clearHistory} className="btn btn-sm btn-outline-danger">Clear All</button>
                    </div>
                    {history.length === 0 ? (
                      <p className="text-muted">No conversion history yet.</p>
                    ) : (
                      <div className="history-list">
                        {history.map(item => (
                          <div key={item.id} className="history-item mb-2 p-2 border-bottom" style={{ cursor: "pointer" }} onClick={() => loadFromHistory(item)}>
                            <div className="d-flex justify-content-between">
                              <span className="badge bg-primary">{item.type}</span>
                              <small className="text-muted">{item.timestamp}</small>
                            </div>
                            <div className="mt-1">
                              <small className="text-muted d-block">Original: {item.original.substring(0, 50)}{item.original.length > 50 ? '...' : ''}</small>
                              <small className="text-success d-block">Converted: {item.converted.substring(0, 50)}{item.converted.length > 50 ? '...' : ''}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* SEO Content */}
              <div className="seo-content text-left pl-20 pr-20">
                <div className="row">
                  <div className="col-lg-12 mb-40">
                    <h2 className="title mb-20" style={{ fontSize: "28px" }}>Why Use Our Case Converter Tool?</h2>
                    <p className="desc mb-15">
                      If you have ever typed out a document only to realize you left caps lock on, or you need to standardize capitalization across a list of titles, our Case Converter tool is the perfect solution. It instantly converts your text into the correct case format.
                    </p>
                    <p className="desc mb-15">
                      Our tool goes beyond basic case conversion with advanced programming case formats like camelCase, PascalCase, snake_case, and kebab-case. Whether you're a writer, programmer, or just someone who needs to format text quickly, our tool has you covered.
                    </p>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <h4 className="title mb-10">Available Formats</h4>
                    <ul className="check-list">
                      <li className="mb-2"><strong>Sentence case:</strong> Only the first letter of each sentence is capitalized.</li>
                      <li className="mb-2"><strong>lower case:</strong> Converts all characters to lowercase letters.</li>
                      <li className="mb-2"><strong>UPPER CASE:</strong> Converts all characters to uppercase letters.</li>
                      <li className="mb-2"><strong>Capitalized Case:</strong> The first letter of every word is capitalized.</li>
                      <li className="mb-2"><strong>Title Case:</strong> Capitalizes the first letter of each word, similar to book titles.</li>
                      <li className="mb-2"><strong>aLtErNaTiNg cAsE:</strong> Alternates between lower and uppercase.</li>
                      <li className="mb-2"><strong>camelCase:</strong> First word lowercase, subsequent words capitalized, no spaces.</li>
                      <li className="mb-2"><strong>PascalCase:</strong> All words capitalized, no spaces.</li>
                      <li className="mb-2"><strong>snake_case:</strong> All words lowercase, separated by underscores.</li>
                      <li className="mb-2"><strong>kebab-case:</strong> All words lowercase, separated by hyphens.</li>
                    </ul>
                  </div>

                  <div className="col-lg-6 mb-30">
                    <h4 className="title mb-10">Features</h4>
                    <ul className="check-list">
                      <li className="mb-2">Instant conversion with zero latency.</li>
                      <li className="mb-2">Real-time stats: Count words, characters, sentences, lines, and paragraphs.</li>
                      <li className="mb-2">One-click Copy, Download, and Share functionality.</li>
                      <li className="mb-2">Conversion history to track your changes.</li>
                      <li className="mb-2">100% Secure: Your text is processed in your browser.</li>
                      <li className="mb-2">Completely Free to use with no registration required.</li>
                      <li className="mb-2">Works on all devices - desktop, tablet, and mobile.</li>
                    </ul>
                  </div>

                  <div className="col-lg-12 mt-30">
                    <h3 className="title mb-20" style={{ fontSize: "24px" }}>Frequently Asked Questions</h3>

                    <div className="d-flex flex-column gap-4">
                      <div>
                        <h5 className="mb-2">Is the text stored on your server?</h5>
                        <p className="text-muted">No, the conversion happens entirely within your web browser using JavaScript. We do not see, store, or transmit your text.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">Is there a limit to how much text I can convert?</h5>
                        <p className="text-muted">There is no strict limit, but very large text files (hundreds of megabytes) might slow down your browser slightly.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">Does it count spaces as characters?</h5>
                        <p className="text-muted">Yes, the Character Count includes spaces. We also provide a separate count for characters without spaces.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">Can I use this tool for programming code?</h5>
                        <p className="text-muted">Absolutely! Our tool includes programming-specific case formats like camelCase, PascalCase, snake_case, and kebab-case that are commonly used in various programming languages.</p>
                      </div>
                      <div>
                        <h5 className="mb-2">How does the conversion history work?</h5>
                        <p className="text-muted">The tool saves your last 10 conversions in your browser's local storage. You can access this history to review previous conversions or revert to them. This data is stored locally and never sent to our servers.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-30">
                    <h3 className="title mb-20" style={{ fontSize: "24px" }}>Use Cases for Our Case Converter</h3>

                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Writers and Editors</h5>
                        <p className="text-muted">Standardize titles, headings, and text formatting across documents. Quickly fix capitalization errors without retyping.</p>
                      </div>
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Programmers</h5>
                        <p className="text-muted">Convert variable names between different naming conventions (camelCase, snake_case, etc.) to match coding standards.</p>
                      </div>
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Marketers</h5>
                        <p className="text-muted">Format ad copy, social media posts, and email subject lines for maximum impact with proper capitalization.</p>
                      </div>
                      <div className="col-md-6 mb-20">
                        <h5 className="mb-2">For Students</h5>
                        <p className="text-muted">Ensure proper formatting for essays, research papers, and assignments with consistent capitalization.</p>
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

export default CaseConverter;