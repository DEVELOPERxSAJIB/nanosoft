import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="rs-footer" className="rs-footer" role="contentinfo">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Logo & About */}
              <div className="col-lg-4 col-md-12 col-sm-12 footer-widget">
                <div className="footer-logo mb-30">
                  <Link to="/" aria-label="Go to NanoSoft Home">
                    <img
                      style={{ objectFit: "cover" }}
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755695209/Nanosoft/logotext_emwp9j.png"
                      alt="NanoSoft Agency Logo"
                    />
                  </Link>
                </div>
                <div className="textwidget pb-30">
                  <p>
                    Your success is our mission. Connect with us for
                    creative development, web design, and support services.
                  </p>
                </div>
                <ul className="footer-social md-mb-30" aria-label="Social Media Links">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://web.facebook.com/nanosoft.agency"
                      aria-label="Follow NanoSoft on Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/company/nanosoftagency"
                      aria-label="Follow NanoSoft on LinkedIn"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/nanosoft.agency"
                      aria-label="Follow NanoSoft on Instagram"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* IT Services */}
              <div className="col-lg-4 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                <h3 className="widget-title">IT Services</h3>
                <nav aria-label="Footer IT Services">
                  <ul className="site-map">
                    <li>
                      <Link to="/services/software-development">Software Development</Link>
                    </li>
                    <li>
                      <Link to="/services/custom-crm-srm">Custom ERM SRM</Link>
                    </li>
                    <li>
                      <Link to="/services/ecommerce-development">E-commerce Development</Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-and-devops">Cloud and DevOps</Link>
                    </li>
                    <li>
                      <Link to="/services/web-design">Web Design</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Contact Info */}
              <div className="col-lg-4 col-md-12 col-sm-12 md-mb-30">
                <h3 className="widget-title">Contact Info</h3>
                <ul className="address-widget" itemScope itemType="https://schema.org/Organization">
                  <li>
                    <i className="flaticon-call" aria-hidden="true" />
                    <div className="desc">
                      <a href="tel:01789557538" itemProp="telephone" aria-label="Call NanoSoft">
                        01789557538
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-email" aria-hidden="true" />
                    <div className="desc">
                      <a
                        href="mailto:contact@nanosoft.agency"
                        itemProp="email"
                        aria-label="Email NanoSoft"
                      >
                        contact@nanosoft.agency
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-clock-1" aria-hidden="true" />
                    <div className="desc">Opening Hours: 10:00 - 19:00</div>
                  </li>
                  <li>
                    <i className="flaticon-location" aria-hidden="true" />
                    <div className="desc" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      19 South Tootpara, 2 no cross road. Khulna - 9100
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-6 text-right md-mb-10 order-last">
                <nav aria-label="Footer Menu">
                  <ul className="copy-right-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/our-portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-6">
                <div className="copyright">
                  <p>
                    © <span id="current-year">2024</span> All Rights Reserved By
                    Team{" "}
                    <a href="https://www.nanosoft.agency/" aria-label="Visit NanoSoft Website">
                      NanoSoft
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
