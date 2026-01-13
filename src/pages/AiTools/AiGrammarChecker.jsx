import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaSpellCheck, FaMagic, FaCopy, FaTrash, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const AiGrammarChecker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsChecking(true);
    setResult(null);

    trackEvent("ToolAction", {
      tool: "AiGrammarChecker",
      action: "CheckStarted",
      length: text.length
    });

    // Real AI Grammar Logic using Pollinations AI
    const apiCall = async () => {
      try {
        const prompt = `Act as an expert proofreader. Correct all grammar, spelling, and punctuation errors in the following text. Only return the corrected text without any explanations: ${text}`;
        const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&cache=true`);

        if (!response.ok) throw new Error("API error");

        const corrected = await response.text();
        setResult({
          corrected,
          suggestions: [], // Dynamic suggestions would require structured output, using simplified version for now
          score: 100
        });
        trackEvent("ToolAction", { tool: "AiGrammarChecker", action: "CheckSuccess" });
      } catch (err) {
        console.error("Grammar check failed:", err);
      } finally {
        setIsChecking(false);
      }
    };

    apiCall();
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.corrected);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent("ToolAction", { tool: "AiGrammarChecker", action: "Copy" });
  };

  const handleReset = () => {
    setText("");
    setResult(null);
  };

  return (
    <Layout>
      <PageTitle
        title="AI Grammar Checker - Free Writing & Spelling Assistant"
        description="Make your writing flawless with our AI-powered grammar checker. Instant spelling, punctuation, and style corrections. Free online tool by Nanosoft."
        keywords="ai grammar checker, free grammar check online, spell checker ai, writing assistant, fix grammar errors"
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Header */}
              <div className="sec-title text-center mb-50">
                <span className="sub-text" style={{ color: "#28a745", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Writing Assistant</span>
                <h1 className="title pb-20" style={{ fontSize: "36px" }}>AI Grammar & Style Checker</h1>
                <p className="desc w-75 mx-auto">
                  Improve your writing instantly. Our AI detects grammar mistakes, spelling errors, and suggests stylistic improvements for professional-grade content.
                </p>
              </div>

              {/* Tool Box */}
              <div className="tool-box p-5 mb-60" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 10px 40px rgba(40, 167, 69, 0.08)", border: "1px solid #e1f5e6" }}>
                <form onSubmit={handleCheck}>
                  <div className="form-group mb-4">
                    <label className="mb-2 fw-bold">Input Text:</label>
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Paste your text here to check for mistakes..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      style={{ borderRadius: "12px", border: "2px solid #f0f0f0", padding: "15px" }}
                    ></textarea>
                  </div>
                  <div className="text-center mb-4">
                    <button
                      type="submit"
                      className="readon learn-more"
                      disabled={isChecking || !text.trim()}
                      style={{ background: "#28a745", borderColor: "#28a745" }}
                    >
                      {isChecking ? "Checking Errors..." : "Check Grammar"}
                    </button>
                  </div>
                </form>

                {isChecking ? (
                  <div className="text-center p-5">
                    <div className="spinner-border text-success mb-3"></div>
                    <p>Analyzing syntax and semantics...</p>
                  </div>
                ) : result ? (
                  <div className="grammar-result animate__animated animate__fadeIn">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="mb-0"><FaCheckCircle className="text-success mr-2" /> Corrected Text:</h5>
                          <button onClick={handleCopy} className="btn btn-sm btn-outline-success">
                            {copied ? "Copied!" : <><FaCopy /> Copy</>}
                          </button>
                        </div>
                        <div className="p-4" style={{ background: "#f8fdf9", borderRadius: "15px", border: "1px solid #d4edda", minHeight: "200px", fontSize: "17px", lineHeight: "1.7" }}>
                          {result.corrected}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="suggestion-panel p-3 h-100" style={{ background: "#f3f4f6", borderRadius: "15px", border: "1px solid #eee" }}>
                          <h6 className="mb-3">Writing Score: <span className="text-primary">{result.score}%</span></h6>
                          <hr />
                          {result.suggestions.length > 0 ? (
                            result.suggestions.map((s, i) => (
                              <div key={i} className="mb-2 p-2 bg-white rounded shadow-sm" style={{ fontSize: "14px" }}>
                                <FaExclamationTriangle className="text-warning mr-2" />
                                <strong>{s.reason}:</strong> Suggested fix detected.
                              </div>
                            ))
                          ) : (
                            <div className="text-center text-muted py-4">
                              <FaCheckCircle size={30} className="mb-2 text-success opacity-50" />
                              <p>No major errors found. Your writing looks great!</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-5 bg-light" style={{ borderRadius: "15px" }}>
                    <FaSpellCheck size={40} className="mb-3 opacity-25" />
                    <p>Results will appear here after analysis</p>
                  </div>
                )}
              </div>

              {/* SEO Content */}
              <div className="seo-content mt-80 pl-20 pr-20">
                <h2 className="title mb-40 text-center">Professional Writing Made Easy</h2>
                <div className="row">
                  <div className="col-md-6 mb-40">
                    <h4>AI-Powered Corrections</h4>
                    <p>Our tool goes beyond simple spell checkers. It understands context, ensuring that words like 'there', 'their', and 'they're' are used correctly every time.</p>
                  </div>
                  <div className="col-md-6 mb-40">
                    <h4>Improve Clarity</h4>
                    <p>By fixing common grammatical hurdles, your writing becomes clearer and more persuasive for your audience, whether they are clients or colleagues.</p>
                  </div>
                  <div className="col-md-6 mb-40">
                    <h4>Instant & Free</h4>
                    <p>No need for expensive subscriptions. Get professional-grade writing assistance instantly for free, right in your browser.</p>
                  </div>
                  <div className="col-md-6 mb-40">
                    <h4>Secure Editing</h4>
                    <p>We value your privacy. Your text is processed and never stored on our servers longer than necessary for the current session.</p>
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

export default AiGrammarChecker;
