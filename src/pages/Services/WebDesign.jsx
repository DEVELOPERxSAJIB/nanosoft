import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/Services/MenuList";
import CountUp from "react-countup";
import PageTitle from "../../components/PageTitle";

const WebDesign = () => {
  return (
    <Layout>
      <PageTitle 
        title={"NanoSoft - Web Design Services | Professional Website Design"} 
        description={
          "NanoSoft offers professional web design services to create stunning, responsive, and SEO-friendly websites. Boost your brand with custom website design solutions tailored to engage users and drive conversions."
        }
      />

      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img2">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Web Design</h1>
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
              <li>Website Design</li>
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
                  <span className="sub-text">Web Design Solutions</span>
                  <h2 className="title">
                    Transform Your Digital Presence with Stunning Web Design
                  </h2>
                  <div className="heading-line" />
                  <div className="desc desc-big">
                    We create visually captivating, user-friendly websites that
                    not only reflect your brand but also engage and convert
                    visitors. Our custom web design services are crafted to
                    deliver seamless user experiences across all devices.
                  </div>
                  <div className="desc">
                    Our design process starts with understanding your brand,
                    target audience, and goals. From there, we create a design
                    that aligns with your vision while optimizing for usability
                    and SEO. Whether you need a simple portfolio site or a
                    complex e-commerce platform, we ensure that your site not
                    only looks great but performs flawlessly.
                  </div>
                  <div className="services-img mt-5">
                    <img
                      src={
                        "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755638504/Nanosoft/Services/5779073_dgoit4.jpg"
                      }
                      alt="Professional web design service by NanoSoft"
                    />
                  </div>

                  <h2 className="mt-34">
                    Key features of our web design services include:
                  </h2>
                  <p>
                    An engaging and well-structured website is essential for
                    every business’s online success. By developing a seamless
                    and intuitive site, companies can attract more customers and
                    encourage them to stay longer.
                  </p>
                  <ul className="listing-style">
                    <li>
                      <i className="fa fa-check-circle" />
                      <span>
                        Custom, responsive designs tailored to your brand
                        identity
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle" />
                      <span>
                        Mobile optimization for a seamless experience across all
                        devices
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle" />
                      <span>User-friendly navigation and fast load times</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle" />
                      <span>
                        Integration with marketing tools and analytics
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle" />
                      <span>Ongoing support and maintenance</span>
                    </li>
                  </ul>
                  <div className="btn-part mt-45">
                    <Link className="readon learn-more" to="/contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
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
              {/* End Sidebar */}
            </div>
          </div>
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

export default WebDesign;
