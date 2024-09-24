import { Link } from "react-router-dom";
import service1 from "../../assets/images/gif/graphchart.gif"
import serviceImg1 from "../../assets/images/services/style7/1.png";
import serviceImg2 from "../../assets/images/services/style7/2.png";
import serviceImg3 from "../../assets/images/services/style7/3.png";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/Services/MenuList";
import CountUp from "react-countup";

const CustomCrmSrm = () => {
  return (
    <Layout>
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
            <h1 className="page-title">Customised CRM / SRM</h1>
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
              <li>Customised CRM or SRM</li>
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
                  <span className="sub-text">Custom CRM SRM Development</span>
                  <h2 className="title">
                    Tailored CRM & SRM Software to Elevate Your Business Growth
                  </h2>
                  <div className="heading-line" />
                  <div className="desc desc-big">
                    At NanoSoft, we specialize in developing custom CRM
                    (Customer Relationship Management) and SRM (Supplier
                    Relationship Management) software tailored to meet your
                    business needs. Streamline customer and supplier
                    interactions, improve productivity, and foster growth with
                    personalized solutions designed for your unique workflow.
                  </div>
                  <div className="services-img">
                    <img
                      style={{ width: "100%", objectFit: "cover" }}
                      src={service1}
                      alt
                    />
                  </div>
                  <div className="desc">
                    In today's fast-paced business environment, effective
                    management of customer and supplier relationships is crucial
                    for success. Off-the-shelf solutions often fall short when
                    it comes to adapting to your specific processes and
                    requirements. That's where NanoSoft's custom CRM and SRM
                    software development comes in. Our custom CRM systems help
                    businesses streamline customer interactions, manage sales
                    pipelines, and enhance overall customer experience. Whether
                    you need a solution that tracks leads, automates follow-ups,
                    or provides detailed analytics on customer behavior, our
                    team designs software that supports your growth objectives.
                    Similarly, with our SRM systems, we empower businesses to
                    manage supplier relationships more efficiently, ensuring
                    timely deliveries, optimizing procurement processes, and
                    enhancing collaboration. Our custom SRM solutions are built
                    to integrate seamlessly with your existing systems,
                    providing real-time insights and improving overall supply
                    chain management. By choosing NanoSoft, you're opting for a
                    fully scalable, flexible, and secure solution designed to
                    support your business as it evolves. Our development process
                    ensures that your software grows with you, providing
                    long-term value and competitive advantage. Let NanoSoft turn
                    your CRM and SRM visions into a powerful, automated reality,
                    helping you stay ahead in a dynamic market.
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
                      <img src={serviceImg1} alt="Images" />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        <a href="web-development.html">
                          Expert Team Collaboration
                        </a>
                      </h3>
                      <p className="services-desc">
                        Our custom CRM/SRM systems foster seamless team
                        collaboration, ensuring real-time access to critical
                        information, boosting productivity and decision-making.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 md-mb-30">
                  <div className="services-item">
                    <div className="services-icon">
                      <img src={serviceImg2} alt="Images" />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        <a href="web-development.html">
                          Streamlined Automation for Growth
                        </a>
                      </h3>
                      <p className="services-desc">
                        Automate key processes with our custom solutions,
                        allowing your business to scale faster while saving time
                        and resources.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="services-item">
                    <div className="services-icon">
                      <img src={serviceImg3} alt="Images" />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        <a href="web-development.html">
                          Tailored Solutions for You
                        </a>
                      </h3>
                      <p className="services-desc">
                        We build CRM/SRM systems designed specifically for your
                        business, delivering flexible, scalable, and innovative
                        solutions that drive success.
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
  );
};

export default CustomCrmSrm;
