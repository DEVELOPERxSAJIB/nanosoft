import { trackEvent } from "../../MetaPixel";

const Pricing = () => {
  return (
    <div className="rs-pricing gray-color style2 pt-120 pb-143 md-pt-80 md-pb-80">
      <div className="container">
        <div className="sec-title2 text-center mb-45">
          <span className="sub-text style-bg">Pricing</span>
          <h2 className="title">Our Pricing Plan</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-table">
              <div className="pricing-badge">Premium</div>
              <div className="pricing-icon">
                <img
                  src={
                    "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553255/Nanosoft/Services/1_oqshkb.png"
                  }
                  alt={"Silver Plan Icon"}
                />
              </div>
              <div className="pricing-table-price">
                <div className="pricing-table-bags">
                  <span className="pricing-currency">$</span>
                  <span className="table-price-text">1,490</span>
                  <span className="table-period">Starting from</span>
                </div>
              </div>
              <div className="pricing-table-body">
                <ul>
                  <li>
                    <i className="fa fa-check" />
                    <span>Up to 20 Pages Designed (responsive layout)</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>
                      Fully Responsive Design (Optimized for all devices)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>SEO-Friendly Design</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>Source Code with Detailed Comments</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>Basic On-Page SEO</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>1 Month Free Maintenance & Support</span>
                  </li>
                </ul>
              </div>
              <div className="btn-part">
                <a
                  onClick={() =>
                    trackEvent("PremiumSlotReservation", {
                      from: "Premium Plan slot clicked",
                    })
                  }
                  className="readon buy-now"
                  href="https://forms.gle/t3DWM7pHoqNw7BCb7"
                >
                  3 Slots Left
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 md-pb-30 md-pt-30">
            <div className="pricing-table primary-bg">
              <div className="pricing-badge white-color-bg">No Risk</div>
              <div className="pricing-icon">
                <img
                  src={
                    "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553249/Nanosoft/Services/2_wqqgow.png"
                  }
                  alt={"Gold Plan Icon"}
                />
              </div>
              <div className="pricing-table-price">
                <div className="pricing-table-bags">
                  <span className="pricing-currency">$</span>
                  <span className="table-price-text">3,990</span>
                  <span className="table-period">Starting from</span>
                </div>
              </div>
              <div className="pricing-table-body">
                <ul>
                  <li>
                    <i className="fa fa-check" />
                    <span>Custom Web Development (Frontend & Backend)</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>Database Integration</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>
                      Advanced Web Application Features (Interactive multimedia,
                      user authentication)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>Custom API Integration</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>E-commerce Functionality (Optional)</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>
                      Powerful Admin Panel (For content and user management)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>3 Months Free Maintenance & Support</span>
                  </li>
                </ul>
              </div>
              <div className="btn-part">
                <a
                  onClick={() =>
                    trackEvent("NoRiskSlotReservation", {
                      from: "No Risk Plan slot clicked",
                    })
                  }
                  className="readon buy-now"
                  href="https://forms.gle/t3DWM7pHoqNw7BCb7"
                >
                  1 Slots Left
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-table">
              <div className="pricing-badge">Business</div>
              <div className="pricing-icon">
                <img
                  src={
                    "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755553252/Nanosoft/Services/3_lmd9wh.png"
                  }
                  alt={"Platinum Plan Icon"}
                />
              </div>
              <div className="pricing-table-price">
                <div className="pricing-table-bags">
                  <span className="pricing-currency">$</span>
                  <span className="table-price-text">7,990</span>
                  <span className="table-period">Monthly Package</span>
                </div>
              </div>
              <div className="pricing-table-body">
                <ul>
                  <li>
                    <i className="fa fa-check" />
                    <span>Custom CRM/SRM Software Development</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>
                      Advanced Features (Client management, task management,
                      financial tracking)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>
                      Third-Party Integrations (Payment gateways, email
                      services)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>
                      Mobile App Integration (Android options available)
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>Admin Dashboard for System Control</span>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <span>Priority Maintenance & Support (3 Months Free)</span>
                  </li>
                </ul>
              </div>
              <div className="btn-part">
                <a
                  onClick={() =>
                    trackEvent("BusinessSlotReservation", {
                      from: "Business Plan slot clicked",
                    })
                  }
                  className="readon buy-now"
                  href="https://forms.gle/t3DWM7pHoqNw7BCb7"
                >
                  3 Slots Left
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
