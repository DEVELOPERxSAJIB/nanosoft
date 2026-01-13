import { Link, useLocation } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import React, { Suspense, useState } from "react";
import { LogoDesk, LogoMobile } from "./Logo.jsx";

const logo = React.lazy(() => import("./Logo.jsx"));
import { trackEvent } from "../../MetaPixel";

const Navbar = () => {
  const { pathname } = useLocation();

  const [serviceListShow, setServiceListShow] = useState(false);
  const [toolsListShow, setToolsListShow] = useState(false);
  const [aiToolsListShow, setAiToolsListShow] = useState(false);
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
                  <Suspense fallback={<div>Loading...</div>}>
                    <Link to="/">
                      <LogoDesk />
                    </Link>
                  </Suspense>
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
                      <Link
                        to="/contact"
                        aria-label="Email NanoSoft"
                        onClick={() =>
                          trackEvent("ButtonClick", {
                            location: "NavbarTop",
                            button: "Email Link",
                          })
                        }
                      >
                        contact@nanosoft.agency
                      </Link>
                    </span>
                  </li>
                  <li className="contact-part no-border">
                    <i className="flaticon-call" />
                    <span className="contact-info">
                      <span>Phone</span>
                      <a
                        href="tel:01789557538"
                        onClick={() =>
                          trackEvent("ButtonClick", {
                            location: "NavbarTop",
                            button: "Phone Link",
                          })
                        }
                      >
                        01789557538
                      </a>
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
              <Link to="/" aria-label="Go to homepage">
                <img className="sticky-logo" src={logo} alt="" />
              </Link>
            </div>

            <div className="rs-menu-area">
              <div className="main-menu">
                <div className="mobile-menu">
                  <div className="d-flex justify-content-between">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Link to="/" className="mobile-logo">
                        <LogoMobile />
                      </Link>
                    </Suspense>
                    <button
                      onClick={() => setPhoneNav((prev) => !prev)}
                      className="nav-toggle-btn"
                      style={{ border: "none", background: "transparent" }}
                      aria-label={
                        phoneNav
                          ? "Close navigation menu"
                          : "Open navigation menu"
                      } // 👈 accessible name
                    >
                      <i
                        style={{
                          color: "#fff",
                          background: "#106eea",
                          padding: "5px 7px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "16px",
                          border: "0",
                          outline: "0",
                        }}
                        className={`fa ${phoneNav ? "fa-times" : "fa-bars"}`}
                      />
                    </button>
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
                        pathname === "/services" ||
                        pathname === "/services/web-development" ||
                        pathname === "/services/software-development" ||
                        pathname === "/services/custom-crm-srm" ||
                        pathname === "/services/ecommerce-development" ||
                        pathname === "/services/cloud-and-devops" ||
                        pathname === "/services/web-design"
                          ? "current-menu-item menu-item-has-children"
                          : "menu-item-has-children"
                      }
                    >
                      <Link to="/services">Services & Pricing</Link>
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
                          <Link to="/services/custom-crm-srm">
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
                        pathname === "/our-portfolio"
                          ? "current-menu-item"
                          : null
                      }
                    >
                      <Link to="/our-portfolio">Portfolio</Link>
                    </li>
                    <li
                      className={
                        pathname === "/contact" ? "current-menu-item" : null
                      }
                    >
                      <Link
                        to="/contact"
                        onClick={() =>
                          trackEvent("ButtonClick", {
                            location: "NavbarMain",
                            button: "Contact Menu",
                          })
                        }
                      >
                        Contact
                      </Link>
                    </li>
                    <li
                      className={
                        pathname.includes("/ai-tools")
                          ? "current-menu-item menu-item-has-children"
                          : "menu-item-has-children"
                      }
                    >
                      <Link to="/ai-tools">AI Tools</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/ai-tools">All AI Tools</Link>
                        </li>
                        <li>
                          <Link to="/ai-tools/text-generator">
                            Text Generator
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-tools/image-generator">
                            Image Generator
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-tools/code-assistant">
                            Code Assistant
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-tools/grammar-checker">
                            Grammar Checker
                          </Link>
                        </li>
                        <li>
                          <Link to="/ai-tools/summarizer">Summarizer</Link>
                        </li>
                        <li>
                          <Link to="/ai-tools/chat-bot">AI Chat Bot</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        pathname.includes("/tools")
                          ? "current-menu-item menu-item-has-children"
                          : "menu-item-has-children"
                      }
                    >
                      <Link to="/tools">Tools</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/tools">All Tools</Link>
                        </li>
                        <li>
                          <Link to="/tools/pdf-to-word">PDF to Word</Link>
                        </li>
                        <li>
                          <Link to="/tools/image-compressor">
                            Image Compressor
                          </Link>
                        </li>
                        <li>
                          <Link to="/tools/merge-pdf">Merge PDF</Link>
                        </li>
                        <li>
                          <Link to="/tools/split-pdf">Split PDF</Link>
                        </li>
                        <li>
                          <Link to="/tools/word-to-pdf">Word to PDF</Link>
                        </li>
                        <li>
                          <Link to="/tools/image-resizer">Image Resizer</Link>
                        </li>
                        <li>
                          <Link to="/tools/compress-pdf">Compress PDF</Link>
                        </li>
                        <li>
                          <Link to="/tools/pdf-to-jpg">PDF to JPG</Link>
                        </li>
                        <li>
                          <Link to="/tools/word-counter">Word Counter</Link>
                        </li>
                        <li>
                          <Link to="/tools/qr-code-generator">
                            QR Code Generator
                          </Link>
                        </li>
                        <li>
                          <Link to="/tools/background-remover">
                            Background Remover
                          </Link>
                        </li>
                        <li>
                          <Link to="/tools/pdf-editor">PDF Editor</Link>
                        </li>
                        <li>
                          <Link to="/tools/online-ocr">Online OCR</Link>
                        </li>
                        <li>
                          <Link to="/tools/excel-to-pdf">Excel to PDF</Link>
                        </li>
                        <li>
                          <Link to="/tools/ppt-to-pdf">PPT to PDF</Link>
                        </li>
                        <li>
                          <Link to="/tools/image-converter">
                            Image Converter
                          </Link>
                        </li>
                        <li>
                          <Link to="/tools/case-converter">Case Converter</Link>
                        </li>
                        <li>
                          <Link to="/tools/password-generator">
                            Password Generator
                          </Link>
                        </li>
                        <li>
                          <Link to="/tools/code-formatter">Code Formatter</Link>
                        </li>
                        <li>
                          <Link to="/tools/diff-checker">Diff Checker</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="expand-btn-inner search-icon hidden-sticky hidden-md">
              <div className="toolbar-sl-share">
                <ul className="social">
                  <li>
                    <a
                      target="_blank"
                      href="https://web.facebook.com/nanosoft.agency"
                      aria-label="Visit our Facebook page"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/nanosoftagency"
                      aria-label="Visit our LinkedIn page"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/nanosoft.agency"
                      aria-label="Visit our Instagram page"
                    >
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
                onClick={() => setServiceListShow((prev) => !prev)}
                className={
                  pathname === "/services/software-development"
                    ? "current-menu-item menu-item-has-children"
                    : "menu-item-has-children"
                }
              >
                <Link>
                  Services
                  {serviceListShow ? <FaCaretUp /> : <FaCaretDown />}
                </Link>
                {serviceListShow && (
                  <ul
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #03228F 10%, #0e73e4 100%)",
                      padding: "10px 0 10px 15px",
                    }}
                    className="m-0"
                  >
                    <li
                      className={
                        pathname === "/services" ? "current-menu-item" : null
                      }
                    >
                      <Link to="/services">Our Services</Link>{" "}
                    </li>
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
                className={
                  pathname === "/our-portfolio" ? "current-menu-item" : null
                }
              >
                <Link to="/our-portfolio">Our Portfolio</Link>
              </li>
              <div className="line"></div>
              <li
                style={{ width: "100%" }}
                onClick={() => setToolsListShow((prev) => !prev)}
                className={
                  pathname.includes("/tools")
                    ? "current-menu-item menu-item-has-children"
                    : "menu-item-has-children"
                }
              >
                <Link>
                  Tools
                  {toolsListShow ? <FaCaretUp /> : <FaCaretDown />}
                </Link>
                {toolsListShow && (
                  <ul
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #03228F 10%, #0e73e4 100%)",
                      padding: "10px 0 10px 15px",
                    }}
                    className="m-0"
                  >
                    <li>
                      <Link to="/tools">All Tools</Link>
                    </li>
                    <li>
                      <Link to="/tools/pdf-to-word">PDF to Word</Link>
                    </li>
                    <li>
                      <Link to="/tools/image-compressor">Image Compressor</Link>
                    </li>
                    <li>
                      <Link to="/tools/merge-pdf">Merge PDF</Link>
                    </li>
                    <li>
                      <Link to="/tools/split-pdf">Split PDF</Link>
                    </li>
                    <li>
                      <Link to="/tools/word-to-pdf">Word to PDF</Link>
                    </li>
                    <li>
                      <Link to="/tools/image-resizer">Image Resizer</Link>
                    </li>
                    <li>
                      <Link to="/tools/compress-pdf">Compress PDF</Link>
                    </li>
                    <li>
                      <Link to="/tools/pdf-to-jpg">PDF to JPG</Link>
                    </li>
                    <li>
                      <Link to="/tools/word-counter">Word Counter</Link>
                    </li>
                    <li>
                      <Link to="/tools/qr-code-generator">
                        QR Code Generator
                      </Link>
                    </li>
                    <li>
                      <Link to="/tools/background-remover">
                        Background Remover
                      </Link>
                    </li>
                    <li>
                      <Link to="/tools/pdf-editor">PDF Editor</Link>
                    </li>
                    <li>
                      <Link to="/tools/online-ocr">Online OCR</Link>
                    </li>
                    <li>
                      <Link to="/tools/excel-to-pdf">Excel to PDF</Link>
                    </li>
                    <li>
                      <Link to="/tools/ppt-to-pdf">PPT to PDF</Link>
                    </li>
                    <li>
                      <Link to="/tools/image-converter">Image Converter</Link>
                    </li>
                    <li>
                      <Link to="/tools/case-converter">Case Converter</Link>
                    </li>
                    <li>
                      <Link to="/tools/password-generator">
                        Password Generator
                      </Link>
                    </li>
                    <li>
                      <Link to="/tools/code-formatter">Code Formatter</Link>
                    </li>
                    <li>
                      <Link to="/tools/diff-checker">Diff Checker</Link>
                    </li>
                  </ul>
                )}
              </li>
              <div className="line"></div>
              <li
                style={{ width: "100%" }}
                onClick={() => setAiToolsListShow((prev) => !prev)}
                className={
                  pathname.includes("/ai-tools")
                    ? "current-menu-item menu-item-has-children"
                    : "menu-item-has-children"
                }
              >
                <Link>
                  AI Tools
                  {aiToolsListShow ? <FaCaretUp /> : <FaCaretDown />}
                </Link>
                {aiToolsListShow && (
                  <ul
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #03228F 10%, #0e73e4 100%)",
                      padding: "10px 0 10px 15px",
                    }}
                    className="m-0"
                  >
                    <li>
                      <Link to="/ai-tools">All AI Tools</Link>
                    </li>
                    <li>
                      <Link to="/ai-tools/text-generator">Text Generator</Link>
                    </li>
                    <li>
                      <Link to="/ai-tools/image-generator">
                        Image Generator
                      </Link>
                    </li>
                    <li>
                      <Link to="/ai-tools/code-assistant">Code Assistant</Link>
                    </li>
                    <li>
                      <Link to="/ai-tools/grammar-checker">
                        Grammar Checker
                      </Link>
                    </li>
                    <li>
                      <Link to="/ai-tools/summarizer">Summarizer</Link>
                    </li>
                    <li>
                      <Link to="/ai-tools/chat-bot">AI Chat Bot</Link>
                    </li>
                  </ul>
                )}
              </li>
              <div className="line"></div>
              <li
                className={pathname === "/contact" ? "current-menu-item" : null}
              >
                <Link
                  to="/contact"
                  onClick={() =>
                    trackEvent("ButtonClick", {
                      location: "NavbarMobile",
                      button: "Contact Menu",
                    })
                  }
                >
                  Contact
                </Link>
              </li>
              <div className="line"></div>
              <li
                style={{ paddingBottom: "8px" }}
                className={pathname === "/about" ? "current-menu-item" : null}
              >
                <Link to="/tools">Online Tools</Link>
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
