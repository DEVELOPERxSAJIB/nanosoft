import Layout from "../../components/Layout/Layout";
import price1 from "../../assets/images/pricing/main-home/icons/1.png";
import price2 from "../../assets/images/pricing/main-home/icons/2.png";
import price3 from "../../assets/images/pricing/main-home/icons/3.png";

import service1 from "../../assets/images/services/main-home/icons/1.png";
import service2 from "../../assets/images/services/main-home/icons/2.png";
import service3 from "../../assets/images/services/main-home/icons/3.png";
import service4 from "../../assets/images/services/main-home/icons/4.png";
import service5 from "../../assets/images/services/main-home/icons/5.png";
import service6 from "../../assets/images/services/main-home/icons/6.png";
import MenuList from "../../components/Services/MenuList";

import quoat from "../../assets/images/testimonial/main-home/quote-white2.png";
import reviewer from "../../assets/images/testimonial/main-home/5.jpg";

const Ecommerce = () => {
  return (
    <Layout>
      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img5">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">E-commerce Development</h1>
            <ul>
              <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>E-commerce Development</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* Services Section Start */}
        <div className="rs-services-single pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 md-mb-50">
                <div className="services-img">
                  <img src={service1} alt />
                </div>
                <h2 className="mt-34">Responsive Pixel Perfect Design</h2>
                <p>
                  Cras enim urna, interdum nec porttitor vitae, sollicitudin eu
                  eros. Praesent eget mollis nulla, non lacinia urna. Donec sit
                  amet neque auctor, ornare dui rutrum, condimentum justo. Duis
                  dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc,
                  in ultrices ante quam eget massa. Sed scelerisque, odio eu
                  tempor pulvinar, magna tortor finibus lorem, ut mattis tellus
                  nunc ut quam. Curabitur quis ornare leo. Suspendisse bibendum
                  nibh non turpis vestibulum pellentesque.
                </p>
                <ul className="listing-style">
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>Sed ut perspiciatis unde omnis iste natus error</span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      Accusamus et iusto odio dignissimos ducimus qui blanditiis
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque
                    </span>
                  </li>
                </ul>
                <h3 className="mt-34">Why Work With Us</h3>
                {/* Skillbar Section Start */}
                <div className="rs-skillbar style1 modify1">
                  <div className="cl-skill-bar">
                    <div className="row">
                      <div className="col-lg-6">
                        {/* Start Skill Bar */}
                        <span className="skillbar-title">
                          Software Development
                        </span>
                        <div className="skillbar" data-percent={92}>
                          <p className="skillbar-bar" />
                          <span className="skill-bar-percent" />
                        </div>
                        {/* Start Skill Bar */}
                      </div>
                      <div className="col-lg-6">
                        {/* Start Skill Bar */}
                        <span className="skillbar-title">Web Development</span>
                        <div className="skillbar" data-percent={90}>
                          <p className="skillbar-bar" />
                          <span className="skill-bar-percent" />
                        </div>
                        {/* Start Skill Bar */}
                      </div>
                      <div className="col-lg-6">
                        {/* Start Skill Bar */}
                        <span className="skillbar-title">SEO Analysis</span>
                        <div className="skillbar" data-percent={85}>
                          <p className="skillbar-bar" />
                          <span className="skill-bar-percent" />
                        </div>
                        {/* Start Skill Bar */}
                      </div>
                      <div className="col-lg-6">
                        {/* Start Skill Bar */}
                        <span className="skillbar-title">Cyber Security</span>
                        <div className="skillbar" data-percent={92}>
                          <p className="skillbar-bar" />
                          <span className="skill-bar-percent" />
                        </div>
                        {/* Start Skill Bar */}
                      </div>
                      <div className="col-lg-6">
                        {/* Start Skill Bar */}
                        <span className="skillbar-title">Clean Code</span>
                        <div className="skillbar" data-percent={92}>
                          <p className="skillbar-bar" />
                          <span className="skill-bar-percent" />
                        </div>
                        {/* Start Skill Bar */}
                      </div>
                      <div className="col-lg-6">
                        {/* Start Skill Bar */}
                        <span className="skillbar-title">App Development</span>
                        <div className="skillbar" data-percent={92}>
                          <p className="skillbar-bar" />
                          <span className="skill-bar-percent" />
                        </div>
                        {/* Start Skill Bar */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Skillbar Section End */}
                <h3 className="mt-30">24/7 Smart Support</h3>
                <p className="mt-20 mb-50">
                  Cras enim urna, interdum nec porttitor vitae, sollicitudin eu
                  eros. Praesent eget mollis nulla, non lacinia urna. Donec sit
                  amet neque auctor, ornare dui rutrum, condimentum justo. Duis
                  dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc,
                  in ultrices ante quam eget massa. Sed scelerisque, odio eu
                  tempor pulvinar, magna tortor finibus lorem.
                </p>
                <div className="row mb-80">
                  <div className="col-lg-6 col-md-12 md-mb-30">
                    <img className="bdru-4" src={service2} alt />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <img className="bdru-4" src={service3} alt />
                  </div>
                </div>
                {/* Testimonial Section Start */}
                <div className="rs-testimonial style5">
                  <div className="testi-item">
                    <div className="testi-img">
                      <img src={quoat} alt />
                    </div>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias data.
                    </p>
                    <div className="testi-content">
                      <div className="testi-img">
                        <img src={reviewer} alt />
                      </div>
                      <div className="author-part">
                        <div className="name">Brick John</div>
                        <span className="designation">
                          CEO, Brick Consulting
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Section End */}
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
                    <a href="tel:123222-8888">(123) 222-8888</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-services style2 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">Services</span>
              <h2 className="title">
                We Are Offering All Kinds of IT Solutions Services
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service1} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="software-development.html">
                              Software Development
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a href="software-development.html">
                              Software Development
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="software-development.html"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service2} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="web-development.html"> Web Development</a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a href="web-development.html"> Web Development</a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="web-development.html"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service3} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="analytic-solutions.html">
                              Analytic Solutions
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a href="analytic-solutions.html">
                              Analytic Solutions
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="analytic-solutions.html"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service4} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="cloud-and-devops.html">Cloud and DevOps</a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a href="cloud-and-devops.html">Cloud and DevOps</a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="cloud-and-devops.html"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mb-25">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service5} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="product-design.html">Product Design</a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a href="product-design.html">Product Design</a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="product-design.html"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img src={service6} alt />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a href="data-center.html">Data Center</a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We denounce with righteous indignation and dislike
                            men who are so beguiled and demo ralized your data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a href="data-center.html">Data Center</a>
                          </h3>
                          <a href="data-center.html"></a>
                        </div>
                        <a href="data-center.html">
                          <div className="back-desc-part">
                            <p className="back-desc">
                              We denounce with righteous indignation and dislike
                              men who are so beguiled and demo ralized your
                              data.
                            </p>
                          </div>
                        </a>
                        <div className="back-btn-part">
                          <a href="data-center.html"></a>
                          <a
                            className="readon view-more"
                            href="data-center.html"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-animation">
            <div className="shape-part">
              <img
                className="dance"
                src="assets/images/services/s2.png"
                alt="images"
              />
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
                    <a className="readon learn-more" href="contact.html">
                      Contact Us
                    </a>
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
                          Quisque placerat vitae lacus ut scelerisque. Fusce
                          luctus odio ac nibh luctus, in porttitor theo lacus
                          egestas.
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
                          Quisque placerat vitae lacus ut scelerisque. Fusce
                          luctus odio ac nibh luctus, in porttitor theo lacus
                          egestas.
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
                          Quisque placerat vitae lacus ut scelerisque. Fusce
                          luctus odio ac nibh luctus, in porttitor theo lacus
                          egestas.
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
                          Quisque placerat vitae lacus ut scelerisque. Fusce
                          luctus odio ac nibh luctus, in porttitor theo lacus
                          egestas.
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
                    <img src={price1} alt />
                  </div>
                  <div className="pricing-table-price">
                    <div className="pricing-table-bags">
                      <span className="pricing-currency">$</span>
                      <span className="table-price-text">29.99</span>
                      <span className="table-period">Monthly Package</span>
                    </div>
                  </div>
                  <div className="pricing-table-body">
                    <ul>
                      <li>
                        <i className="fa fa-check" />
                        <span>Powerful Admin Panel</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>1 Native Android App</span>
                      </li>
                      <li>
                        <i className="fa fa-close" />
                        <span>Multi-Language Support</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Support via E-mail and Phone</span>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-part">
                    <a className="readon buy-now" href="contact.html">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 md-pb-30 md-pt-30">
                <div className="pricing-table primary-bg">
                  <div className="pricing-badge white-color-bg">Gold</div>
                  <div className="pricing-icon">
                    <img src={price2} alt />
                  </div>
                  <div className="pricing-table-price">
                    <div className="pricing-table-bags">
                      <span className="pricing-currency">$</span>
                      <span className="table-price-text">39.99</span>
                      <span className="table-period">Monthly Package</span>
                    </div>
                  </div>
                  <div className="pricing-table-body">
                    <ul>
                      <li>
                        <i className="fa fa-check" />
                        <span>Powerful Admin Panel</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>2 Native Android App</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Multi-Language Support</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Support via E-mail and Phone</span>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-part">
                    <a className="readon buy-now" href="contact.html">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-table">
                  <div className="pricing-badge">Platinum</div>
                  <div className="pricing-icon">
                    <img src={price3} alt />
                  </div>
                  <div className="pricing-table-price">
                    <div className="pricing-table-bags">
                      <span className="pricing-currency">$</span>
                      <span className="table-price-text">79.99</span>
                      <span className="table-period">Monthly Package</span>
                    </div>
                  </div>
                  <div className="pricing-table-body">
                    <ul>
                      <li>
                        <i className="fa fa-check" />
                        <span>Powerful Admin Panel</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>3 Native Android App</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Multi-Language Support</span>
                      </li>
                      <li>
                        <i className="fa fa-check" />
                        <span>Support via E-mail and Phone</span>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-part">
                    <a className="readon buy-now" href="contact.html">
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
                    <h2 className="epx-title">Our Experts Ready to Help You</h2>
                  </div>
                </div>
                <div className="col-lg-3 text-right col-md-12">
                  <div className="button-wrap">
                    <a className="readon learn-more" href="contact.html">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cta section end */}
      </div>
    </Layout>
  );
};

export default Ecommerce;
