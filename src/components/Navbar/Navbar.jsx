import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo/logomain.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();

  const [serviceListShow, setServiceListShow] = useState(false);
  const [phoneNav, setPhoneNav] = useState(false);

  return (
    <>
      <header
        id="rs-header"
        className="rs-header"
        style={{ position: "relative" }}
      >
        {/* Topbar Area Start */}
        <div className="topbar-area">
          <div className="container">
            <div
              style={{ marginLeft: "-20px", marginRight: "-42px" }}
              className="row rs-vertical-middle"
            >
              <div className="col-lg-2">
                <div className="logo-part">
                  <Link to="/">
                    <img src={logo} alt />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 d-flex align-items-end justify-content-end">
                <ul className="rs-contact-info">
                  <li className="contact-part">
                    <i className="flaticon-location" />
                    <span className="contact-info">
                      <span>Address</span>
                      19 South Totpara, Khulna
                    </span>
                  </li>
                  <li className="contact-part">
                    <i className="flaticon-email" />
                    <span className="contact-info">
                      <span>E-mail</span>
                      <a href="mailto:info@nanosoft.agency">
                        info@nanosoft.agency
                      </a>
                    </span>
                  </li>
                  <li className="contact-part no-border">
                    <i className="flaticon-call" />
                    <span className="contact-info">
                      <span>Phone</span>
                      <a href="tel:01789557538">01789557538</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar Area End */}
        {/* Menu Start */}
        <div className="menu-area menu-sticky">
          <div className="container">
            <div className="logo-area">
              <Link to="/">
                <img className="sticky-logo" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="rs-menu-area">
              <div className="main-menu">
                <div className="mobile-menu">
                  <div className="d-flex justify-content-between">
                    <Link to="/" className="mobile-logo">
                      <img src={logo} alt="logo" />
                    </Link>
                    <a
                      onClick={() => setPhoneNav((prev) => !prev)}
                      className=""
                    >
                      <i
                        style={{
                          color: "#fff",
                          background: "#106eea",
                          padding: "5px 7px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                        }}
                        className={`fa ${phoneNav ? "fa-times" : "fa-bars"}`}
                      />
                    </a>
                  </div>
                </div>
                <nav className="rs-menu">
                  <ul className="nav-menu">
                    <li
                      className={pathname === "/" ? "current-menu-item" : null}
                    >
                      {" "}
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      className={
                        pathname === "/about" ? "current-menu-item" : null
                      }
                    >
                      <Link to="/about">About</Link>
                    </li>
                    <li
                      className={
                        pathname === "/services/software-development"
                          ? "current-menu-item menu-item-has-children"
                          : "menu-item-has-children"
                      }
                    >
                      <Link to="/services">Services</Link>
                      <ul className="sub-menu">
                        <li
                          className={
                            pathname === "/services/web-development"
                              ? "current-menu-item"
                              : null
                          }
                        >
                          <Link to="/services/web-development">
                            Web Application
                          </Link>{" "}
                        </li>
                        <li
                          className={
                            pathname === "/services/software-development"
                              ? "current-menu-item"
                              : null
                          }
                        >
                          <Link to="/services/software-development">
                            Software Development
                          </Link>{" "}
                        </li>
                        <li
                          className={
                            pathname === "/services/custom-crm-srm"
                              ? "current-menu-item"
                              : null
                          }
                        >
                          <Link to="/services/software-development">
                            Custom ERM SRM System
                          </Link>{" "}
                        </li>
                        <li
                          className={
                            pathname === "/services/ecommerce-development"
                              ? "current-menu-item"
                              : null
                          }
                        >
                          <Link to="/services/ecommerce-development">
                            E-commerce Development
                          </Link>{" "}
                        </li>
                        <li
                          className={
                            pathname === "/services/cloud-and-devops"
                              ? "current-menu-item"
                              : null
                          }
                        >
                          <Link to="/services/cloud-and-devops">
                            Cloud and DevOps
                          </Link>{" "}
                        </li>
                        <li
                          className={
                            pathname === "/services/web-design"
                              ? "current-menu-item"
                              : null
                          }
                        >
                          <Link to="/services/web-design">Website Design</Link>{" "}
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        pathname === "our-team" ? "current-menu-item" : null
                      }
                    >
                      <Link to="/our-team">Team</Link>
                    </li>
                    <li
                      className={
                        pathname === "/contact" ? "current-menu-item" : null
                      }
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  {/* //.nav-menu */}
                </nav>
              </div>
              {/* //.main-menu */}
            </div>
            <div className="expand-btn-inner search-icon hidden-sticky hidden-md">
              <div className="toolbar-sl-share">
                <ul className="social">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/nanosoft.agency"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {phoneNav && (
          <div className="phone-menu">
            <ul className="list-unstyled d-flex gap-2">
              <li className={pathname === "/" ? "current-menu-item" : null}>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <div className="line"></div>

              <li
                className={pathname === "/about" ? "current-menu-item" : null}
              >
                <Link to="/about">About</Link>
              </li>
              <div className="line"></div>
              <li
                style={{ width: "100%" }}
                className={
                  pathname === "/services/software-development"
                    ? "current-menu-item menu-item-has-children"
                    : "menu-item-has-children"
                }
              >
                <Link onClick={() => setServiceListShow((prev) => !prev)}>
                  Services
                  {serviceListShow ? <FaCaretUp /> : <FaCaretDown />}
                </Link>
                {serviceListShow && (
                  <ul
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #e9e9e9 10%, #0e73e4 100%)",
                      padding: "10px 0 10px 15px",
                    }}
                    className="m-0"
                  >
                    <li
                      className={
                        pathname === "/services/web-development"
                          ? "current-menu-item"
                          : null
                      }
                    >
                      <Link to="/services/web-development">
                        Web Application
                      </Link>{" "}
                    </li>
                    <li
                      className={
                        pathname === "/services/software-development"
                          ? "current-menu-item"
                          : null
                      }
                    >
                      <Link to="/services/software-development">
                        Software Development
                      </Link>{" "}
                    </li>
                    <li
                      className={
                        pathname === "/services/custom-crm-srm"
                          ? "current-menu-item"
                          : null
                      }
                    >
                      <Link to="/services/software-development">
                        Custom ERM SRM System
                      </Link>{" "}
                    </li>
                    <li
                      className={
                        pathname === "/services/ecommerce-development"
                          ? "current-menu-item"
                          : null
                      }
                    >
                      <Link to="/services/ecommerce-development">
                        E-commerce Development
                      </Link>{" "}
                    </li>
                    <li
                      className={
                        pathname === "/services/cloud-and-devops"
                          ? "current-menu-item"
                          : null
                      }
                    >
                      <Link to="/services/cloud-and-devops">
                        Cloud and DevOps
                      </Link>{" "}
                    </li>
                    <li
                      className={
                        pathname === "/services/web-design"
                          ? "current-menu-item"
                          : null
                      }
                    >
                      <Link to="/services/web-design">Website Design</Link>{" "}
                    </li>
                  </ul>
                )}
              </li>
              <div className="line"></div>

              <li
                className={pathname === "our-team" ? "current-menu-item" : null}
              >
                <Link to="/our-team">Team</Link>
              </li>
              <div className="line"></div>
              <li
                className={pathname === "/contact" ? "current-menu-item" : null}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Menu End */}
      </header>
    </>
  );
};

export default Navbar;
