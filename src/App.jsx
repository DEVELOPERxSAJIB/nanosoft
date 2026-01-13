import { Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa6";

import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services/Services";
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import WebDevelopment from "./pages/Services/WebDevelopment";
import Ecommerce from "./pages/Services/Ecommerce";
import CustomCrmSrm from "./pages/Services/CustomCrmSrm";
import CloudAndDevOps from "./pages/Services/CloudAndDevOps";
import WebDesign from "./pages/Services/WebDesign";
import OurPortfolio from "./pages/OurPortfolio";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools/Tools";
import PdfToWord from "./pages/Tools/PdfToWord";
import ImageCompressor from "./pages/Tools/ImageCompressor";
import MergePdf from "./pages/Tools/MergePdf";
import SplitPdf from "./pages/Tools/SplitPdf";
import WordToPdf from "./pages/Tools/WordToPdf";
import ImageResizer from "./pages/Tools/ImageResizer";
import CompressPdf from "./pages/Tools/CompressPdf";
import PdfToJpg from "./pages/Tools/PdfToJpg";
import WordCounter from "./pages/Tools/WordCounter";
import QrCodeGenerator from "./pages/Tools/QrCodeGenerator";
import BackgroundRemover from "./pages/Tools/BackgroundRemover";
import PdfEditor from "./pages/Tools/PdfEditor";
import OnlineOcr from "./pages/Tools/OnlineOcr";
import ExcelToPdf from "./pages/Tools/ExcelToPdf";
import PptToPdf from "./pages/Tools/PptToPdf";
import ImageConverter from "./pages/Tools/ImageConverter";
import CaseConverter from "./pages/Tools/CaseConverter";
import PasswordGenerator from "./pages/Tools/PasswordGenerator";
import CodeFormatter from "./pages/Tools/CodeFormatter";
import DiffChecker from "./pages/Tools/DiffChecker";
import AiTools from "./pages/AiTools/AiTools";
import AiTextGenerator from "./pages/AiTools/AiTextGenerator";
import AiImageGenerator from "./pages/AiTools/AiImageGenerator";
import AiCodeAssistant from "./pages/AiTools/AiCodeAssistant";
import AiGrammarChecker from "./pages/AiTools/AiGrammarChecker";
import AiSummarizer from "./pages/AiTools/AiSummarizer";
import AiChatBot from "./pages/AiTools/AiChatBot";
import { initFacebookPixel, trackEvent, trackPageView } from "./MetaPixel";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    initFacebookPixel();
  }, []);

  // fire event when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      trackPageView();
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/custom-crm-srm" element={<CustomCrmSrm />} />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ecommerce-development" element={<Ecommerce />} />
        <Route path="/services/cloud-and-devops" element={<CloudAndDevOps />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/offers" element={<LandingPage />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/pdf-to-word" element={<PdfToWord />} />
        <Route path="/tools/image-compressor" element={<ImageCompressor />} />
        <Route path="/tools/merge-pdf" element={<MergePdf />} />
        <Route path="/tools/split-pdf" element={<SplitPdf />} />
        <Route path="/tools/word-to-pdf" element={<WordToPdf />} />
        <Route path="/tools/image-resizer" element={<ImageResizer />} />
        <Route path="/tools/compress-pdf" element={<CompressPdf />} />
        <Route path="/tools/pdf-to-jpg" element={<PdfToJpg />} />
        <Route path="/tools/word-counter" element={<WordCounter />} />
        <Route path="/tools/qr-code-generator" element={<QrCodeGenerator />} />
        <Route path="/tools/background-remover" element={<BackgroundRemover />} />
        <Route path="/tools/pdf-editor" element={<PdfEditor />} />
        <Route path="/tools/online-ocr" element={<OnlineOcr />} />
        <Route path="/tools/excel-to-pdf" element={<ExcelToPdf />} />
        <Route path="/tools/ppt-to-pdf" element={<PptToPdf />} />
        <Route path="/tools/image-converter" element={<ImageConverter />} />
        <Route path="/tools/case-converter" element={<CaseConverter />} />
        <Route path="/tools/password-generator" element={<PasswordGenerator />} />
        <Route path="/tools/code-formatter" element={<CodeFormatter />} />
        <Route path="/tools/diff-checker" element={<DiffChecker />} />

        <Route path="/ai-tools" element={<AiTools />} />
        <Route path="/ai-tools/text-generator" element={<AiTextGenerator />} />
        <Route path="/ai-tools/image-generator" element={<AiImageGenerator />} />
        <Route path="/ai-tools/code-assistant" element={<AiCodeAssistant />} />
        <Route path="/ai-tools/grammar-checker" element={<AiGrammarChecker />} />
        <Route path="/ai-tools/summarizer" element={<AiSummarizer />} />
        <Route path="/ai-tools/chat-bot" element={<AiChatBot />} />
      </Routes>

      <a
        onClick={() =>
          trackEvent("WhatsappButton", {
            form: "Click on WhatsApp Contact Button",
          })
        }
        href="https://wa.me/+8801789557538"
        target="_blank"
        rel="noreferrer noopener"
        className="whatsapp-btn position-fixed d-flex align-items-center justify-content-center rounded-circle"
      >
        <FaWhatsapp size={25} color="#fff" />
        <span className="whatsapp-ping position-absolute rounded-circle"></span>
      </a>
    </HelmetProvider>
  );
}

export default App;
