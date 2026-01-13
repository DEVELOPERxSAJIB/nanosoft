import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import PageTitle from "../../components/PageTitle";
import { FaRobot, FaMagic, FaPenFancy, FaCode, FaCommentDots, FaImage } from "react-icons/fa";

const aiToolsData = [
    { id: 1, title: "AI Text Generator", description: "Generate creative text, blog posts, and marketing copy instantly.", icon: <FaPenFancy size={40} color="#6f42c1" />, link: "/ai-tools/text-generator" },
    { id: 2, title: "AI Image Generator", description: "Create unique images and art from text descriptions.", icon: <FaImage size={40} color="#e83e8c" />, link: "/ai-tools/image-generator" },
    { id: 3, title: "AI Code Assistant", description: "Get help with coding, debugging, and explaining complex logic.", icon: <FaCode size={40} color="#106eea" />, link: "/ai-tools/code-assistant" },
    { id: 4, title: "AI Grammar Checker", description: "Correct grammar, spelling, and style errors in your writing.", icon: <FaMagic size={40} color="#28a745" />, link: "/ai-tools/grammar-checker" },
    { id: 5, title: "AI summarizer", description: "Condense long articles and documents into quick summaries.", icon: <FaRobot size={40} color="#fd7e14" />, link: "/ai-tools/summarizer" },
    { id: 6, title: "AI Chat Bot", description: "Chat with an intelligent AI assistant for quick answers.", icon: <FaCommentDots size={40} color="#0dcaf0" />, link: "/ai-tools/chat-bot" },
];

const AiTools = () => {
    return (
        <Layout>
            <PageTitle
                title="Free AI Tools - Powered by Artificial Intelligence"
                description="Explore our collection of free AI-powered tools to boost your creativity and productivity. Text generation, image creation, coding help, and more."
                keywords="free ai tools, artificial intelligence tools, ai text generator, ai image generator, ai chatbot, ai coding assistant, ai summarizer"
            />

            <div className="rs-services style2 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="sec-title2 text-center mb-45">
                        <span className="sub-text style-bg">AI Power</span>
                        <h2 className="title">
                            Unleash Creativity with Free AI Tools
                        </h2>
                    </div>
                    <div className="row">
                        {aiToolsData.map((tool) => (
                            <div key={tool.id} className="col-lg-4 col-md-6 mb-30 d-flex align-items-stretch">
                                <div className="services-item w-100" style={{ padding: "30px", border: "1px solid #eee", borderRadius: "10px", transition: "all 0.3s ease", backgroundColor: "#fff" }}>
                                    <div className="services-icon mb-20">
                                        {tool.icon}
                                    </div>
                                    <div className="services-content">
                                        <h3 className="title mb-15">
                                            <Link to={tool.link}>{tool.title}</Link>
                                        </h3>
                                        <p className="desc mb-20">{tool.description}</p>
                                        <Link className="readon view-more" to={tool.link}>
                                            Try AI Tool <i className="fa fa-arrow-right ml-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AiTools;
