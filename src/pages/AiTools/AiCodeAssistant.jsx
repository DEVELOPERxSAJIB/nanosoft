import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaCode, FaBug, FaCopy, FaTrash, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const AiCodeAssistant = () => {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [response, setResponse] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleAsk = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsThinking(true);
    setResponse(null);

    trackEvent("ToolAction", {
      tool: "AiCodeAssistant",
      action: "AskStarted",
      language,
      queryLength: query.length
    });

    // Real AI Coding Logic using Pollinations AI
    const apiCall = async () => {
      try {
        const prompt = `Act as an expert software developer. Provide a ${language} code snippet and a brief explanation for the following query: ${query}. Separate the code and explanation clearly. Use the format: [EXPLANATION]...[CODE]...`;
        const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&cache=true`);

        if (!response.ok) throw new Error("API error");

        const text = await response.text();

        // Basic parsing of the response
        let explanation = "Here is the solution for your query:";
        let code = text;

        if (text.includes("[EXPLANATION]") && text.includes("[CODE]")) {
          explanation = text.split("[EXPLANATION]")[1].split("[CODE]")[0].trim();
          code = text.split("[CODE]")[1].trim();
        } else if (text.includes("```")) {
          const parts = text.split("```");
          explanation = parts[0].trim();
          code = parts[1].replace(/^[a-z]+\n/i, "").trim(); // Remove language tag
        }

        setResponse({ code, explanation });
        trackEvent("ToolAction", { tool: "AiCodeAssistant", action: "AskSuccess" });
      } catch (err) {
        console.error("Code assistant failed:", err);
      } finally {
        setIsThinking(false);
      }
    };

    apiCall();
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent("ToolAction", { tool: "AiCodeAssistant", action: "Copy" });
  };

  return (
    <Layout>
      <PageTitle
        title="AI Code Assistant - Your Smart Coding Companion"
        description="Get instant help with coding, debugging, and software architecture. Our free AI Code Assistant supports multiple languages to boost your development speed."
        keywords="ai code assistant, free coding help, ai programmer assistant, debug code with ai, ai developer tool"
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#0f172a" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Header */}
              <div className="sec-title text-center mb-50">
                <span className="sub-text" style={{ color: "#38bdf8", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>Developer Hub</span>
                <h1 className="title pb-20 text-white" style={{ fontSize: "36px" }}>AI Code Assistant</h1>
                <p className="desc w-75 mx-auto text-white-50">
                  Describe your coding problem or ask for a snippet. Our AI helps you write cleaner code, find bugs, and explain complex logic instantly.
                </p>
              </div>

              {/* Tool Box */}
              <div className="tool-box p-5 mb-60" style={{ background: "#1e293b", borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", border: "1px solid #334155" }}>
                <form onSubmit={handleAsk}>
                  <div className="row">
                    <div className="col-md-9 mb-4">
                      <label className="mb-2 fw-bold text-white-50">Explain what you want to do:</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="e.g. How to center a div horizontally and vertically?"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ borderRadius: "12px", background: "#0f172a", border: "1px solid #475569", color: "#f8fafc", padding: "15px" }}
                      ></textarea>
                    </div>
                    <div className="col-md-3 mb-4">
                      <label className="mb-2 fw-bold text-white-50">Language:</label>
                      <select
                        className="form-control"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        style={{ borderRadius: "12px", background: "#0f172a", border: "1px solid #475569", color: "#f8fafc", padding: "12px" }}
                      >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="html/css">HTML/CSS</option>
                        <option value="node">Node.js</option>
                        <option value="react">React</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="readon learn-more"
                      disabled={isThinking || !query.trim()}
                      style={{ background: "#0ea5e9", borderColor: "#0ea5e9", color: "#fff" }}
                    >
                      {isThinking ? "AI is thinking..." : <><FaLaptopCode className="mr-2" /> Ask Assistant</>}
                    </button>
                  </div>
                </form>

                {isThinking ? (
                  <div className="text-center p-5">
                    <div className="spinner-border text-info mb-3"></div>
                    <p className="text-white-50">Analyzing query and generating solution...</p>
                  </div>
                ) : response ? (
                  <div className="code-result animate__animated animate__fadeInUp mt-4">
                    <div className="explanation mb-4 p-3 rounded" style={{ background: "rgba(14, 165, 233, 0.1)", borderLeft: "4px solid #0ea5e9", color: "#e2e8f0" }}>
                      <p className="mb-0">{response.explanation}</p>
                    </div>
                    <div className="code-block-wrapper position-relative">
                      <div className="d-flex justify-content-between align-items-center px-4 py-2" style={{ background: "#334155", color: "#f8fafc", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", fontSize: "14px" }}>
                        <span>{language.toUpperCase()} Snippet</span>
                        <button onClick={handleCopy} className="btn btn-sm text-white-50 p-0 hover-white">
                          {copied ? <><FaCheckCircle className="text-success" /> Copied</> : <><FaCopy /> Copy Code</>}
                        </button>
                      </div>
                      <pre className="p-4 m-0" style={{ background: "#000", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", color: "#38bdf8", overflowX: "auto", fontFamily: "'Courier New', Courier, monospace", fontSize: "15px" }}>
                        <code>{response.code}</code>
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-5 text-white-25 border border-dashed rounded" style={{ borderColor: "#334155" }}>
                    <FaCode size={50} className="mb-3 opacity-25" />
                    <p>The code solution and explanation will appear here.</p>
                  </div>
                )}
              </div>

              {/* SEO Content */}
              <div className="seo-content mt-80 text-white-50">
                <h2 className="text-white mb-40 text-center">Accelerate Your Development Flow</h2>
                <div className="row">
                  <div className="col-md-4 mb-40">
                    <h4 className="text-white"><FaBug className="mr-2 text-info" /> Debugging</h4>
                    <p>Stuck on an error? Describe the bug and get suggestions on what might be causing it and how to fix it.</p>
                  </div>
                  <div className="col-md-4 mb-40">
                    <h4 className="text-white"><FaCode className="mr-2 text-info" /> Boilerplate</h4>
                    <p>Quickly generate boilerplate code for standard tasks in multiple languages to save time.</p>
                  </div>
                  <div className="col-md-4 mb-40">
                    <h4 className="text-white"><FaLaptopCode className="mr-2 text-info" /> Best Practices</h4>
                    <p>Our AI provides code that follows modern industry standards and clean code principles.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
                .hover-white:hover { color: #fff !important; }
            `}} />
    </Layout>
  );
};

export default AiCodeAssistant;
