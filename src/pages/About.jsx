import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import Testimonial from "../components/Home/Testimonial";

const About = () => {
  return (
    <>
      <Layout>
        <PageTitle
          title="NanoSoft - About Us"
          description="Learn more about NanoSoft, a trusted provider of innovative software solutions, custom web applications, and IT services. Discover our mission, expertise, and the values that drive us to deliver excellence."
        />
        <div>
          {/* Breadcrumbs Start */}
          <div className="rs-breadcrumbs img1">
            <div className="breadcrumbs-inner text-center">
              <h1 className="page-title">About</h1>
              <ul>
                <li>
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumbs End */}

          {/* About Start */}
          <AboutUs />
          {/* About End */}

          {/* Team Section */}
          <OurTeam />
          {/* Team Section */}

          {/* Team Section */}
          <div>
            <div className="gray-color rs-technology style2 pt-80 pb-115 md-pt-75 md-pb-80">
              <div className="container">
                <div className="sec-title2 text-center mb-45">
                  <span className="sub-text style-bg">TESTIMONIAL</span>
                  <h2 className="title">What our happy user says!</h2>
                </div>

                <Testimonial bg={"#fff"} />
              </div>
            </div>
          </div>
          {/* Team Section */}
        </div>
      </Layout>
    </>
  );
};

export default About;
