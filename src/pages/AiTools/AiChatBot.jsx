import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaRobot, FaPaperPlane, FaUser, FaRedo, FaTrash, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const AiChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your AI assistant. How can I help you today?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    trackEvent("ToolAction", {
      tool: "AiChatBot",
      action: "MessageSent",
      length: input.length
    });

    // Real AI Response using Pollinations AI (Free, no key needed for basic usage)
    try {
      const response = await fetch("https://text.pollinations.ai/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: "You are NanoBot, a helpful AI assistant by Nanosoft. You provide concise, smart and friendly answers." },
            ...messages.map(m => ({ role: m.sender === 'ai' ? 'assistant' : 'user', content: m.text })),
            { role: "user", content: input }
          ],
          model: "openai"
        })
      });

      if (!response.ok) throw new Error("API Limit reached or service unavailable.");

      const botText = await response.text();
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: "ai" }]);
    } catch (err) {
      console.error("Chat failed:", err);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "I'm having trouble connecting to my brain right now. Please try again in a moment!", sender: "ai" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    setMessages([{ id: 1, text: "Hello! I am your AI assistant. How can I help you today?", sender: "ai" }]);
    trackEvent("ToolAction", { tool: "AiChatBot", action: "ChatCleared" });
  };

  return (
    <Layout>
      <PageTitle
        title="AI Chat Bot - Free Intelligent AI Assistant Online"
        description="Chat with our advanced AI assistant for free. Get answers, brainstorm ideas, and boost productivity with our intelligent AI Chatbot powered by Nanosoft."
        keywords="ai chat bot, free ai chatbot, intelligent ai assistant, nanobot ai, ai chat online, free ai help"
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Tool Header */}
              <div className="sec-title text-center mb-40">
                <span className="sub-text" style={{ color: "#03228f", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>AI Assistant</span>
                <h1 className="title pb-20" style={{ fontSize: "36px" }}>
                  Free AI Chat Bot
                </h1>
                <p className="desc w-75 mx-auto">
                  Experience the power of artificial intelligence. Ask questions, get advice, or just have a conversation with our smart assistant.
                </p>
              </div>

              {/* Chat Interface */}
              <div className="chat-container mb-60" style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "600px"
              }}>
                {/* Chat Header */}
                <div className="chat-header p-4 d-flex align-items-center justify-content-between" style={{ borderBottom: "1px solid #eee", backgroundColor: "#03228f", color: "#fff" }}>
                  <div className="d-flex align-items-center">
                    <div className="icon-badge mr-3" style={{ background: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "10px" }}>
                      <FaRobot size={24} />
                    </div>
                    <div>
                      <h4 className="mb-0" style={{ color: "#fff", fontSize: "18px" }}>NanoBot AI</h4>
                      <small className="text-white-50">Online & Ready to Help</small>
                    </div>
                  </div>
                  <button onClick={handleClear} className="btn text-white-50 p-0 hover-white" title="Clear Chat">
                    <FaTrash />
                  </button>
                </div>

                {/* Messages Area */}
                <div className="chat-messages p-4" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "20px" }}>
                  {messages.map((msg) => (
                    <div key={msg.id} className={`message-wrapper d-flex ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                      <div className="avatar mr-3 ml-3" style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: msg.sender === "ai" ? "#eef2ff" : "#03228f",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: msg.sender === "ai" ? "#03228f" : "#fff",
                        flexShrink: 0
                      }}>
                        {msg.sender === "ai" ? <FaRobot /> : <FaUser />}
                      </div>
                      <div className={`message-bubble p-3`} style={{
                        maxWidth: "70%",
                        borderRadius: "15px",
                        backgroundColor: msg.sender === "ai" ? "#f1f3f9" : "#03228f",
                        color: msg.sender === "ai" ? "#333" : "#fff",
                        borderBottomLeftRadius: msg.sender === "ai" ? "0" : "15px",
                        borderBottomRightRadius: msg.sender === "user" ? "0" : "15px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
                      }}>
                        <p className="mb-0">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="message-wrapper d-flex">
                      <div className="avatar mr-3" style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#eef2ff", display: "flex", alignItems: "center", justifyCenter: "center", color: "#03228f", flexShrink: 0 }}>
                        <FaRobot />
                      </div>
                      <div className="message-bubble p-3" style={{ backgroundColor: "#f1f3f9", borderRadius: "15px", borderBottomLeftRadius: "0" }}>
                        <div className="typing-dots">
                          <span>.</span><span>.</span><span>.</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="chat-input-area p-4" style={{ borderTop: "1px solid #eee", backgroundColor: "#fff" }}>
                  <div className="input-group" style={{ background: "#f8f9fa", borderRadius: "30px", padding: "5px 10px", border: "1px solid #e1e4e8" }}>
                    <input
                      type="text"
                      className="form-control border-0 bg-transparent shadow-none"
                      placeholder="Ask me anything..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      style={{ height: "45px" }}
                    />
                    <button
                      type="submit"
                      className="btn"
                      style={{ color: "#03228f", padding: "0 15px", fontSize: "18px" }}
                      disabled={!input.trim() || isTyping}
                    >
                      <FaPaperPlane />
                    </button>
                  </div>
                  <p className="mt-2 text-center text-muted" style={{ fontSize: "12px" }}>
                    Powered by NanoSoft AI Engine • Demo Version
                  </p>
                </form>
              </div>

              {/* SEO Content Area */}
              <div className="seo-content text-left pl-20 pr-20">
                <div className="row">
                  <div className="col-lg-12 mb-50">
                    <h2 className="title mb-20" style={{ fontSize: "28px" }}>Why Use Our AI Chat Bot?</h2>
                    <p className="mb-30">Our AI Chat Bot is designed to be your constant companion for learning, creating, and problem-solving. Whether you're a developer, a writer, or a student, our AI offers instant assistance across various domains.</p>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="d-flex align-items-start">
                          <FaCheckCircle className="text-success mt-1 mr-2" />
                          <p><strong>Instant Answers:</strong> Get facts and information in seconds.</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="d-flex align-items-start">
                          <FaCheckCircle className="text-success mt-1 mr-2" />
                          <p><strong>Creative Brainstorming:</strong> Generate ideas for projects and content.</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="d-flex align-items-start">
                          <FaCheckCircle className="text-success mt-1 mr-2" />
                          <p><strong>24/7 Availability:</strong> Your AI assistant is always online.</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="d-flex align-items-start">
                          <FaCheckCircle className="text-success mt-1 mr-2" />
                          <p><strong>No Sign-up Required:</strong> Start chatting immediately for free.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-50">
                    <h2 className="title mb-20" style={{ fontSize: "28px" }}>How to Use AI Chat Bot?</h2>
                    <div className="process-box p-4" style={{ background: "#fff", borderRadius: "15px", border: "1px solid #eee" }}>
                      <ol className="mb-0">
                        <li className="mb-3">Type your question or prompt in the input box at the bottom.</li>
                        <li className="mb-3">Press Enter or click the Send icon to submit your message.</li>
                        <li className="mb-3">Wait a moment for the AI to process and generate a response.</li>
                        <li>Continue the conversation by asking follow-up questions!</li>
                      </ol>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="faq-section mt-10">
                      <h2 className="title mb-30" style={{ fontSize: "28px" }}>Frequently Asked Questions</h2>
                      <div className="accordion-item mb-3" style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
                        <div className="p-3 bg-white fw-bold d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                          <span>Is this AI Chat Bot free to use?</span>
                          <FaInfoCircle color="#03228f" />
                        </div>
                        <div className="p-3 bg-light text-muted border-top">
                          Yes, our AI Chat Bot is completely free for everyone. No registration or payment is needed.
                        </div>
                      </div>
                      <div className="accordion-item mb-3" style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
                        <div className="p-3 bg-white fw-bold d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                          <span>What can I ask the AI?</span>
                          <FaInfoCircle color="#03228f" />
                        </div>
                        <div className="p-3 bg-light text-muted border-top">
                          You can ask about general knowledge, coding tips, writing advice, or even for creative stories.
                        </div>
                      </div>
                      <div className="accordion-item mb-3" style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
                        <div className="p-3 bg-white fw-bold d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                          <span>Is my conversation private?</span>
                          <FaInfoCircle color="#03228f" />
                        </div>
                        <div className="p-3 bg-light text-muted border-top">
                          We do not store your chat history on our servers. Once you refresh the page, the chat is cleared.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
                .typing-dots span {
                    animation: blink 1.4s infinite both;
                    font-size: 24px;
                    line-height: 10px;
                    display: inline-block;
                }
                .typing-dots span:nth-child(2) { animation-delay: .2s; }
                .typing-dots span:nth-child(3) { animation-delay: .4s; }
                @keyframes blink {
                    0% { opacity: .2; }
                    20% { opacity: 1; }
                    100% { opacity: .2; }
                }
                .hover-white:hover { color: #fff !important; }
            `}} />
    </Layout>
  );
};

export default AiChatBot;
