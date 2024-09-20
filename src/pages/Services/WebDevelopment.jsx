import service1 from "../../assets/images/services/single/1.jpg";
import service2 from "../../assets/images/services/single/2.jpg";
import service3 from "../../assets/images/services/single/3.jpg";
import quoat from "../../assets/images/testimonial/main-home/quote-white2.png";
import reviewer from "../../assets/images/testimonial/main-home/5.jpg";
import MenuList from "../../components/Services/MenuList";
import Layout from "../../components/Layout/Layout";

const WebDevelopment = () => {
  return (
    <Layout>
      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img3">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Web Development</h1>
            <ul>
              <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li title="Go To Services">
                <a className="active" href="index.html">
                  Services
                </a>
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
                <div className="brochures">
                  <h3>Brochures</h3>
                  <p>
                    Cras enim urna, interdum nec por ttitor vitae, sollicitudin
                    eu erosen. Praesent eget mollis nulla sollicitudin.
                  </p>
                  <div className="pdf-btn">
                    <a className="readon learn-more pdf" href="contact.html">
                      Download Now
                      <i className="fa fa-file-pdf-o" />
                    </a>
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
