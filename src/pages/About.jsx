import Layout from "../components/Layout/Layout";

import aboutEffect1 from "../assets/images/about/effect-1.png";
import about3 from "../assets/images/about/about-3.png";
import dotted3 from "../assets/images/about/dotted-3.png";
import shape3 from "../assets/images/about/shape3.png";

import team1 from "../assets/images/team/style1/1.jpg";
import team2 from "../assets/images/team/style1/2.jpg";
import team3 from "../assets/images/team/style1/3.jpg";
import team4 from "../assets/images/team/style1/4.jpg";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const About = () => {
  const options = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <Layout>
        <PageTitle title={"NanoSoft - About Us"} />
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
          <div className="rs-about gray-color pt-80 pb-80 md-pt-40 md-pb-40">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text style-bg">About Us</span>
                <h2 className="title">
                  Empowering Business Growth with Technology
                </h2>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 md-mb-30">
                  <div className="rs-animation-shape">
                    <div style={{}} className="images">
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "50%",
                        }}
                        src={about3}
                        alt
                      />
                    </div>
                    <div className="middle-image2">
                      <img className="dance" src={aboutEffect1} alt />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pl-60 md-pl-15">
                  <div className="contact-wrap">
                    <div className="sec-title mb-30">
                      <div className="desc pb-35">
                        At NanoSoft, we are passionate about leveraging
                        technology to drive business success. We specialize in
                        developing tailored software solutions and mobile
                        applications that help our clients streamline
                        operations, boost productivity, and achieve their goals.
                        Our approach combines innovation, dedication, and a deep
                        understanding of industry needs to deliver exceptional
                        results.
                      </div>
                      <div className="desc pb-35">
                        We pride ourselves on building long-lasting partnerships
                        with our clients, focusing on their unique challenges
                        and turning them into opportunities for growth. Let’s
                        work together to bring your vision to life and pave the
                        way for a successful future.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="shape-image">
              <img className="top dance" src={dotted3} alt />
              <img className="bottom dance" src={shape3} alt />
            </div> */}
            </div>
          </div>
          {/* About End */}
          {/* Team Section */}
          {/* <div
            id="rs-team"
            className="rs-team style2 pt-110 pb-120 md-pt-75 md-pb-80"
          >
            <div className="container">
              <div className="sec-title2 text-center mb-30">
                <div className="sec-title2 text-center mb-45">
                  <span className="sub-text style-bg">Team</span>
                  <h2 className="title">Expert IT Consultants</h2>
                </div>
              </div>
              <OwlCarousel className="owl-theme" {...options}>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team1} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Maria Akther</a>
                    </h3>
                    <span className="designation">Digital Marketer</span>
                  </div>
                </div>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team2} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Istiak Ahmed</a>
                    </h3>
                    <span className="designation">Design Lead</span>
                  </div>
                </div>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team3} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Asif Ahmed</a>
                    </h3>
                    <span className="designation">App Developer</span>
                  </div>
                </div>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team4} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Ibrahim Riaz</a>
                    </h3>
                    <span className="designation">Digital Marketer</span>
                  </div>
                </div>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team5} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Koli Akther</a>
                    </h3>
                    <span className="designation">Web Developer</span>
                  </div>
                </div>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team6} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Abu Sufian</a>
                    </h3>
                    <span className="designation">Graphic Artist</span>
                  </div>
                </div>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team7} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Rushali Rumi</a>
                    </h3>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
                <div className="team-item">
                  <div className="images-part">
                    <img src={team8} alt />
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3 className="person-name">
                      <a href="single-team.html">Mahabub Alam</a>
                    </h3>
                    <span className="designation">CEO &amp; Founder</span>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div> */}
          {/* Team Section */}
        </div>
      </Layout>
    </>
  );
};

export default About;
