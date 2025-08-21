import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/Services/MenuList";
import CountUp from "react-countup";
import PageTitle from "../../components/PageTitle";

const CustomCrmSrm = () => {
  return (
    <Layout>
      <PageTitle
        title="NanoSoft - Custom CRM & SRM Development Services"
        description="Boost efficiency with NanoSoft’s custom CRM & SRM software solutions. Tailored systems to streamline customer & supplier management, automate workflows, and drive business growth."
      />

      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img7">
          <div
            style={{
              zIndex: 3,
              position: "relative",
            }}
            className="breadcrumbs-inner text-center"
          >
            <h1 className="page-title">Custom CRM & SRM Development</h1>
            <ul>
              <li>
                <Link
                  className="active"
                  to="/"
                  aria-label="Go to NanoSoft Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="active"
                  to="/services"
                  aria-label="View NanoSoft Services"
                >
                  Services
                </Link>
              </li>
              <li>Customised CRM / SRM</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}

        {/* About Section Start */}
        <div className="rs-services-single rs-about pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 pr-40 md-pr-15 md-mb-50">
                <div className="sec-title4">
                  <span className="sub-text">CRM & SRM Software Solutions</span>
                  <h2 className="title">
                    Tailored CRM & SRM Systems to Drive Business Growth
                  </h2>
                  <div className="heading-line" />
                  <div className="desc desc-big">
                    At NanoSoft, we specialize in developing custom CRM
                    (Customer Relationship Management) and SRM (Supplier
                    Relationship Management) software tailored to your unique
                    business needs. Our solutions streamline customer and
                    supplier interactions, enhance productivity, and foster
                    long-term growth.
                  </div>
                  <div className="services-img">
                    <img
                      style={{ width: "100%", objectFit: "cover" }}
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755634420/Nanosoft/Services/3629597_758_1_ficexa.jpg"
                      alt="Custom CRM and SRM software development solutions by NanoSoft"
                    />
                  </div>
                  <div className="desc mt-3">
                    Off-the-shelf tools often fail to adapt to your unique
                    workflows. That’s why NanoSoft builds customized CRM and SRM
                    systems designed to grow with your business. Our CRM
                    platforms help manage leads, automate follow-ups, and
                    deliver actionable insights. Meanwhile, our SRM systems
                    improve supplier management, procurement efficiency, and
                    supply chain collaboration. With fully scalable and secure
                    solutions, we empower businesses to streamline operations,
                    maximize efficiency, and achieve sustainable success.
                  </div>
                  <div className="btn-part mt-45">
                    <Link
                      className="readon learn-more"
                      to="/contact"
                      aria-label="Contact NanoSoft for CRM SRM solutions"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
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

          {/* Services Section Start */}
          <div className="rs-services style5 pt-80 md-pt-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 md-mb-30">
                  <div className="services-item">
                    <div className="services-icon">
                      <img
                        src={
                          "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755634993/Nanosoft/Services/1_k2954i.png"
                        }
                        alt="CRM SRM team collaboration"
                      />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        Our Expert Team Collaboration
                      </h3>
                      <p className="services-desc">
                        Enable seamless team collaboration with real-time data
                        access, boosting decision-making and business
                        productivity through our CRM/SRM systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 md-mb-30">
                  <div className="services-item">
                    <div className="services-icon">
                      <img
                        src={
                          "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755634995/Nanosoft/Services/2_eobzyt.png"
                        }
                        alt="Business automation with CRM SRM"
                      />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        Streamlined Automation for Growth
                      </h3>
                      <p className="services-desc">
                        Automate key processes to save time and resources while
                        scaling your business efficiently with NanoSoft’s
                        tailored CRM/SRM solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="services-item">
                    <div className="services-icon">
                      <img
                        src={
                          "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755634998/Nanosoft/Services/3_muxfil.png"
                        }
                        alt="Custom CRM SRM tailored solutions"
                      />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        Tailored Solutions for Your Business
                      </h3>
                      <p className="services-desc">
                        We build CRM and SRM systems customized for your
                        business, offering scalable, flexible, and innovative
                        tools to support long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Section End */}
        </div>
        {/* About Section End */}

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
                      </div>
                      <h3 className="title">Projects Delivered</h3>
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
  );
};

export default CustomCrmSrm;
