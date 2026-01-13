import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import {
  FaTextHeight, FaAlignLeft, FaParagraph, FaListOl,
  FaFileAlt, FaClock, FaCopy, FaTrash, FaCheck, FaHistory
} from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    words: 0,
    charsWithSpaces: 0,
    charsWithoutSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  });
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    document.title = "Online Word Counter - Count Words & Characters | NanoSoft";

    const metaTags = [
      { name: 'description', content: 'Free online word counter tool. Count words, characters, sentences, and paragraphs in real-time. Includes reading time estimate.' },
      { name: 'keywords', content: 'word counter, character counter, text tool, online counter, character count, word count tool, nanosoft' },
      { property: 'og:title', content: 'Online Word Counter - Accurate Text Analysis' },
      { property: 'og:description', content: 'Free online word counter tool. Count words, characters, sentences, and paragraphs in real-time.' },
      { property: 'og:url', content: 'https://nanosoft.com/tools/word-counter' }
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
      "name": "Word Counter Tool",
      "description": "Analyze your text length, structure, and reading time instantly. Free and accurate online word counter.",
      "url": "https://nanosoft.com/tools/word-counter",
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
    const savedHistory = localStorage.getItem('wordCounterHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Save history
  useEffect(() => {
    localStorage.setItem('wordCounterHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charsWithSpaces = text.length;
    const charsWithoutSpaces = text.replace(/\s/g, "").length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n+/).filter(Boolean).length;
    const readingTime = Math.ceil(words / 200); // 200 wpm average

    setStats({ words, charsWithSpaces, charsWithoutSpaces, sentences, paragraphs, readingTime });
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent("ToolAction", { tool: "WordCounter", action: "Copy Text" });
  };

  const handleClear = () => {
    // Add to history before clearing if there is text
    if (text.trim()) {
      const historyItem = {
        id: Date.now(),
        preview: text.substring(0, 50) + (text.length > 50 ? "..." : ""),
        fullText: text,
        words: stats.words,
        date: new Date().toLocaleTimeString()
      };
      setHistory(prev => [historyItem, ...prev].slice(0, 5));
    }
    setText("");
    trackEvent("ToolAction", { tool: "WordCounter", action: "Clear Text" });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('wordCounterHistory');
  };

  return (
    <Layout>
      <PageTitle
        title="Word Counter - Real-time Text Analysis"
        description="Analyze your text length, structure, and reading time instantly."
      />

      <div className="rs-tool-page pt-100 pb-100" style={{ backgroundColor: "#f9faff" }}>
        <div className="container">
          <div className="row">

            {/* Main Input Area */}
            <div className="col-lg-8">
              <div className="tool-box p-4" style={{ backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid #eef" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0 text-primary">Your Text</h5>
                  <div className="actions d-flex gap-2">
                    <button onClick={handleCopy} className="btn btn-sm btn-outline-primary border-0" title="Copy Text">
                      {copied ? <FaCheck /> : <FaCopy />}
                    </button>
                    <button onClick={handleClear} className="btn btn-sm btn-outline-danger border-0" title="Clear Text">
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Type or paste your text here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={{ minHeight: "450px", border: "1px solid #eee", fontSize: "16px", padding: "20px", borderRadius: "10px", resize: "vertical", boxShadow: "none" }}
                />
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="col-lg-4">
              <div className="stats-container sticky-top" style={{ top: "100px" }}>
                <div className="row g-3">
                  {[
                    { label: "Words", value: stats.words, icon: FaFileAlt, color: "#03228f" },
                    { label: "Characters", value: stats.charsWithSpaces, icon: FaTextHeight, color: "#e74c3c" },
                    { label: "Sentences", value: stats.sentences, icon: FaAlignLeft, color: "#27ae60" },
                    { label: "Paragraphs", value: stats.paragraphs, icon: FaParagraph, color: "#f39c12" },
                    { label: "Reading Time", value: `${stats.readingTime} min`, icon: FaClock, color: "#9b59b6" }
                  ].map((s, i) => (
                    <div className="col-12" key={i}>
                      <div className="p-3 bg-white rounded shadow-sm d-flex align-items-center gap-3 border-left" style={{ borderLeft: `5px solid ${s.color}` }}>
                        <div className="icon-wrap p-2 rounded" style={{ backgroundColor: `${s.color}15` }}>
                          <s.icon color={s.color} size={22} />
                        </div>
                        <div>
                          <h3 className="mb-0 h4" style={{ color: s.color }}>{s.value}</h3>
                          <p className="mb-0 small text-muted font-weight-bold">{s.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-primary text-white rounded shadow" style={{ background: "linear-gradient(45deg, #03228f, #0b3d91)" }}>
                  <h5>Advanced Stats</h5>
                  <div className="mt-3 d-flex justify-content-between">
                    <span>Chars (No Spaces)</span>
                    <strong>{stats.charsWithoutSpaces}</strong>
                  </div>
                  <div className="mt-2 d-flex justify-content-between">
                    <span>Avg Word Length</span>
                    <strong>{stats.words > 0 ? (stats.charsWithoutSpaces / stats.words).toFixed(1) : 0}</strong>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button onClick={() => setShowHistory(!showHistory)} className="btn btn-sm btn-link text-muted">
                    <FaHistory className="mr-1" /> {showHistory ? "Hide History" : "View Recent Texts"}
                  </button>
                </div>

                {showHistory && (
                  <div className="history-list mt-3 p-3 bg-white rounded border shadow-sm">
                    {history.length > 0 ? (
                      history.map(item => (
                        <div key={item.id} className="p-2 mb-2 bg-light rounded small text-left border" style={{ cursor: "pointer" }} onClick={() => setText(item.fullText)}>
                          <div className="d-flex justify-content-between mb-1">
                            <span className="font-weight-bold text-primary">{item.words} Words</span>
                            <span className="text-muted" style={{ fontSize: "10px" }}>{item.date}</span>
                          </div>
                          <p className="mb-0 text-muted text-truncate">{item.preview}</p>
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
            </div>

          </div>

          {/* SEO Content */}
          <div className="seo-section mt-100 p-4 bg-white rounded shadow-sm border">
            <h2 className="text-center mb-50">Why use a Word Counter?</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <h6>For Writers and Students</h6>
                <p className="small text-muted">A word counter is vital for staying within essay limits or keeping your novel chapters consistent. Most academic papers and articles have strict word requirements.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h6>For Content Creators (SEO)</h6>
                <p className="small text-muted">Search engines often favor long-form content. Using our tool helps you ensure your blog posts hit the 1500-2000 word sweet spot for better organic rankings.</p>
              </div>
              <div className="col-md-4 mb-4">
                <h6>For Social Media</h6>
                <p className="small text-muted">Platforms like X (Twitter) and LinkedIn have strict character limits. Use the character count feature to ensure your posts don't get cut off mid-sentence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WordCounter;
