import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const Services = () => {
  return (
    <>
      <Layout>
        <PageTitle
          title="NanoSoft - Services"
          description="Discover NanoSoft's wide range of software services including web development, mobile apps, cloud solutions, and AI-driven technologies. We help businesses grow with reliable, scalable, and future-ready solutions."
        />
        <div>
          {/* Breadcrumbs Start */}
          <div className="rs-breadcrumbs img3">
            <div className="breadcrumbs-inner text-center">
              <h1 className="page-title">Our Services</h1>
              <ul>
                <li>
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumbs End */}
          {/* Services Section Start */}

          <div className="rs-services style3 pt-80 pb-80 md-pt-75 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <div className="sub-text style-bg">Services</div>
                <h2 className="title testi-title">Our Featured Services</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-20">
                  <div className="services-item">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755552984/Nanosoft/Services/1_sw2sl6.png"
                          }
                          alt
                        />
                        <img
                          className="hover-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553113/Nanosoft/Services/1_ehfr3v.png"
                          }
                          alt
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link to="/services/web-development">
                            Web Developemt
                          </Link>
                        </h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          We create engaging and responsive websites that
                          enhance user experience and drive business growth.
                        </p>
                      </div>
                      <div className="serial-number">01</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-20">
                  <div className="services-item pink-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755552951/Nanosoft/Services/2_psdsl4.png"
                          }
                          alt
                        />
                        <img
                          className="hover-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553114/Nanosoft/Services/2_snnkre.png"
                          }
                          alt
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link to="/services/software-development">
                            {" "}
                            Software Development
                          </Link>
                        </h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          We deliver custom, scalable software that drives
                          efficiency and success in the digital world.
                        </p>
                      </div>
                      <div className="serial-number">02</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-20">
                  <div className="services-item aqua-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755552953/Nanosoft/Services/3_iysdfe.png"
                          }
                          alt
                        />
                        <img
                          className="hover-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553117/Nanosoft/Services/3_whwkfj.png"
                          }
                          alt
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link to="/services/custom-crm-srm">
                            Customised CRM/SRM
                          </Link>
                        </h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          Tailored CRM/SRM solutions to enhance customer
                          relationships and streamline management.
                        </p>
                      </div>
                      <div className="serial-number">03</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 sm-mb-20">
                  <div className="services-item paste-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755552955/Nanosoft/Services/4_hctuy8.png"
                          }
                          alt
                        />
                        <img
                          className="hover-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553131/Nanosoft/Services/4_nfewca.png"
                          }
                          alt
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link to="/services/ecommerce-development">
                            E-commerce Development
                          </Link>
                        </h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          E-commerce development solutions designed to engaging
                          online stores that boost sales and enhance user
                          experience
                        </p>
                      </div>
                      <div className="serial-number">04</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 sm-mb-20">
                  <div className="services-item purple-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755552958/Nanosoft/Services/5_ecpev0.png"
                          }
                          alt
                        />
                        <img
                          className="hover-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553133/Nanosoft/Services/5_eejuap.png"
                          }
                          alt
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link to="/services/cloud-and-devops">
                            Clould &amp; DevOps
                          </Link>
                        </h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          Streamline your operations with our Cloud and DevOps
                          solutions, designed to enhance scalability and
                          efficiency.
                        </p>
                      </div>
                      <div className="serial-number">05</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="services-item green-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755552981/Nanosoft/Services/6_v7nbjp.png"
                          }
                          alt
                        />
                        <img
                          className="hover-img"
                          src={
                            "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553137/Nanosoft/Services/6_i9ejzu.png"
                          }
                          alt
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <a href="web-development.html">
                            Database Administrator
                          </a>
                        </h3>
                      </div>
                      <div className="services-desc">
                        <p>
                          Creative website design solutions that captivate users
                          and represent your brand with style.
                        </p>
                      </div>
                      <div className="serial-number">06</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Section End */}
          {/* Process Section Start */}
          <div className="rs-process style5 bg7 pt-120 pb-120 md-pt-80 md-pb-65">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 md-pb-50">
                  <div className="process-wrap bg3">
                    <div className="sec-title mb-30">
                      <div className="sub-text new">Working Process</div>
                      <h2 className="title white-color">
                        Our Working Process - How We Work For Our Customers
                      </h2>
                    </div>
                    <div className="btn-part mt-40">
                      <Link className="readon learn-more" to="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 pl-30 md-pl-15">
                  <div className="row">
                    <div className="col-md-6 mb-40">
                      <div className="rs-addon-number">
                        <div className="number-text">
                          <div className="number-area">1.</div>
                          <div className="number-title">
                            <h3 className="title"> Discovery</h3>
                          </div>
                          <p className="number-txt">
                            {" "}
                            We begin by understanding your unique business
                            needs, analyzing the market, and identifying the
                            best strategies to ensure a successful project.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-40">
                      <div className="rs-addon-number">
                        <div className="number-text">
                          <div className="number-area">2.</div>
                          <div className="number-title">
                            <h3 className="title">Planning</h3>
                          </div>
                          <p className="number-txt">
                            Our team creates a detailed plan tailored to your
                            objectives, outlining each phase of the project to
                            ensure smooth progress and timely completion.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="rs-addon-number">
                        <div className="number-text">
                          <div className="number-area">3.</div>
                          <div className="number-title">
                            <h3 className="title">Execute</h3>
                          </div>
                          <p className="number-txt">
                            With the plan in place, we move into development,
                            applying industry-leading tools and practices to
                            build a solution that meets your expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="rs-addon-number">
                        <div className="number-text">
                          <div className="number-area">4.</div>
                          <div className="number-title">
                            <h3 className="title">Deliver</h3>
                          </div>
                          <p className="number-txt">
                            After rigorous testing and review, we deliver the
                            final product, ensuring it aligns with your vision
                            and performs seamlessly across all platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Process Section End */}
          {/* Pricing section start */}
          <div className="rs-pricing style2 pt-120 pb-143 md-pt-80 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text style-bg">Pricing</span>
                <h2 className="title">Our Pricing Plan</h2>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-table">
                    <div className="pricing-badge">Silver</div>
                    <div className="pricing-icon">
                      <img
                        src={
                          "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553255/Nanosoft/Services/1_oqshkb.png"
                        }
                        alt
                      />
                    </div>
                    <div className="pricing-table-price">
                      <div className="pricing-table-bags">
                        <span className="pricing-currency">$</span>
                        <span className="table-price-text">1,499</span>
                        <span className="table-period">Starting from</span>
                      </div>
                    </div>
                    <div className="pricing-table-body">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Up to 20 Pages Designed (responsive layout)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Fully Responsive Design (Optimized for all devices)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>SEO-Friendly Design</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>Source Code with Detailed Comments</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>Basic On-Page SEO</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>1 Month Free Maintenance & Support</span>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-part">
                      <a
                        className="readon buy-now"
                        href="https://forms.gle/t3DWM7pHoqNw7BCb7"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 md-pb-30 md-pt-30">
                  <div className="pricing-table primary-bg">
                    <div className="pricing-badge white-color-bg">Gold</div>
                    <div className="pricing-icon">
                      <img
                        src={
                          "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553249/Nanosoft/Services/2_wqqgow.png"
                        }
                        alt
                      />
                    </div>
                    <div className="pricing-table-price">
                      <div className="pricing-table-bags">
                        <span className="pricing-currency">$</span>
                        <span className="table-price-text">3,999</span>
                        <span className="table-period">Starting from</span>
                      </div>
                    </div>
                    <div className="pricing-table-body">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Custom Web Development (Frontend & Backend)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>Database Integration</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Advanced Web Application Features (Interactive
                            multimedia, user authentication)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>Custom API Integration</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>E-commerce Functionality (Optional)</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Powerful Admin Panel (For content and user
                            management)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>3 Months Free Maintenance & Support</span>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-part">
                      <a
                        className="readon buy-now"
                        href="https://forms.gle/t3DWM7pHoqNw7BCb7"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-table">
                    <div className="pricing-badge">Platinum</div>
                    <div className="pricing-icon">
                      <img
                        src={
                          "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553252/Nanosoft/Services/3_lmd9wh.png"
                        }
                        alt
                      />
                    </div>
                    <div className="pricing-table-price">
                      <div className="pricing-table-bags">
                        <span className="pricing-currency">$</span>
                        <span className="table-price-text">7,999</span>
                        <span className="table-period">Monthly Package</span>
                      </div>
                    </div>
                    <div className="pricing-table-body">
                      <ul>
                        <li>
                          <i className="fa fa-check" />
                          <span>Custom CRM/SRM Software Development</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Advanced Features (Client management, task
                            management, financial tracking)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Third-Party Integrations (Payment gateways, email
                            services)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Mobile App Integration (Android options available)
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>Admin Dashboard for System Control</span>
                        </li>
                        <li>
                          <i className="fa fa-check" />
                          <span>
                            Priority Maintenance & Support (3 Months Free)
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-part">
                      <a
                        className="readon buy-now"
                        href="https://forms.gle/t3DWM7pHoqNw7BCb7"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing section end */}
          {/* Cta section start */}
          <div className="rs-cta style1 bg7 pt-80 pb-80">
            <div className="container">
              <div className="cta-wrap">
                <div className="row align-items-center">
                  <div className="col-lg-9 col-md-12 md-mb-30">
                    <span>Plan to Start a Project</span>
                    <div className="title-wrap">
                      <h2 className="epx-title">
                        Our Experts Ready to Help You
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 text-right col-md-12">
                    <div className="button-wrap">
                      <Link className="readon learn-more" to="/contact">
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cta section end */}
        </div>
      </Layout>
    </>
  );
};

export default Services;
