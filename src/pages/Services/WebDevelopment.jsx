import service1 from "../../assets/images/blog/inner/1.jpg";
import MenuList from "../../components/Services/MenuList";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";


const WebDevelopment = () => {
  return (
    <Layout>
      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img7">
          <div
            style={{
              position: "relative",
              zIndex: "3",
            }}
            className="breadcrumbs-inner text-center"
          >
            <h1 className="page-title">Web Development</h1>
            <ul>
              <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li title="Go To Services">
                <Link className="active" to="/services">
                  Services
                </Link>
              </li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* Services Single Start */}
        <div className="rs-services-single pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 md-mb-50">
                <div className="sec-title4">
                  <span className="sub-text">Web Application Development</span>
                  <h2 className="title">
                    Build Scalable, Secure, and Dynamic Web Applications
                  </h2>
                  <div className="heading-line" />
                  <div className="desc desc-big">
                    Our web application development services are designed to
                    create robust, secure, and scalable web solutions that grow
                    with your business. From intuitive user interfaces to
                    powerful backend functionality, we build custom web
                    applications that streamline processes and enhance user
                    experiences. Partner with us to transform your ideas into
                    dynamic web applications that drive results.
                  </div>
                  <div className="desc">
                    At NanoSoft, we deliver custom web applications tailored to
                    your business needs. Whether it's an e-commerce platform, a
                    complex enterprise solution, or a simple web portal, our
                    team focuses on functionality, performance, and security. We
                    use modern frameworks and technologies to ensure your web
                    application is fast, secure, and user-friendly, providing
                    your users with a seamless experience across devices.
                  </div>
                </div>
                <div className="services-img mt-5">
                  <img src={service1} alt />
                </div>
                <h2 className="mt-34">Web application development</h2>
                <p>
                  An engaging and well-structured website is essential for every
                  business’s online success. By developing a seamless and
                  intuitive site, companies can attract more customers and
                  encourage them to stay longer.
                </p>
                <ul className="listing-style">
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      We build custom, scalable web applications tailored to
                      meet your unique business needs.
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      Our focus is on delivering high-performance solutions that
                      enhance user experience and efficiency.
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      We prioritize security and reliability to ensure your
                      application is robust and trustworthy.
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      Flexibility and innovation are at the core of our
                      approach, allowing businesses to adapt and grow with their
                      digital solutions.
                    </span>
                  </li>
                </ul>
                <h3 className="mt-30">24/7 Smart Support</h3>
                <p className="mt-20 mb-50">
                  Experience seamless, round-the-clock support tailored to your
                  needs. Whether you need assistance troubleshooting or managing
                  your digital platforms, our team is always ready to help. With
                  a focus on efficiency and quick response times, we ensure that
                  issues are resolved promptly, keeping your operations running
                  smoothly. Our intelligent support system adapts to your
                  requirements, providing reliable and personalized assistance
                  whenever you need it.
                </p>
                {/* <div className="row mb-80">
                  <div className="col-lg-6 col-md-12 md-mb-30">
                    <img className="bdru-4" src={service2} alt />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <img className="bdru-4" src={service3} alt />
                  </div>
                </div> */}
              </div>
              <div className="col-lg-4 pl-32 md-pl-15">
                <MenuList />
                <div className="services-add mb-50 mt-50">
                  <div className="address-item mb-35">
                    <div className="address-icon">
                      <i className="fa fa-phone" />
                    </div>
                  </div>
                  <h2 className="title">
                    Have any Questions? <br /> Call us Today!
                  </h2>
                  <div className="contact">
                    <Link to="tel:01789557538">01789-557538</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Single End */}
        {/* Cta section start */}
        <div className="rs-cta style1 bg7 pt-80 pb-80">
          <div className="container">
            <div className="cta-wrap">
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-12 md-mb-30">
                  <span>Plan to Start a Project</span>
                  <div className="title-wrap">
                    <h2 className="epx-title">Our Experts Ready to Help You</h2>
                  </div>
                </div>
                <div className="col-lg-3 text-right col-md-12">
                  <div className="button-wrap">
                    <a className="readon learn-more" href="contact.html">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cta section end */}
      </div>
    </Layout>
  );
};

export default WebDevelopment;
