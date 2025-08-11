import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/logo/logotext.png";

const Footer = () => {
  return (
    <>
      <footer id="rs-footer" className="rs-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 footer-widget">
                <div className="footer-logo mb-30">
                  <Link to="/">
                    <img style={{ objectFit: "cover" }} src={footerLogo} alt />
                  </Link>
                </div>
                <div className="textwidget pb-30">
                  <p>
                    Your success is our mission. Connect with us for
                    creative development, web design, and support services.
                  </p>
                </div>
                <ul className="footer-social md-mb-30">
                  <li>
                    <a
                      target="_blank"
                      href="https://web.facebook.com/nanosoft.agency"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/nanosoftagency"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/nanosoft.agency"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                <h3 className="widget-title">IT Services</h3>
                <ul className="site-map">
                  <li>
                    <Link to="/services/software-development">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/custom-crm-srm">Custom ERM SRM</Link>
                  </li>
                  <li>
                    <Link to="/services/ecommerce-development">
                      E-commerce Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/cloud-and-devops">
                      Cloud and DevOps
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/web-design">Web Design</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 md-mb-30">
                <h3 className="widget-title">Contact Info</h3>
                <ul className="address-widget">
                  <li>
                    <i className="flaticon-call" />
                    <div className="desc">
                      <a href="tel:01789557538">01789557538</a>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-email" />
                    <div className="desc">
                      <a href="mailto:contact@nanosoft.agency">
                        contact@nanosoft.agency
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-clock-1" />
                    <div className="desc">Opening Hours: 10:00 - 19:00</div>
                  </li>
                  <li>
                    <i className="flaticon-location" />
                    <div className="desc">
                      19 South Tootpara, 2 no cross raod. Khulna - 9100
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-6 text-right md-mb-10 order-last">
                <ul className="copy-right-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/our-team">Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="copyright">
                  <p>
                    © <span id="current-year">2024</span> All Rights Reserved By
                    Team <a href="https://www.nanosoft.agency/">NanoSoft</a>
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
