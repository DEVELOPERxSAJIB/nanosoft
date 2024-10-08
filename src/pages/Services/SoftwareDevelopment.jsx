import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/Services/MenuList";
import CountUp from "react-countup";
import service1 from "../../assets/images/blog/inner/4.jpg"
import PageTitle from "../../components/PageTitle";

const SoftwareDevelopment = () => {
  return (
    <>
      <Layout>
      <PageTitle title={"NanoSoft - Services | Software development"} />

        <div>
          {/* Breadcrumbs Start */}
          <div className="rs-breadcrumbs img2">
            <div className="breadcrumbs-inner text-center">
              <h1 className="page-title">Software Development</h1>
              <ul>
                <li title="">
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
                <li title="Go To Services">
                  <Link className="active" to="/services">
                    Services
                  </Link>
                </li>
                <li>Software Development</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumbs End */}
          {/* About Section Start */}
          <div className="rs-about pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 pr-40 md-pr-15 md-mb-50">
                  <div className="sec-title4">
                    <span className="sub-text">Software Development</span>
                    <h2 className="title">
                      Transform Your Ideas into Automated Solutions
                    </h2>
                    <div className="heading-line" />
                    <div className="desc desc-big">
                      At NanoSoft, we specialize in turning your innovative
                      ideas into powerful automated systems. Our software
                      development services are designed to optimize processes,
                      streamline operations, and drive business efficiency.
                      Whether you're looking for custom applications, business
                      automation, or tailored software solutions, we provide the
                      expertise and cutting-edge technology to make your vision
                      a reality. Let us help you build the future of your
                      business today!
                    </div>
                    <div className="services-img">
                      <img
                        style={{ width: "100%", objectFit: "cover" }}
                        src={service1}
                        alt
                      />
                    </div>
                    <div className="desc"></div>
                    <div className="btn-part mt-45">
                      <Link className="readon learn-more" to="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 pl-32 md-pl-15">
                  <MenuList />
                  {/* <div className="services-add mb-50 mt-50">
                <div className="address-item mb-35">
                  <div className="address-icon">
                    <i className="fa fa-phone" />
                  </div>
                </div>
                <h2 className="title">
                  Have any Questions? <br /> Call us Today!
                </h2>
                <div className="contact">
                  <a href="tel:123222-8888">(123) 222-8888</a>
                </div>
              </div>
              <div className="brochures">
                <h3>Brochures</h3>
                <p>
                  Cras enim urna, interdum nec por ttitor vitae, sollicitudin eu
                  erosen. Praesent eget mollis nulla sollicitudin.
                </p>
                <div className="pdf-btn">
                  <a className="readon learn-more pdf" href="contact.html">
                    Download Now
                    <i className="fa fa-file-pdf-o" />
                  </a>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Counter Section Start */}
          <div className="rs-counter style3 modify1 pt-90 pb-80">
            <div className="container">
              <div className="counter-top-area">
                <div className="row">
                  <div className="col-lg-3 col-md-6 md-mb-30">
                    <div className="counter-list">
                      <div className="counter-text">
                        <div className="count-number">
                          <span className="rs-count">
                            <CountUp delay={2} end={30} />
                          </span>
                          <span className="prefix">+</span>
                        </div>
                        <h3 className="title">Happy Clients</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 md-mb-30">
                    <div className="counter-list">
                      <div className="counter-text">
                        <div className="count-number">
                          <span className="rs-count">
                            <CountUp delay={2} end={175} />
                          </span>
                          {/* <span className="prefix">+</span> */}
                        </div>
                        <h3 className="title">Project Delivered</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 sm-mb-30">
                    <div className="counter-list">
                      <div className="counter-text">
                        <div className="count-number">
                          <span className="rs-count">
                            <CountUp delay={2} end={7.5} />
                          </span>
                          <span className="prefix">k</span>
                        </div>
                        <h3 className="title">Global Reach</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-list">
                      <div className="counter-text">
                        <div className="count-number">
                          <span className="rs-count">
                            <CountUp delay={2} end={12} />
                          </span>
                          {/* <span className="prefix">+</span> */}
                        </div>
                        <h3 className="title">Expert Team Members</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Counter Section End */}
        </div>
      </Layout>
    </>
  );
};

export default SoftwareDevelopment;
