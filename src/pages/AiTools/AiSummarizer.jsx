import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaCompressAlt, FaMagic, FaCopy, FaTrash, FaCheckCircle, FaUndo } from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const AiSummarizer = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSummarize = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsSummarizing(true);
    setSummary("");

    trackEvent("ToolAction", {
      tool: "AiSummarizer",
      action: "SummarizeStarted",
      length: inputText.length
    });

    // Real AI Summarization using Pollinations AI
    const apiCall = async () => {
      try {
        const prompt = `Summarize the following text in a concise manner, highlighting the key points and main message: ${inputText}`;
        const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&cache=true`);

        if (!response.ok) throw new Error("API error");

        const text = await response.text();
        setSummary(text);
        trackEvent("ToolAction", { tool: "AiSummarizer", action: "SummarizeSuccess" });
      } catch (err) {
        console.error("Summarization failed:", err);
        setSummary("An error occurred while summarizing. Please try again with shorter text.");
      } finally {
        setIsSummarizing(false);
      }
    };

    apiCall();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent("ToolAction", { tool: "AiSummarizer", action: "Copy" });
  };

  const handleReset = () => {
    setInputText("");
    setSummary("");
  };

  return (
    <Layout>
      <PageTitle
        title="AI Content Summarizer - Condense Long Text Instantly"
        description="Easily condense long articles, papers, and documents into quick, readable summaries with our free AI Summarizer. Save time reading with Nanosoft AI."
        keywords="ai summarizer, free text summarizer, condense text online, ai article summarizer, summarize documents"
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f6f9fc" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Header */}
              <div className="sec-title text-center mb-50">
                <span className="sub-text" style={{ color: "#fd7e14", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Knowledge Assistant</span>
                <h1 className="title pb-20" style={{ fontSize: "36px" }}>AI Text Summarizer</h1>
                <p className="desc w-75 mx-auto">
                  Don't have time to read everything? Paste your text below and get the key points in seconds. Intelligent summarization at your fingertips.
                </p>
              </div>

              {/* Tool Area */}
              <div className="tool-box p-5 mb-60" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 15px 45px rgba(253, 126, 20, 0.1)", border: "1px solid #fff5e6" }}>
                <form onSubmit={handleSummarize}>
                  <div className="form-group mb-4">
                    <label className="mb-2 fw-bold">Paste your text/article here (Min 50 words recommended):</label>
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Paste the content you want to summarize..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      style={{ borderRadius: "12px", border: "2px solid #f0f0f0", padding: "15px" }}
                    ></textarea>
                    <div className="text-right mt-2 text-muted fw-small">
                      Characters: {inputText.length} | Words: {inputText.split(/\s+/).filter(w => w).length}
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button
                      type="submit"
                      className="readon learn-more"
                      disabled={isSummarizing || !inputText.trim()}
                      style={{ background: "#fd7e14", borderColor: "#fd7e14" }}
                    >
                      {isSummarizing ? "Analyzing Text..." : "Summarize Now"}
                    </button>
                  </div>
                </form>

                {isSummarizing ? (
                  <div className="text-center p-5">
                    <div className="spinner-border text-warning mb-3"></div>
                    <p>Processing text and extracting key points...</p>
                  </div>
                ) : summary ? (
                  <div className="summary-result animate__animated animate__zoomIn">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0 text-warning"><FaCompressAlt className="mr-2" /> Summary Result:</h5>
                      <div className="btns">
                        <button onClick={handleCopy} className="btn btn-sm btn-outline-warning mr-2">
                          {copied ? <><FaCheckCircle /> Copied</> : <><FaCopy /> Copy</>}
                        </button>
                        <button onClick={handleReset} className="btn btn-sm btn-outline-secondary">
                          <FaUndo /> Reset
                        </button>
                      </div>
                    </div>
                    <div className="p-4" style={{ background: "#fffaf0", borderRadius: "15px", border: "1px solid #ffe8cc", lineHeight: "1.8", fontSize: "17px" }}>
                      {summary}
                    </div>
                    <div className="mt-3 text-muted text-center" style={{ fontSize: "14px" }}>
                      Reduced size by <strong>{Math.round((1 - summary.length / inputText.length) * 100)}%</strong>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-5 bg-light" style={{ borderRadius: "15px" }}>
                    <FaCompressAlt size={40} className="mb-3 opacity-25" />
                    <p>Your summary will appear here</p>
                  </div>
                )}
              </div>

              {/* SEO Content */}
              <div className="seo-content mt-80 text-left pl-20 pr-20">
                <div className="row">
                  <div className="col-lg-12 mb-50">
                    <h2 className="title mb-20" style={{ fontSize: "28px" }}>Effortless Text Summarization</h2>
                    <p>In the information age, time is our most valuable asset. Our AI Summarizer tool helps you digest large volumes of text quickly by extracting the most critical information without losing context.</p>
                  </div>

                  <div className="col-md-6 mb-30">
                    <div className="s-card p-4" style={{ height: "100%", background: "#fff", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                      <h4>Academic Reading</h4>
                      <p>Summarize long research papers and study materials to get the core findings instantly.</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="s-card p-4" style={{ height: "100%", background: "#fff", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                      <h4>Business Reports</h4>
                      <p>Convert lengthy corporate reports and emails into brief bullet points for quick decision making.</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="s-card p-4" style={{ height: "100%", background: "#fff", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                      <h4>Content Curation</h4>
                      <p>Draft quick summaries for your social media posts or newsletters based on long articles.</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="s-card p-4" style={{ height: "100%", background: "#fff", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}>
                      <h4>News Digest</h4>
                      <p>Stay updated with the latest news by summarizing full-length articles into readable snippets.</p>
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

export default AiSummarizer;
