import { Link } from "react-router-dom";
import Portfolio from "../components/Home/Portfolio";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle";

const OurPortfolio = () => {
  return (
    <Layout>
      {/* SEO Title + Description */}
      <PageTitle 
        title="NanoSoft - Portfolio" 
        description="Explore NanoSoft's portfolio showcasing custom web, mobile, and full-stack software development projects that empower businesses with innovative technology solutions." 
      />

      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img4">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Our Portfolio</h1>
            <ul>
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>Portfolio</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}

        {/* Portfolio Section Start */}
        <div>
          <div className="rs-technology style2 pt-110 pb-115 md-pt-75 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text style-bg">Portfolio</span>
                <h2 className="title">
                  Our recent Software Development Work
                </h2>
              </div>

              <Portfolio />
            </div>
          </div>
        </div>
        {/* Portfolio Section End */}
      </div>
    </Layout>
  );
};

export default OurPortfolio;
