import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaPenFancy, FaMagic, FaCopy, FaTrash, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const AiTextGenerator = () => {
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState("blog");
  const [generatedText, setGeneratedText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsGenerating(true);
    setGeneratedText("");

    trackEvent("ToolAction", {
      tool: "AiTextGenerator",
      action: "GenerateStarted",
      topic: topic,
      type: contentType
    });

    // Real AI Content Generation using Pollinations AI
    const apiCall = async () => {
      try {
        const prompt = `Write a professional and detailed ${contentType} about ${topic}. Ensure it has an introduction, body, and conclusion.`;
        const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&cache=true`);

        if (!response.ok) throw new Error("API Limit reached");

        const text = await response.text();
        setGeneratedText(text);
        trackEvent("ToolAction", { tool: "AiTextGenerator", action: "GenerateSuccess" });
      } catch (err) {
        console.error("Content generation failed:", err);
        setGeneratedText("Failed to generate content. Please try a different topic or try again later.");
      } finally {
        setIsGenerating(false);
      }
    };

    apiCall();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackEvent("ToolAction", { tool: "AiTextGenerator", action: "Copy" });
  };

  const handleReset = () => {
    setTopic("");
    setGeneratedText("");
  };

  return (
    <Layout>
      <PageTitle
        title="AI Text Generator - Free Content & Copywriting Tool"
        description="Generate blog posts, marketing copies, and creative text instantly with our free AI Text Generator. Boost your content creation with Nanosoft AI."
        keywords="ai text generator, free ai content writer, ai blog post generator, ai copywriting tool, free ai writer online"
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#fdfdfd" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Tool Header */}
              <div className="sec-title text-center mb-50">
                <span className="sub-text" style={{ color: "#6f42c1", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>AI Writing Assistant</span>
                <h1 className="title pb-20" style={{ fontSize: "36px" }}>
                  Free AI Text & Content Generator
                </h1>
                <p className="desc w-75 mx-auto">
                  Stop staring at a blank page. Let our AI help you draft high-quality content for blogs, social media, and more in seconds.
                </p>
              </div>

              {/* Tool Box */}
              <div className="tool-box p-5 mb-60" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 10px 40px rgba(111, 66, 193, 0.1)", border: "1px solid #eee" }}>
                <form onSubmit={handleGenerate} className="mb-4">
                  <div className="row">
                    <div className="col-md-8 mb-4">
                      <label className="mb-2 fw-bold">What do you want to write about?</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. The future of renewable energy"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        style={{ borderRadius: "10px", padding: "12px", border: "2px solid #f0f0f0" }}
                      />
                    </div>
                    <div className="col-md-4 mb-4">
                      <label className="mb-2 fw-bold">Content Type</label>
                      <select
                        className="form-control"
                        value={contentType}
                        onChange={(e) => setContentType(e.target.value)}
                        style={{ borderRadius: "10px", padding: "12px", border: "2px solid #f0f0f0" }}
                      >
                        <option value="blog">Blog Post</option>
                        <option value="marketing">Marketing Copy</option>
                        <option value="email">Professional Email</option>
                        <option value="creative">Creative Writing</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="readon learn-more"
                      disabled={isGenerating || !topic.trim()}
                      style={{ background: "#6f42c1", borderColor: "#6f42c1" }}
                    >
                      {isGenerating ? "AI is writing..." : "Generate Content"}
                    </button>
                  </div>
                </form>

                {/* Result Area */}
                {isGenerating ? (
                  <div className="text-center p-5">
                    <div className="spinner-grow text-primary mb-3" role="status"></div>
                    <p>Crafting your content with AI models...</p>
                  </div>
                ) : generatedText ? (
                  <div className="result-container mt-4 animate__animated animate__fadeIn">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0"><FaFileAlt className="mr-2" /> Generated Result:</h5>
                      <div className="actions">
                        <button onClick={handleCopy} className="btn btn-sm btn-outline-primary mr-2">
                          {copied ? <><FaCheckCircle /> Copied</> : <><FaCopy /> Copy</>}
                        </button>
                        <button onClick={handleReset} className="btn btn-sm btn-outline-danger">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    <div className="p-4" style={{ background: "#f8f9fa", borderRadius: "15px", border: "1px solid #eef", minHeight: "200px", whiteSpace: "pre-wrap", lineHeight: "1.8", color: "#444" }}>
                      {generatedText}
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-5 text-muted bg-light" style={{ borderRadius: "15px" }}>
                    <FaPenFancy size={40} className="mb-3 opacity-25" />
                    <p>Your generated content will appear here</p>
                  </div>
                )}
              </div>

              {/* SEO Content */}
              <div className="seo-content mt-80">
                <h2 className="title mb-40 text-center">Master Content Creation with AI</h2>
                <div className="row">
                  <div className="col-md-4 mb-30">
                    <div className="info-card text-center p-4" style={{ height: "100%", background: "#fff", borderRadius: "15px", border: "1px solid #eee" }}>
                      <div className="icon mb-3" style={{ color: "#6f42c1" }}><FaMagic size={30} /></div>
                      <h4>Instant Drafts</h4>
                      <p>Generate high-quality first drafts for any topic in seconds. Overcome writer's block instantly.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="info-card text-center p-4" style={{ height: "100%", background: "#fff", borderRadius: "15px", border: "1px solid #eee" }}>
                      <div className="icon mb-3" style={{ color: "#6f42c1" }}><FaFileAlt size={30} /></div>
                      <h4>Versatile Types</h4>
                      <p>Whether it's a blog post, a professional email, or marketing copy, our AI adapts to your needs.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-30">
                    <div className="info-card text-center p-4" style={{ height: "100%", background: "#fff", borderRadius: "15px", border: "1px solid #eee" }}>
                      <div className="icon mb-3" style={{ color: "#6f42c1" }}><FaCheckCircle size={30} /></div>
                      <h4>SEO Optimized</h4>
                      <p>Our generated text follows natural language patterns that are search-engine friendly.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-section mt-50">
                  <h3 className="mb-30">Frequently Asked Questions</h3>
                  <div className="faq-item mb-4">
                    <h5 className="fw-bold fs-6">Is the generated content unique?</h5>
                    <p className="text-muted">Yes, our AI generates unique combinations of sentences based on your specific prompts, making the content fresh and original.</p>
                  </div>
                  <div className="faq-item mb-4">
                    <h5 className="fw-bold fs-6">Can I use this for my business?</h5>
                    <p className="text-muted">Absolutely! This tool is perfect for small businesses, bloggers, and marketers looking to scale their content production.</p>
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

export default AiTextGenerator;
