import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="rs-about gray-color pt-80 pb-80 md-pt-40 md-pb-40">
        <div className="container">
          <div className="sec-title2 text-center mb-45">
            <span className="sub-text style-bg">About Us</span>
            <h2 className="title">
              Empowering Business Growth with Technology
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 md-mb-30">
              <div className="rs-animation-shape">
                <div className="images" style={{}}>
                  <img
                    src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754833544/Nanosoft/Home/about_rzkzek.jpg"
                    alt="Team collaborating on innovative software solutions"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "50%",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="middle-image2">
                  <img
                    className="dance"
                    src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754833802/Nanosoft/Home/effect-1_iuv8g4.png"
                    alt="Animated decorative technology effect"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-60 md-pl-15">
              <div className="contact-wrap">
                <div className="sec-title mb-30">
                  <div className="desc pb-35">
                    At NanoSoft, we are passionate about leveraging technology
                    to drive business success. We specialize in developing
                    tailored software solutions and mobile applications that
                    help our clients streamline operations, boost productivity,
                    and achieve their goals. Our approach combines innovation,
                    dedication, and a deep understanding of industry needs to
                    deliver exceptional results.
                  </div>
                  <div className="desc pb-35">
                    We pride ourselves on building long-lasting partnerships
                    with our clients, focusing on their unique challenges and
                    turning them into opportunities for growth. Let’s work
                    together to bring your vision to life and pave the way for a
                    successful future.
                  </div>
                </div>
                <div className="btn-part">
                  <Link to="/about" className="readon learn-more">
                    Learn More About NanoSoft
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
