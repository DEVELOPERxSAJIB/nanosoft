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
