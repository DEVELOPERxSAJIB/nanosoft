import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";

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
        </div>
      </Layout>
    </>
  );
};

export default About;
