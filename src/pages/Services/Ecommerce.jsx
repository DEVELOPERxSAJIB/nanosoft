import Layout from "../../components/Layout/Layout";

import service1 from "../../assets/images/blog/inner/2.jpg";
import MenuList from "../../components/Services/MenuList";
import { Link } from "react-router-dom";



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
                <div className="sec-title4">
                  <span className="sub-text">Custom E-commerce Solutions </span>
                  <h2 className="title">
                    Elevate Your Business with Custom E-commerce Development
                  </h2>
                  <div className="heading-line" />
                  <div className="desc desc-big">
                    At NanoSoft, we develop powerful, scalable, and secure
                    e-commerce platforms designed to enhance your online
                    presence and drive business growth. Our custom solutions are
                    tailored to fit your unique needs, ensuring an exceptional
                    user experience and streamlined operations.
                  </div>
                  <div className="desc"></div>
                </div>
                <div className="services-img">
                  <img style={{ width : "100%", objectFit : "cover" }} src={service1} alt />
                </div>
                <h2 className="mt-34">In today's competitive market</h2>
                <p>
                  having a robust e-commerce platform is essential to building a
                  successful online business. At NanoSoft, we specialize in
                  creating custom e-commerce solutions that are tailored to meet
                  your business goals. Our development team focuses on building
                  platforms that provide seamless shopping experiences, secure
                  payment gateways, and full-scale inventory management.
                </p>
                <p>
                  Whether you’re a small business looking to expand online or an
                  established brand in need of a more dynamic e-commerce
                  solution, we offer flexible, scalable systems that grow with
                  your business. Our solutions are built to integrate with your
                  existing processes, optimizing everything from product
                  listings to order fulfillment, ensuring smooth operations and
                  high customer satisfaction.
                </p>
                <p>
                  Let NanoSoft help you build a custom e-commerce platform that
                  empowers your brand and accelerates your business growth.
                </p>

                <h3 className="mt-30">24/7 Smart Support</h3>
                <p>
                  {" "}
                  Our 24/7 Smart Support ensures that your business is never
                  left stranded. Whether it's a minor query or a critical issue,
                  our team is always ready to assist you around the clock. We
                  provide real-time solutions to keep your systems running
                  smoothly, ensuring minimal downtime and maximum efficiency.
                  With quick response times and dedicated professionals, you can
                  rely on us to handle any challenge, no matter the time of day.
                </p>
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
        </div>
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
