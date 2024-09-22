import Layout from "../components/Layout/Layout";
import banner4 from "../assets/images/banner/banner-4.png";

import tech1png from "../assets/images/technology/style3/1.png";
import tech2png from "../assets/images/technology/style3/2.png";
import tech3png from "../assets/images/technology/style3/3.png";
import tech4png from "../assets/images/technology/style3/4.png";
import tech5png from "../assets/images/technology/style3/5.png";
import tech6png from "../assets/images/technology/style3/6.png";
import tech7png from "../assets/images/technology/style3/7.png";
import tech8png from "../assets/images/technology/style3/8.png";
import tech9png from "../assets/images/technology/style3/9.png";
import tech10png from "../assets/images/technology/style3/10.png";

import tech11png from "../assets/images/technology/style4/main-img/1.png";
import tech12png from "../assets/images/technology/style4/main-img/2.png";
import tech13png from "../assets/images/technology/style4/main-img/3.png";
import tech14png from "../assets/images/technology/style4/main-img/4.png";
import tech15png from "../assets/images/technology/style4/main-img/5.png";
import tech16png from "../assets/images/technology/style4/main-img/6.png";
import techHover11png from "../assets/images/technology/style4/hover-img/1.png";
import techHover12png from "../assets/images/technology/style4/hover-img/2.png";
import techHover13png from "../assets/images/technology/style4/hover-img/3.png";
import techHover14png from "../assets/images/technology/style4/hover-img/4.png";
import techHover15png from "../assets/images/technology/style4/hover-img/5.png";
import techHover16png from "../assets/images/technology/style4/hover-img/6.png";

import aboutEffect1 from "../assets/images/about/effect-1.png";
import about3 from "../assets/images/about/about-3.png";
import dotted3 from "../assets/images/about/dotted-3.png";
import shape3 from "../assets/images/about/shape3.png";

import service1 from "../assets/images/services/main-home/icons/1.png";
import service2 from "../assets/images/services/main-home/icons/2.png";
import service3 from "../assets/images/services/main-home/icons/3.png";
import service4 from "../assets/images/services/main-home/icons/4.png";
import service5 from "../assets/images/services/main-home/icons/5.png";
import service6 from "../assets/images/services/main-home/icons/6.png";
import imgS2 from "../assets/images/services/s2.png";

import process1 from "../assets/images/process/1.png";
import process2 from "../assets/images/process/2.png";
import process3 from "../assets/images/process/3.png";
import process4 from "../assets/images/process/4.png";

import team1 from "../assets/images/team/style1/1.jpg";
import team2 from "../assets/images/team/style1/2.jpg";
import team3 from "../assets/images/team/style1/3.jpg";
import team4 from "../assets/images/team/style1/4.jpg";
import team5 from "../assets/images/team/style1/5.jpg";
import team6 from "../assets/images/team/style1/6.jpg";
import team7 from "../assets/images/team/style1/7.jpg";
import team8 from "../assets/images/team/style1/8.jpg";

import partner1 from "../assets/images/partner/1.png";
import partner2 from "../assets/images/partner/2.png";
import partner3 from "../assets/images/partner/3.png";
import partner4 from "../assets/images/partner/4.png";
import partner5 from "../assets/images/partner/5.png";
import { Link } from "react-router-dom";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  
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
        {/* Bannar Start */}
        <div className="rs-banner style3 rs-rain-animate modify1">
          <div className="container">
            <div
              style={{ padding: "120px 0" }}
              className="row d-flex align-items-center"
            >
              <div className="col-lg-7 col-md-12 pr-140 md-mb-140 md-pr-15">
                <div className="banner-content">
                  <h1 className="title">
                    We Are Digital Agency &amp; Technology Solution{" "}
                  </h1>
                  <p className="desc">
                    We are leading technology solutions providing company all
                    over the world doing over 40 years.
                  </p>
                  {/* <ul className="banner-btn">
                    <li>
                      <a className="readon started" href="about.html">
                        Get Started
                      </a>
                    </li>
                  </ul> */}

                  <div className="rs-videos">
                    <div className="animate-border white-color style3">
                      <a
                        className="popup-border popup-videos"
                        href="https://www.youtube.com/watch?v=YLN1Argi7ik"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 pl-70 md-pl-15">
                <div className="rs-contact">
                  <div className="contact-wrap">
                    <div className="content-part mb-25">
                      <h2 className="title mb-15">Schedule Your Appointment</h2>
                      <p className="desc">
                        We here to help you 24/7 with experts
                      </p>
                    </div>
                    <div id="appointment-messages" />
                    <form
                      id="appointment-form"
                      method="post"
                      action="https://rstheme.com/products/html/braintech/appointment.php"
                    >
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-12 mb-15">
                            <input
                              className="from-control"
                              type="text"
                              id="appointment_name"
                              name="appointment_name"
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div className="col-lg-12 mb-15">
                            <input
                              className="from-control"
                              type="text"
                              id="appointment_email"
                              name="appointment_email"
                              placeholder="E-Mail"
                              required
                            />
                          </div>
                          <div className="col-lg-12 mb-15">
                            <input
                              className="from-control"
                              type="text"
                              id="appointment_phone"
                              name="appointment_phone"
                              placeholder="Phone Number"
                              required
                            />
                          </div>
                          <div className="col-lg-12 mb-25">
                            <input
                              className="from-control"
                              type="text"
                              id="appointment_website"
                              name="appointment_website"
                              placeholder="Your Website"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <input
                            className="submit-btn"
                            type="submit"
                            defaultValue="Submit Now"
                          />
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="line-inner style2">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
        {/* Bannar End */}

        {/* About Start */}
        <div className="rs-about gray-color pt-80 pb-80 md-pt-40 md-pb-40">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">About Us</span>
              <h2 className="title">
                We Are Increasing Business Success With Technology
              </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 md-mb-30">
                <div className="rs-animation-shape">
                  <div className="images">
                    <img src={about3} alt />
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
                      Over 25 years working in IT services developing software
                      applications and mobile apps for clients all over the
                      world.
                    </div>
                    <p className="margin-0 pb-15">
                      We denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment, so blinded by desire, that they cannot
                      foresee the pain and trouble that are bound to ensue; and
                      equal blame belongs to those who fail in their duty
                      through weakness of will, which is the same as saying.
                    </p>
                  </div>
                  <div className="btn-part">
                    <Link
                      to={"/about"}
                      className="readon learn-more"
                      href="contact.html"
                    >
                      Learn More
                    </Link>
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

        {/* Service Start */}
        <div className="rs-services style2 pt-80 pb-80 md-pt-60 md-pb-60">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">Services</span>
              <h2 className="title">
                We Are Offering All Kinds of IT Solutions Services
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service2} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="web-development.html"> Web Development</a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <Link to="/services/web-development">
                              {" "}
                              Web Development
                            </Link>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <Link
                            className="readon view-more"
                            to="/services/web-development"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service1} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="software-development.html">
                              Software Development
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <Link to="/services/software-development">
                              Software Development
                            </Link>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <Link
                            className="readon view-more"
                            to="/services/software-development"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service3} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="analytic-solutions.html">Custom CRM/SRM</a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <Link to="/services/custom-crm-srm">
                              Custom CRM/SRM
                            </Link>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <Link
                            className="readon view-more"
                            to="/services/custom-crm-srm"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service6} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="data-center.html">
                              E-commerce Development
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <Link to="/services/ecommerce-development">
                              E-commerce Development
                            </Link>
                          </h3>
                          <Link to="/services/ecommerce-development"></Link>
                        </div>
                        <a href="data-center.html">
                          <div className="back-desc-part">
                            <p className="back-desc">
                              We denounce with righteous indignation and dislike
                              men who are so beguiled and demo ralized your
                              data.
                            </p>
                          </div>
                        </a>
                        <div className="back-btn-part">
                          <a href="data-center.html"></a>
                          <Link
                            className="readon view-more"
                            to="/services/ecommerce-development"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service4} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="cloud-and-devops.html">Cloud and DevOps</a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <Link to="/services/cloud-and-devops">
                              Cloud and DevOps
                            </Link>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <Link
                            className="readon view-more"
                            to="/services/cloud-and-devops"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service5} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <Link to="/services/web-design">
                              Website Design
                            </Link>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <Link to="/services/web-design">
                              Website Design
                            </Link>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <Link
                            className="readon view-more"
                            to="/services/web-design"
                          >
                            Get In Touch
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-animation">
            <div className="shape-part">
              <img className="dance" src={imgS2} alt="images" />
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* Process Start */}
        <div className="rs-process style2 pb-120 md-pt-80 md-pb-73">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">Process</span>
              <h2 className="title title2">Our Working Process</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 md-mb-50">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <img src={process1} alt />
                    </div>
                    <div className="process-text">
                      <h3 className="title">Discovery</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 md-mb-50">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <img src={process2} alt />
                    </div>
                    <div className="process-text">
                      <h3 className="title"> Planning</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <img src={process3} alt />
                    </div>
                    <div className="process-text">
                      <h3 className="title">Execute</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <img src={process4} alt />
                    </div>
                    <div className="process-text">
                      <h3 className="title">Deliver</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Process End */}

        {/* Industry Start */}
        <div
          style={{ background: "#F6F7F9" }}
          className="rs-industry pt-80 pb-80 md-pt-60 md-pb-60"
        >
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">Work For Any Industry</span>
              <h2 className="title">Best Solutions, For All Organizations</h2>
            </div>
            <div className="all-services">
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech1png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Software</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech2png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Fintech</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech3png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Healthcare</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech4png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Data Mining</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech5png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Machine learning</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech6png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Medical</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech7png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Entertainment</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech8png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">AI</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech9png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Manufacturing</h4>
                  </div>
                </div>
              </div>
              <div className="services-item">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img src={tech10png} alt />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Logistics</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Industry End */}

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

        {/* Technology Section Start */}
        <div>
          <div className="rs-technology style2 bg11 pt-110 pb-115 md-pt-75 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text white-color">Technology Index</span>
                <h2 className="title title2 white-color">
                  What Technology We Are Using For Our Valued Customers
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                  <div className="technology-wrap">
                    <div className="rs-grid-figure">
                      <div className="logo-img">
                        <a href="#">
                          <img
                            className="hover-img"
                            src={techHover11png}
                            alt="hover-image"
                          />
                          <img
                            className="main-img"
                            src={tech11png}
                            alt="hover-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="logo-title">
                      <h4 className="title">Node Js</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                  <div className="technology-wrap">
                    <div className="rs-grid-figure">
                      <div className="logo-img">
                        <a href="#">
                          <img
                            className="hover-img"
                            src={techHover12png}
                            alt="grid-image"
                          />
                          <img
                            className="main-img"
                            src={tech12png}
                            alt="grid-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="logo-title">
                      <h4 className="title">Python</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 md-pb-30">
                  <div className="technology-wrap">
                    <div className="rs-grid-figure">
                      <div className="logo-img">
                        <a href="#">
                          <img
                            className="hover-img"
                            src={techHover13png}
                            alt="grid-image"
                          />
                          <img
                            className="main-img"
                            src={tech13png}
                            alt="grid-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="logo-title">
                      <h4 className="title"> My Sql</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                  <div className="technology-wrap">
                    <div className="rs-grid-figure">
                      <div className="logo-img">
                        <a href="#">
                          <img
                            className="hover-img"
                            src={techHover14png}
                            alt="grid-image"
                          />
                          <img
                            className="main-img"
                            src={tech14png}
                            alt="grid-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="logo-title">
                      <h4 className="title">Firebase</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                  <div className="technology-wrap">
                    <div className="rs-grid-figure">
                      <div className="logo-img">
                        <a href="#">
                          <img
                            className="hover-img"
                            src={techHover15png}
                            alt="grid-image"
                          />
                          <img
                            className="main-img"
                            src={tech15png}
                            alt="grid-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="logo-title">
                      <h4 className="title">Tensorflow</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 sm-pb-30">
                  <div className="technology-wrap">
                    <div className="rs-grid-figure">
                      <div className="logo-img">
                        <a href="#">
                          <img
                            className="hover-img"
                            src={techHover16png}
                            alt="grid-image"
                          />
                          <img
                            className="main-img"
                            src={tech16png}
                            alt="grid-image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="logo-title">
                      <h4 className="title">Docker</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Section End */}

        {/* Contact section Start */}
        <div
          id="rs-contact"
          className="rs-contact gray-color pt-80 pb-80 md-pt-60"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-box">
                  <div className="sec-title mb-45">
                    <span className="sub-text style-bg white-color">
                      Let&quot;s Talk
                    </span>
                    <h2 className="title white-color">
                      Speak With Expert Engineers.
                    </h2>
                  </div>

                  <div className="address-box mb-25">
                    <div className="address-icon">
                      <i className="fa fa-home" />
                    </div>
                    <div className="address-text">
                      <span className="label">Email:</span>
                      <a href="mailto:123222-8888">info@nanosoft.agency</a>
                    </div>
                  </div>
                  <div className="address-box mb-25">
                    <div className="address-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="address-text">
                      <span className="label">Phone:</span>
                      <a href="tel:01789557538">01789557538</a>
                    </div>
                  </div>
                  <div className="address-box">
                    <div className="address-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="address-text">
                      <span className="label">Address:</span>
                      <div className="desc">19 South Tootpara, Khulna</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 pl-70 md-pl-15 md-mt-40">
                <div className="contact-widget onepage-style">
                  <div className="sec-title2 mb-40">
                    <span className="sub-text style-bg contact mb-15">
                      Get In Touch
                    </span>
                    <h2 className="title testi-title">Fill The Form Below</h2>
                  </div>
                  <div id="form-messages" />
                  <form
                    id="contact-form"
                    method="post"
                    action="https://rstheme.com/products/html/braintech/mailer.php"
                  >
                    <fieldset>
                      <div className="row">
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="E-Mail"
                            required
                          />
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="website"
                            name="website"
                            placeholder="Your Website"
                            required
                          />
                        </div>
                        <div className="col-lg-12 mb-30">
                          <textarea
                            className="from-control"
                            id="message"
                            name="message"
                            placeholder="Your message Here"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="btn-part">
                        <div className="form-group mb-0">
                          <input
                            className="readon learn-more submit"
                            type="submit"
                            defaultValue="Submit Now"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="map-canvas pt-120 md-pt-70">
            <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div> */}
        </div>
        {/* Contact section End */}

        {/* CTA Start */}
        <div className="rs-cta style1 bg7 pt-70 pb-70">
          <div className="container">
            <div className="cta-wrap">
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-12 md-pr-0 pr-148 md-pl-15 md-mb-30 md-center">
                  <div className="title-wrap">
                    <h2 className="epx-title">
                      Grow Your Business and Build Your Website or Software With
                      us.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 text-righ">
                  <div className="button-wrapt md-center">
                    <Link className="readon learn-more" to="/contact">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA End */}

        {/* Partner Section Start */}
        {/* <div className="rs-partner pt-80 pb-70">
          <div className="container">
            <div
              className="rs-carousel owl-carousel"
              data-loop="true"
              data-items={5}
              data-margin={30}
              data-autoplay="true"
              data-hoverpause="true"
              data-autoplay-timeout={5000}
              data-smart-speed={800}
              data-dots="false"
              data-nav="false"
              data-nav-speed="false"
              data-center-mode="false"
              data-mobile-device={2}
              data-mobile-device-nav="false"
              data-mobile-device-dots="false"
              data-ipad-device={3}
              data-ipad-device-nav="false"
              data-ipad-device-dots="false"
              data-ipad-device2={3}
              data-ipad-device-nav2="false"
              data-ipad-device-dots2="false"
              data-md-device={5}
              data-md-device-nav="false"
              data-md-device-dots="false"
            >
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner1}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner1}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner2}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner2}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner3}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner3}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner4}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner4}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner5}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner5}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/6.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/6.png"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/7.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/7.png"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/8.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/8.png"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/9.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/9.png"
                      alt
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Partner Section End */}
      </Layout>
    </>
  );
};

export default Home;
