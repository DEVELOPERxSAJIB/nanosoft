import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaImage, FaMagic, FaDownload, FaRedo, FaTrash, FaCheckCircle, FaStar } from "react-icons/fa";
import { trackEvent } from "../../MetaPixel";

const AiImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    trackEvent("ToolAction", {
      tool: "AiImageGenerator",
      action: "GenerateStarted",
      prompt: prompt
    });

    try {
      // Using Pollinations AI for free real-time image generation
      const encodedPrompt = encodeURIComponent(prompt);
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`;

      // Pre-load image to ensure it's ready
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        setGeneratedImage(imageUrl);
        setIsGenerating(false);
        trackEvent("ToolAction", { tool: "AiImageGenerator", action: "GenerateSuccess" });
      };
      img.onerror = () => {
        throw new Error("Failed to load image from AI service.");
      };
    } catch (err) {
      setError("Something went wrong. Please try a different prompt.");
      setIsGenerating(false);
      trackEvent("ToolAction", { tool: "AiImageGenerator", action: "GenerateError", error: err.message });
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `nanosoft-ai-image-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    trackEvent("ToolAction", { tool: "AiImageGenerator", action: "Download" });
  };

  const handleReset = () => {
    setPrompt("");
    setGeneratedImage(null);
    setError(null);
  };

  return (
    <Layout>
      <PageTitle
        title="AI Image Generator - Create Stunning AI Art for Free"
        description="Generate unique, beautiful images and art from text descriptions using advanced AI. Turn your imagination into reality with Nanosoft's free AI Image Generator."
        keywords="ai image generator, text to image ai, free ai art generator, create ai images, ai art online, pollinations ai"
      />

      <div className="rs-tool-page pt-100 pb-100 md-pt-70 md-pb-70" style={{ backgroundColor: "#f0f2f5" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Tool Header */}
              <div className="sec-title text-center mb-50">
                <span className="sub-text" style={{ color: "#e83e8c", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>AI Creativity</span>
                <h1 className="title pb-20" style={{ fontSize: "36px" }}>
                  Text to Image Generator
                </h1>
                <p className="desc w-75 mx-auto">
                  Describe what you want to see, and our AI will create it for you in seconds. From landscapes to abstract art, the possibilities are endless.
                </p>
              </div>

              {/* Generator Box */}
              <div className="tool-box p-5 mb-60" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
                <form onSubmit={handleGenerate} className="mb-4">
                  <div className="form-group mb-4">
                    <label className="mb-2 fw-bold" style={{ fontSize: "16px" }}>Enter your creative prompt:</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="e.g. A futuristic city with flying cars and neon lights, digital art style..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      style={{ borderRadius: "12px", border: "2px solid #eee", padding: "15px", fontSize: "16px" }}
                    ></textarea>
                  </div>
                  <div className="d-flex gap-3 justify-content-center">
                    <button
                      type="submit"
                      className="readon learn-more"
                      disabled={isGenerating || !prompt.trim()}
                      style={{ backgroundColor: "#e83e8c", borderColor: "#e83e8c" }}
                    >
                      {isGenerating ? (
                        <><span className="spinner-border spinner-border-sm mr-2"></span> Generating...</>
                      ) : (
                        <><FaMagic className="mr-2" /> Generate Image</>
                      )}
                    </button>
                    {(generatedImage || prompt) && (
                      <button
                        type="button"
                        className="readon learn-more"
                        onClick={handleReset}
                        style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}
                      >
                        <FaTrash className="mr-2" /> Clear
                      </button>
                    )}
                  </div>
                </form>

                {error && <div className="alert alert-danger mb-4">{error}</div>}

                {/* Result Area */}
                <div className="result-display text-center mt-4" style={{ minHeight: "300px", background: "#f8f9fa", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed #dee2e6" }}>
                  {isGenerating ? (
                    <div className="text-center p-5">
                      <div className="ai-loader mb-3">
                        <FaMagic size={50} className="text-pink-pulse" />
                      </div>
                      <h5>AI is painting your imagination...</h5>
                      <p className="text-muted">This usually takes 5-10 seconds</p>
                    </div>
                  ) : generatedImage ? (
                    <div className="p-3">
                      <div className="img-wrapper mb-4 position-relative" style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                        <img src={generatedImage} alt="Generated AI Art" className="img-fluid" style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }} />
                      </div>
                      <button onClick={handleDownload} className="readon learn-more">
                        <FaDownload className="mr-2" /> Download HQ Image
                      </button>
                    </div>
                  ) : (
                    <div className="text-center p-5 text-muted">
                      <FaImage size={60} className="mb-3 opacity-25" />
                      <p>Your generated image will appear here</p>
                    </div>
                  )}
                </div>
              </div>

              {/* SEO Content */}
              <div className="seo-content mt-80">
                <div className="row">
                  <div className="col-lg-6 mb-40">
                    <div className="feature-card p-4" style={{ background: "#fff", borderRadius: "15px", height: "100%" }}>
                      <FaStar color="#ffc107" className="mb-3" size={24} />
                      <h3 style={{ fontSize: "22px" }} className="mb-3">High Quality AI Art</h3>
                      <p>Our AI uses deep learning models to understand your prompts and generate high-resolution images that are unique every time.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-40">
                    <div className="feature-card p-4" style={{ background: "#fff", borderRadius: "15px", height: "100%" }}>
                      <FaCheckCircle color="#28a745" className="mb-3" size={24} />
                      <h3 style={{ fontSize: "22px" }} className="mb-3">Unlimited & Free</h3>
                      <p>Unlike other platforms, Nanosoft offers unlimited image generation for free. Explore as many ideas as you want without limits.</p>
                    </div>
                  </div>
                </div>

                <div className="how-to-use mt-40">
                  <h2 className="title text-center mb-40">How to Generate Stunning AI Images?</h2>
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="step-num mb-20" style={{ width: "50px", height: "50px", background: "#e83e8c", color: "#fff", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold" }}>1</div>
                      <h4>Write a Prompt</h4>
                      <p>Detail your vision. Include colors, styles (e.g., 'oil painting', '3D render'), and subjects.</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="step-num mb-20" style={{ width: "50px", height: "50px", background: "#e83e8c", color: "#fff", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold" }}>2</div>
                      <h4>Click Generate</h4>
                      <p>Our AI engine processes your request and visualizes it in under 10 seconds.</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="step-num mb-20" style={{ width: "50px", height: "50px", background: "#e83e8c", color: "#fff", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold" }}>3</div>
                      <h4>Download Art</h4>
                      <p>Once you love the result, download the high-quality image to your device for any use.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-section mt-100">
                  <h2 className="title mb-40 text-center">AI Image Generation FAQ</h2>
                  <div className="accordion" id="imageFaq">
                    <div className="accordion-item mb-3" style={{ border: "1px solid #eee", borderRadius: "10px" }}>
                      <h4 className="p-3 mb-0" style={{ fontSize: "16px" }}>Are the images copyright free?</h4>
                      <div className="p-3 text-muted border-top">
                        Images generated by our AI are generally free to use for personal projects. For commercial use, we recommend checking modern AI copyright guidelines as they vary by jurisdiction.
                      </div>
                    </div>
                    <div className="accordion-item mb-3" style={{ border: "1px solid #eee", borderRadius: "10px" }}>
                      <h4 className="p-3 mb-0" style={{ fontSize: "16px" }}>What kind of prompts work best?</h4>
                      <div className="p-3 text-muted border-top">
                        Descriptive prompts work best. Instead of "a car," try "a sleek red sports car racing on a mountain road at sunset, cinematic lighting, 8k resolution."
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
                .text-pink-pulse {
                    color: #e83e8c;
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.7; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}} />
    </Layout>
  );
};

export default AiImageGenerator;
