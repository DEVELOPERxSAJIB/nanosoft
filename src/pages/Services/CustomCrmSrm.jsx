import about1 from "../../assets/images/about/about-us/1.jpg";
import serviceImg1 from "../../assets/images/services/style7/1.png";
import serviceImg2 from "../../assets/images/services/style7/2.png";
import serviceImg3 from "../../assets/images/services/style7/3.png";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/Services/MenuList";

const CustomCrmSrm = () => {
  return (
    <Layout>
      <div>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img2">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Customised CRM / SRM</h1>
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
              <li>Customised CRM or SRM</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* About Section Start */}
        <div className="rs-about pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 pr-40 md-pr-15 md-mb-50">
                <div className="sec-title4">
                  <span className="sub-text">Software Development</span>
                  <h2 className="title">
                    We Help to Implement Your Ideas into Automation
                  </h2>
                  <div className="heading-line" />
                  <div className="desc desc-big">
                    We donec pulvinar magna id leoersi pellentesque impered
                    dignissim rhoncus euismod euismod eros vitae best consulting
                    &amp; financial services theme .
                  </div>
                  <div className="desc">
                    Business ipsum dolor sit amet nsectetur cing elit. Suspe
                    ndisse suscipit sagittis leo sit met entum is not estibulum
                    dignity sim posuere cubilia durae. Leo sit met entum cubilia
                    crae. At vero eos accusamus et iusto odio dignissimos
                    provident nam libero tempore, cum soluta.
                  </div>
                  <div className="btn-part mt-45">
                    <a className="readon learn-more" href="contact.html">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 pl-32 md-pl-15">
                <MenuList />
              </div>
            </div>
          </div>
          {/* Services Section Start */}
          <div className="rs-services style5 pt-120 md-pt-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 md-mb-30">
                  <div className="services-item">
                    <div className="services-icon">
                      <img src={serviceImg1} alt="Images" />
                    </div>
                    <div className="services-content">
                      <h3 className="services-title">
                        <a href="web-development.html">Expert Peoples</a>
                      </h3>
                      <p className="services-desc">
                        At vero eos et accusamus etiusto odio praesentium.
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
                        <a href="web-development.html">First Growing Process</a>
                      </h3>
                      <p className="services-desc">
                        At vero eos et accusamus etiusto odio praesentium.
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
                        <a href="web-development.html">Creative Ideas</a>
                      </h3>
                      <p className="services-desc">
                        At vero eos et accusamus etiusto odio praesentium.
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
        {/* About Section Start */}
        <div id="rs-about" className="rs-about pt-120 pb-120 md-pt-80 md-pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-45 md-pr-15 md-mb-50">
                <div className="choose-img">
                  <img src={about1} alt="images" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title mb-30">
                  <div className="sub-text choose">Why Choose Us</div>
                  <h2 className="title pb-20">
                    We Are Increasing Business Success With Technology
                  </h2>
                  <div className="desc">
                    Over 25 years working in IT services developing software
                    applications and mobile apps for clients all over the world.
                  </div>
                </div>
                {/* Skillbar Section Start */}
                <div className="rs-skillbar style1 modify1">
                  <div className="cl-skill-bar">
                    {/* Start Skill Bar */}
                    <span className="skillbar-title">Software Development</span>
                    <div className="skillbar" data-percent={92}>
                      <p className="skillbar-bar" />
                      <span className="skill-bar-percent" />
                    </div>
                    {/* Start Skill Bar */}
                    <span className="skillbar-title">Web Development</span>
                    <div className="skillbar" data-percent={80}>
                      <p className="skillbar-bar" />
                      <span className="skill-bar-percent" />
                    </div>
                    {/* Start Skill Bar */}
                    <span className="skillbar-title">SEO Analysis</span>
                    <div className="skillbar" data-percent={95}>
                      <p className="skillbar-bar" />
                      <span className="skill-bar-percent" />
                    </div>
                    {/* Start Skill Bar */}
                    <span className="skillbar-title">Cyber Security</span>
                    <div className="skillbar" data-percent={78}>
                      <p className="skillbar-bar" />
                      <span className="skill-bar-percent" />
                    </div>
                  </div>
                </div>
                {/* Skillbar Section End */}
              </div>
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
                        <span className="rs-count">450</span>
                        <span className="prefix">k</span>
                      </div>
                      <h3 className="title">Happy Clients</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 md-mb-30">
                  <div className="counter-list">
                    <div className="counter-text">
                      <div className="count-number">
                        <span className="rs-count">750</span>
                        <span className="prefix">+</span>
                      </div>
                      <h3 className="title">Project Delivered</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 sm-mb-30">
                  <div className="counter-list">
                    <div className="counter-text">
                      <div className="count-number">
                        <span className="rs-count">750</span>
                        <span className="prefix">+</span>
                      </div>
                      <h3 className="title">Project Delivered</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-list">
                    <div className="counter-text">
                      <div className="count-number">
                        <span className="rs-count">750</span>
                        <span className="prefix">+</span>
                      </div>
                      <h3 className="title">Project Delivered</h3>
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
