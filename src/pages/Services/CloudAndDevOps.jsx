import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/Services/MenuList";
import CountUp from "react-countup";
import PageTitle from "../../components/PageTitle";

const CloudAndDevOps = () => {
  return (
    <Layout>
      <PageTitle
        title="NanoSoft - Cloud & DevOps Services | Infrastructure Optimization"
        description="Discover NanoSoft's Cloud and DevOps services to optimize infrastructure, automate workflows, and scale efficiently. Expert solutions for AWS, Azure, and Google Cloud."
      />

      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img9">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Cloud and DevOps</h1>
            <ul>
              <li title="Back to Home">
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li title="Explore Our Services">
                <Link className="active" to="/services">
                  Services
                </Link>
              </li>
              <li>Cloud and DevOps</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}

        {/* About Section Start */}
        <div className="rs-services-single rs-about pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-8 pr-40 md-pr-15 md-mb-50">
                <div className="sec-title4">
                  <span className="sub-text">Cloud and DevOps Solutions</span>
                  <h2 className="title">
                    Optimize Your Infrastructure with Cloud & DevOps Services
                  </h2>
                  <div className="heading-line" />
                  <div className="desc desc-big">
                    Leverage our Cloud and DevOps services to streamline your
                    operations, enhance scalability, and automate workflows. We
                    provide robust solutions tailored to ensure faster
                    deployment, efficient resource management, and seamless
                    collaboration.
                  </div>

                  <div className="services-img">
                    <img
                      style={{ width: "100%", objectFit: "cover" }}
                      src={
                        "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755637727/Nanosoft/Services/7060483_gv05jt.jpg"
                      }
                      alt="NanoSoft Cloud and DevOps services with infrastructure automation"
                    />
                  </div>

                  <div className="desc mt-5">
                    We help you choose the right cloud platform (AWS, Azure,
                    Google Cloud) and implement CI/CD pipelines to automate
                    testing, integration, and deployment, ensuring quick and
                    reliable software delivery. Our DevOps solutions foster
                    collaboration between your development and operations teams,
                    optimizing performance and minimizing downtime.
                  </div>
                  <div className="desc mt-3">
                    By adopting our Cloud and DevOps strategies, your business
                    can rapidly scale, improve system reliability, and achieve
                    greater operational efficiency while reducing costs. Let us
                    help you transform your operations with cutting-edge cloud
                    technologies and streamlined DevOps workflows.
                  </div>
                  <div className="btn-part mt-45">
                    <Link className="readon learn-more" to="/contact">
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
          <div className="rs-services style5 pt-120 md-pt-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 md-mb-30">
                  <div className="services-item">
                    <div className="services-icon">
                      <img
                        src={
                          "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755634993/Nanosoft/Services/1_k2954i.png"
                        }
                        alt="Expert Cloud and DevOps teams at NanoSoft"
                      />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        <a href="web-development.html">Expert Teams</a>
                      </h3>
                      <p className="services-desc">
                        Our skilled professionals provide tailored Cloud and
                        DevOps solutions that optimize your operations and
                        enhance system performance
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
                        alt="Seamless business growth with NanoSoft Cloud and DevOps"
                      />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        <a href="web-development.html">Seamless Growth</a>
                      </h3>
                      <p className="services-desc">
                        Automate processes and scale efficiently with our Cloud
                        and DevOps services, ensuring smooth, uninterrupted
                        growth.
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
                        alt="Innovative DevOps and cloud solutions by NanoSoft"
                      />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        <a href="web-development.html">Innovative Solutions</a>
                      </h3>
                      <p className="services-desc">
                        We deliver cutting-edge, customized solutions to
                        streamline your cloud infrastructure and accelerate
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section End */}

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

export default CloudAndDevOps;
