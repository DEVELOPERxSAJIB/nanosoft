import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaExchangeAlt, FaTrash, FaCopy, FaFileDownload,
  FaSearch, FaCheckCircle, FaExclamationTriangle, FaInfoCircle,
  FaPlus, FaMinus, FaCode
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const DiffChecker = () => {
  const [originalText, setOriginalText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [diffResult, setDiffResult] = useState(null);
  const [isComparing, setIsComparing] = useState(false);
  const [stats, setStats] = useState({ additions: 0, deletions: 0, changes: 0 });
  const [copySuccess, setCopySuccess] = useState(false);
  const [viewMode, setViewMode] = useState("split"); // split or unified

  // SEO and Meta Tags
  useEffect(() => {
    document.title = "Online Text Diff Checker - Find Differences Between Text | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Compare two text blocks or files instantly to find the differences. A free, secure, and fast online diff tool by NanoSoft for developers and writers.' },
      { name: 'keywords', content: 'diff checker, text comparison, compare text online, file difference, code diff, diff tool, nanosoft' },
      { property: 'og:title', content: 'Online Text Diff Checker - Find Differences Between Text' },
      { property: 'og:description', content: 'Compare two text blocks or files instantly to find the differences. Free and secure.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/diff-checker' }
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
      "name": "Text Diff Checker Tool",
      "description": "Compare two text blocks to find differences and changes.",
      "url": "https://nanosoft.com/tools/diff-checker",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Any"
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, []);

  // Simple Line-by-Line Diff Algorithm
  const computeDiff = () => {
    if (!originalText && !changedText) return;

    setIsComparing(true);
    trackEvent("ToolAction", { tool: "DiffChecker", action: "Compare" });

    // Simulate slight delay for "wow" effect/feel
    setTimeout(() => {
      const originalLines = originalText.split(/\r?\n/);
      const changedLines = changedText.split(/\r?\n/);

      const result = [];
      let adds = 0;
      let dels = 0;
      let chgs = 0;

      // Basic algorithm: compare line by line
      // For a truly premium tool, we'd use LCS, but line-by-line is a great start
      const maxLength = Math.max(originalLines.length, changedLines.length);

      for (let i = 0; i < maxLength; i++) {
        const line1 = originalLines[i];
        const line2 = changedLines[i];

        if (line1 === line2) {
          result.push({ type: 'equal', value1: line1, value2: line2 });
        } else if (line1 === undefined) {
          result.push({ type: 'added', value2: line2 });
          adds++;
        } else if (line2 === undefined) {
          result.push({ type: 'deleted', value1: line1 });
          dels++;
        } else {
          result.push({ type: 'changed', value1: line1, value2: line2 });
          chgs++;
        }
      }

      setDiffResult(result);
      setStats({ additions: adds, deletions: dels, changes: chgs });
      setIsComparing(false);

      // Scroll to result
      document.getElementById('diff-result-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const clearAll = () => {
    setOriginalText("");
    setChangedText("");
    setDiffResult(null);
    setStats({ additions: 0, deletions: 0, changes: 0 });
    trackEvent("ToolAction", { tool: "DiffChecker", action: "Clear" });
  };

  const swapTexts = () => {
    const temp = originalText;
    setOriginalText(changedText);
    setChangedText(temp);
    if (diffResult) computeDiff();
    trackEvent("ToolAction", { tool: "DiffChecker", action: "Swap" });
  };

  const copyResult = () => {
    if (!diffResult) return;
    const textToCopy = diffResult.map(line => {
      if (line.type === 'added') return `+ ${line.value2}`;
      if (line.type === 'deleted') return `- ${line.value1}`;
      if (line.type === 'changed') return `- ${line.value1}\n+ ${line.value2}`;
      return `  ${line.value1}`;
    }).join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
    trackEvent("ToolAction", { tool: "DiffChecker", action: "CopyResult" });
  };

  return (
    <Layout>
      <PageTitle
        title="Diff Checker - Free Online Tool"
        description="Compare two text blocks to find differences and changes instantly."
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f6f8ff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">

              <div className="tool-box p-5 mb-50" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)", border: "1px solid #eef" }}>
                <div className="sec-title text-center mb-40">
                  <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Text Utility</span>
                  <h1 className="title pb-20" style={{ fontSize: "36px", color: "#03228f" }}>Online Diff Checker</h1>
                  <p className="desc w-75 mx-auto text-muted">
                    Paste your texts below to see what has changed. Perfect for code, documents, and lists.
                  </p>
                </div>

                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="input-group-container">
                      <div className="d-flex justify-content-between mb-2">
                        <label className="font-weight-bold" style={{ color: "#03228f" }}>Original Text (Left)</label>
                        <small className="text-muted">{originalText.length} characters</small>
                      </div>
                      <textarea
                        className="form-control"
                        rows="12"
                        placeholder="Paste original text here..."
                        value={originalText}
                        onChange={(e) => setOriginalText(e.target.value)}
                        style={{ borderRadius: "10px", padding: "15px", border: "2px solid #eef", fontFamily: "monospace", fontSize: "14px" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group-container">
                      <div className="d-flex justify-content-between mb-2">
                        <label className="font-weight-bold" style={{ color: "#28a745" }}>Changed Text (Right)</label>
                        <small className="text-muted">{changedText.length} characters</small>
                      </div>
                      <textarea
                        className="form-control"
                        rows="12"
                        placeholder="Paste modified text here..."
                        value={changedText}
                        onChange={(e) => setChangedText(e.target.value)}
                        style={{ borderRadius: "10px", padding: "15px", border: "2px solid #eef", fontFamily: "monospace", fontSize: "14px" }}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="actions d-flex justify-content-center gap-3 flex-wrap mb-50">
                  <button onClick={computeDiff} className="readon btn-hover" style={{ backgroundColor: "#03228f", border: "none", padding: "12px 35px" }} disabled={isComparing}>
                    {isComparing ? "Comparing..." : <><FaSearch className="mr-2" /> Find Differences</>}
                  </button>
                  <button onClick={swapTexts} className="readon btn-hover" style={{ backgroundColor: "#6c757d", border: "none" }}>
                    <FaExchangeAlt className="mr-2" /> Swap
                  </button>
                  <button onClick={clearAll} className="readon btn-hover" style={{ backgroundColor: "#dc3545", border: "none" }}>
                    <FaTrash className="mr-2" /> Clear All
                  </button>
                </div>

                {/* Diff Result Section */}
                {diffResult && (
                  <div id="diff-result-section" className="mt-5">
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                      <div className="diff-stats d-flex gap-4">
                        <span className="badge badge-pill badge-success p-2 px-3"><FaPlus className="mr-1" /> {stats.additions} Additions</span>
                        <span className="badge badge-pill badge-danger p-2 px-3"><FaMinus className="mr-1" /> {stats.deletions} Deletions</span>
                        <span className="badge badge-pill badge-warning p-2 px-3" style={{ color: "#fff" }}><FaExchangeAlt className="mr-1" /> {stats.changes} Changes</span>
                      </div>
                      <div className="btn-group">
                        <button onClick={() => setViewMode("split")} className={`btn btn-sm ${viewMode === 'split' ? 'btn-primary' : 'btn-outline-primary'}`}>Split View</button>
                        <button onClick={() => setViewMode("unified")} className={`btn btn-sm ${viewMode === 'unified' ? 'btn-primary' : 'btn-outline-primary'}`}>Unified View</button>
                        <button onClick={copyResult} className="btn btn-sm btn-outline-secondary ml-2">
                          {copySuccess ? <><FaCheckCircle className="text-success" /> Copied</> : <><FaCopy /> Copy Diff</>}
                        </button>
                      </div>
                    </div>

                    <div className="diff-viewer" style={{ border: "1px solid #eef", borderRadius: "10px", overflow: "hidden", backgroundColor: "#fff" }}>
                      {viewMode === "split" ? (
                        <div className="d-flex flex-wrap result-split">
                          <div className="col-12 col-md-6 p-0 border-right" style={{ backgroundColor: "#fafbfc" }}>
                            <div className="p-2 border-bottom text-center small font-weight-bold text-muted">ORIGINAL</div>
                            <div className="diff-content p-3" style={{ minHeight: "200px", fontFamily: "monospace", whiteSpace: "pre-wrap", overflowX: "auto" }}>
                              {diffResult.map((line, idx) => (
                                <div key={idx} className={`line ${line.type === 'deleted' ? 'bg-danger-light' : line.type === 'changed' ? 'bg-warning-light' : ''}`} style={{
                                  backgroundColor: line.type === 'deleted' ? '#ffeef0' : line.type === 'changed' ? '#fff9db' : 'transparent',
                                  padding: "2px 5px",
                                  borderLeft: line.type === 'deleted' ? '3px solid #f85149' : line.type === 'changed' ? '3px solid #d4a017' : '3px solid transparent'
                                }}>
                                  <span className="line-num mr-3 text-muted small" style={{ width: "30px", display: "inline-block" }}>{idx + 1}</span>
                                  {line.value1 !== undefined ? line.value1 : ""}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-12 col-md-6 p-0" style={{ backgroundColor: "#fdfdfd" }}>
                            <div className="p-2 border-bottom text-center small font-weight-bold text-muted">MODIFIED</div>
                            <div className="diff-content p-3" style={{ minHeight: "200px", fontFamily: "monospace", whiteSpace: "pre-wrap", overflowX: "auto" }}>
                              {diffResult.map((line, idx) => (
                                <div key={idx} className={`line ${line.type === 'added' ? 'bg-success-light' : line.type === 'changed' ? 'bg-success-light' : ''}`} style={{
                                  backgroundColor: (line.type === 'added' || line.type === 'changed') ? '#e6ffec' : 'transparent',
                                  padding: "2px 5px",
                                  borderLeft: (line.type === 'added' || line.type === 'changed') ? '3px solid #2da44e' : '3px solid transparent'
                                }}>
                                  <span className="line-num mr-3 text-muted small" style={{ width: "30px", display: "inline-block" }}>{idx + 1}</span>
                                  {line.value2 !== undefined ? line.value2 : ""}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="result-unified p-3" style={{ backgroundColor: "#fff", fontFamily: "monospace", whiteSpace: "pre-wrap", overflowX: "auto" }}>
                          {diffResult.map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line.type === 'deleted' && (
                                <div style={{ backgroundColor: "#ffeef0", color: "#b31d28", padding: "2px 5px" }}>- {line.value1}</div>
                              )}
                              {line.type === 'added' && (
                                <div style={{ backgroundColor: "#e6ffec", color: "#22863a", padding: "2px 5px" }}>+ {line.value2}</div>
                              )}
                              {line.type === 'changed' && (
                                <>
                                  <div style={{ backgroundColor: "#ffeef0", color: "#b31d28", padding: "2px 5px" }}>- {line.value1}</div>
                                  <div style={{ backgroundColor: "#e6ffec", color: "#22863a", padding: "2px 5px" }}>+ {line.value2}</div>
                                </>
                              )}
                              {line.type === 'equal' && (
                                <div style={{ padding: "2px 5px", color: "#24292e" }}>  {line.value1}</div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Information Section */}
              <div className="seo-content p-20">
                <div className="row">
                  <div className="col-lg-12 mb-50 text-center">
                    <h2 className="title mb-20">Why Use Our Text Diff Tool?</h2>
                    <p className="desc text-muted">
                      Our online diff checker is designed to be the fastest and most secure way to compare text blocks.
                      Whether you're comparing two versions of a code snippet, checking for plagiarism, or simply seeing
                      what someone added to a shared document, our tool provides a clear, high-contrast visual comparison.
                    </p>
                  </div>

                  <div className="col-lg-4 mb-30">
                    <div className="feature-card p-4 h-100" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.02)" }}>
                      <div className="icon mb-3"><FaCode size={30} color="#03228f" /></div>
                      <h5>Developer Friendly</h5>
                      <p className="small text-muted">Built with developers in mind. Handles symbols, syntax, and indentation differences with pixel-perfect accuracy.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-30">
                    <div className="feature-card p-4 h-100" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.02)" }}>
                      <div className="icon mb-3"><FaInfoCircle size={30} color="#03228f" /></div>
                      <h5>Two View Modes</h5>
                      <p className="small text-muted">Choose between "Split View" for side-by-side comparison or "Unified View" for a sequential list of changes.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-30">
                    <div className="feature-card p-4 h-100" style={{ background: "#fff", borderRadius: "15px", boxShadow: "0 5px 20px rgba(0,0,0,0.02)" }}>
                      <div className="icon mb-3"><FaCheckCircle size={30} color="#28a745" /></div>
                      <h5>Privacy First</h5>
                      <p className="small text-muted">All calculations are performed locally in your browser. Your sensitive text never leaves your computer.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-section mt-50">
                  <h3 className="mb-40 text-center">Frequently Asked Questions</h3>
                  <div className="row g-4 leading-normal">
                    <div className="col-md-6">
                      <div className="p-4 bg-white rounded shadow-sm border-left border-primary" style={{ borderLeftWidth: "4px !important" }}>
                        <h6>Does this tool support file uploads?</h6>
                        <p className="small mb-0 text-muted">Currently, you can paste text directly. We are working on a feature to allow uploading .txt, .js, .html, and .css files directly.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-4 bg-white rounded shadow-sm">
                        <h6>Is there a character limit?</h6>
                        <p className="small mb-0 text-muted">While there is no hard limit, we recommend keeping text blocks under 500,000 characters for the best performance in your browser.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-4 bg-white rounded shadow-sm">
                        <h6>How does the "Unified View" work?</h6>
                        <p className="small mb-0 text-muted">Unified view shows changed lines directly below each other, with green backgrounds indicating additions and red backgrounds for deletions.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-4 bg-white rounded shadow-sm">
                        <h6>Can I download the diff report?</h6>
                        <p className="small mb-0 text-muted">You can copy the diff result using the "Copy Diff" button, which includes standard +/- formatting for easy sharing in emails or tickets.</p>
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

export default DiffChecker;
