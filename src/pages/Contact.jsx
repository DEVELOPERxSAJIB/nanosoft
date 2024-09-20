import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img6">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Contact</h1>
            <ul>
              <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* Contact Section Start */}
        <div className="rs-contact pt-120 md-pt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 md-mb-60">
                <div className="contact-box">
                  <div className="sec-title mb-45">
                    <span className="sub-text new-text white-color">
                      Let&apos;s Talk
                    </span>
                    <h2 className="title white-color">
                      Speak With Expert Engineers.
                    </h2>
                  </div>
                  <div className="address-box mb-25">
                    <div className="address-icon">
                      <i className="fa fa-home" />
                    </div>
                    <div className="address-text">
                      <span className="label">Email:</span>
                      <a href="tel:123222-8888">(123) 222-8888</a>
                    </div>
                  </div>
                  <div className="address-box mb-25">
                    <div className="address-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="address-text">
                      <span className="label">Phone:</span>
                      <a href="#">info@yourmail.com</a>
                    </div>
                  </div>
                  <div className="address-box">
                    <div className="address-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="address-text">
                      <span className="label">Address:</span>
                      <div className="desc">New Jesrsy, 1201, USA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 pl-70 md-pl-15">
                <div className="contact-widget">
                  <div className="sec-title2 mb-40">
                    <span className="sub-text contact mb-15">Get In Touch</span>
                    <h2 className="title testi-title">Fill The Form Below</h2>
                  </div>
                  <div id="form-messages" />
                  <form
                    id="contact-form"
                    method="post"
                    action="https://rstheme.com/products/html/braintech/mailer.php"
                  >
                    <fieldset>
                      <div className="row">
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="E-Mail"
                            required
                          />
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="website"
                            name="website"
                            placeholder="Your Website"
                            required
                          />
                        </div>
                        <div className="col-lg-12 mb-30">
                          <textarea
                            className="from-control"
                            id="message"
                            name="message"
                            placeholder="Your message Here"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="btn-part">
                        <div className="form-group mb-0">
                          <input
                            className="readon learn-more submit"
                            type="submit"
                            defaultValue="Submit Now"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map-canvas pt-120 md-pt-80">
            <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
        {/* Contact Section End */}
      </Layout>
    </>
  );
};

export default Contact;
