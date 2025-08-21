import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import WebDevelopment from "./pages/Services/WebDevelopment";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound";
import Ecommerce from "./pages/Services/Ecommerce";
import CustomCrmSrm from "./pages/Services/CustomCrmSrm";
import CloudAndDevOps from "./pages/Services/CloudAndDevOps";
import WebDesign from "./pages/Services/WebDesign";
import OurPortfolio from "./pages/OurPortfolio";
import ScrollToTop from "./utils/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
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
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/ecommerce-development"
              element={<Ecommerce />}
            />
            <Route
              path="/services/cloud-and-devops"
              element={<CloudAndDevOps />}
            />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-portfolio" element={<OurPortfolio />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
