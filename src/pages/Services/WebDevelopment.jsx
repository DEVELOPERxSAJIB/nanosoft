import service1 from "../../assets/images/gif/webdev.gif";
import service2 from "../../assets/images/services/single/2.jpg";
import service3 from "../../assets/images/services/single/3.jpg";
import quoat from "../../assets/images/testimonial/main-home/quote-white2.png";
import reviewer from "../../assets/images/testimonial/main-home/5.jpg";
import MenuList from "../../components/Services/MenuList";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <Layout>
      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img7">
          <div
            style={{
              position: "relative",
              zIndex: "3",
            }}
            className="breadcrumbs-inner text-center"
          >
            <h1 className="page-title">Web Development</h1>
            <ul>
              <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li title="Go To Services">
                <Link className="active" to="/services">
                  Services
                </Link>
              </li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* Services Single Start */}
        <div className="rs-services-single pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 md-mb-50">
                <div className="services-img">
                  <img src={service1} alt />
                </div>
                <h2 className="mt-34">Web application development</h2>
                <p>
                  An engaging and well-structured website is essential for every
                  business’s online success. By developing a seamless and
                  intuitive site, companies can attract more customers and
                  encourage them to stay longer.
                </p>
                <ul className="listing-style">
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      We build custom, scalable web applications tailored to
                      meet your unique business needs.
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      Our focus is on delivering high-performance solutions that
                      enhance user experience and efficiency.
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      We prioritize security and reliability to ensure your
                      application is robust and trustworthy.
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check-circle" />
                    <span>
                      Flexibility and innovation are at the core of our
                      approach, allowing businesses to adapt and grow with their
                      digital solutions.
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
                  Experience seamless, round-the-clock support tailored to your
                  needs. Whether you need assistance troubleshooting or managing
                  your digital platforms, our team is always ready to help. With
                  a focus on efficiency and quick response times, we ensure that
                  issues are resolved promptly, keeping your operations running
                  smoothly. Our intelligent support system adapts to your
                  requirements, providing reliable and personalized assistance
                  whenever you need it.
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
                      NanoSoft&#x2019;s exceptional service and attention to detail
                      made a world of difference for our project. They
                      seamlessly transformed our vision into a user-friendly,
                      high-performance web application. The team&#x2019;s technical
                      expertise, combined with their commitment to meeting
                      deadlines, made the entire process smooth and stress-free.
                      I’m thrilled with the outcome and would definitely partner
                      with them again.
                    </p>
                    <div className="testi-content">
                      <div className="testi-img">
                        <img src={reviewer} alt />
                      </div>
                      <div className="author-part">
                        <div className="name">William Lee</div>
                        <span className="designation">
                          Founder & CTO, TechWave Solutions
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
                    <Link to="tel:01789557538">01789-557538</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Single End */}
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

export default WebDevelopment;
