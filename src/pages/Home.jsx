import Layout from "../components/Layout/Layout";
import banner4 from "../assets/images/banner/banner-4.png";

import tech1png from "../assets/images/technology/style3/1.png";
import tech2png from "../assets/images/technology/style3/2.png";
import tech3png from "../assets/images/technology/style3/image.png";
import tech4png from "../assets/images/technology/style3/real-state.png";
import tech5png from "../assets/images/technology/style3/travel.png";
import tech6png from "../assets/images/technology/style3/6.png";
import tech7png from "../assets/images/technology/style3/7.png";
import tech8png from "../assets/images/technology/style3/event.png";
import tech9png from "../assets/images/technology/style3/9.png";
import tech10png from "../assets/images/technology/style3/10.png";

import tech11png from "../assets/images/technology/style4/main-img/1.png";
import tech12png from "../assets/images/technology/style4/main-img/2.png";
import tech13png from "../assets/images/technology/style4/main-img/3.png";
import tech14png from "../assets/images/technology/style4/main-img/4.png";
import tech15png from "../assets/images/technology/style4/main-img/5.png";
import tech16png from "../assets/images/technology/style4/main-img/6.png";
import techHover11png from "../assets/images/technology/style4/hover-img/1.png";
import techHover12png from "../assets/images/technology/style4/hover-img/2.png";
import techHover13png from "../assets/images/technology/style4/hover-img/3.png";
import techHover14png from "../assets/images/technology/style4/hover-img/4.png";
import techHover15png from "../assets/images/technology/style4/hover-img/5.png";
import techHover16png from "../assets/images/technology/style4/hover-img/6.png";

import aboutEffect1 from "../assets/images/about/effect-1.png";
import about3 from "../assets/images/about/about-3.png";
import dotted3 from "../assets/images/about/dotted-3.png";
import shape3 from "../assets/images/about/shape3.png";

import service1 from "../assets/images/services/main-home/icons/1.png";
import service2 from "../assets/images/services/main-home/icons/2.png";
import service3 from "../assets/images/services/main-home/icons/3.png";
import service4 from "../assets/images/services/main-home/icons/4.png";
import service5 from "../assets/images/services/main-home/icons/5.png";
import service6 from "../assets/images/services/main-home/icons/6.png";
import imgS2 from "../assets/images/services/s2.png";

import process1 from "../assets/images/process/disc.png";
import process2 from "../assets/images/process/pencil.png";
import process3 from "../assets/images/process/tree.jpg";
import process4 from "../assets/images/process/cal.svg";

import { Link, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RxCross1 } from "react-icons/rx";
import PageTitle from "../components/PageTitle";
import Portfolio from "../components/Home/Portfolio";
import Testimonial from "../components/Home/Testimonial";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  // const options = {
  //   loop: true,
  //   margin: 30,
  //   autoplay: true,
  //   autoplayTimeout: 5000,
  //   smartSpeed: 800,
  //   dots: true,
  //   nav: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    message: yup
      .string("Optional")
      .max(500, "Message cannot exceed 500 characters"),
    phone: yup.string().required("Phone number is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const contactSchema = yup.object().shape({
    firstName: yup.string().required("Fist name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    message: yup
      .string("Optional")
      .max(500, "Message cannot exceed 500 characters"),
  });

  // const heroSectionRef = useRef(null);

  // const scrollToHeroSection = () => {
  //   heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // second form
  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
    reset: resetContactForm,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const form = useRef();
  const contactForm = useRef();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [successMessage, setSucessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .sendForm("service_3kfcfro", "template_egs2j9b", form.current, {
        publicKey: "GAQ_Vq4tSYF9xubIj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSucessMessage(true);
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const [contactLoading, setContactLoading] = useState(false);
  const [successMessageContact, setSucessMessageContact] = useState(false);

  const sendContactEmail = () => {
    setContactLoading(true);
    emailjs
      .sendForm("service_3kfcfro", "template_zm4w45p", contactForm.current, {
        publicKey: "GAQ_Vq4tSYF9xubIj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSucessMessageContact(true);
          resetContactForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setContactLoading(false);
      });
  };

  return (
    <>
      <Layout>
        <PageTitle
          title="NanoSoft - Home"
          description="NanoSoft is your trusted partner for innovative software solutions. We deliver tailored web and software development services worldwide."
        />
        {/* Bannar Start */}
        <div className="rs-banner style3 rs-rain-animate modify1">
          <div className="container">
            <div
              style={{ padding: "120px 0" }}
              className="row d-flex align-items-center"
            >
              <div className="col-lg-7 col-md-12 pr-140 md-mb-140 md-pr-15">
                <div className="banner-content">
                  <h1 className="title">
                    We Build Software that Shapes Tomorrow
                  </h1>
                  <p className="desc">
                    We deliver top-notch web solutions worldwide, driving
                    success with creativity and technical mastery.
                  </p>
                  {/* Buttons and videos commented out */}
                </div>
              </div>
              <div className="col-lg-5 col-md-12 pl-70 md-pl-15">
                <div className="rs-contact">
                  <div className="contact-wrap">
                    {successMessage ? (
                      <div
                        className="d-flex justify-content-between alert alert-success text-center"
                        role="alert"
                      >
                        {successMessage ? (
                          <span
                            className="text-success"
                            style={{ fontWeight: "700" }}
                          >
                            Thanks for contacting us. You will get an email from
                            us soon.
                          </span>
                        ) : null}
                        <span
                          role="button"
                          aria-label="Close success message"
                          style={{ cursor: "pointer", paddingLeft: "3px" }}
                          onClick={() => setSucessMessage(false)}
                        >
                          <RxCross1 color="#000" />
                        </span>
                      </div>
                    ) : (
                      <div className="content-part mb-25">
                        <h2 className="title mb-15">
                          Schedule Your Appointment!
                        </h2>
                        <p className="desc">
                          Our experts are available 24/7 to assist you.
                        </p>
                      </div>
                    )}

                    <div id="appointment-messages" />
                    <form
                      ref={form}
                      onSubmit={handleSubmit(sendEmail)}
                      id="appointment-form"
                      aria-label="Schedule an appointment form"
                    >
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-12 mb-15">
                            <label
                              htmlFor="appointment_name"
                              className="sr-only"
                            >
                              Name
                            </label>
                            <input
                              className="from-control"
                              type="text"
                              id="appointment_name"
                              placeholder="Name"
                              aria-required="true"
                              {...register("name")}
                            />
                            {errors.name && (
                              <div className="text-danger pl-2" role="alert">
                                {errors.name.message} *
                              </div>
                            )}
                          </div>
                          <div className="col-lg-12 mb-15">
                            <label
                              htmlFor="appointment_email"
                              className="sr-only"
                            >
                              Email
                            </label>
                            <input
                              className="from-control"
                              type="email"
                              id="appointment_email"
                              placeholder="E-Mail"
                              aria-required="true"
                              {...register("email")}
                            />
                            {errors.email && (
                              <div className="text-danger pl-2" role="alert">
                                {errors.email.message} *
                              </div>
                            )}
                          </div>
                          <div className="col-lg-12 mb-15">
                            <label
                              htmlFor="appointment_phone"
                              className="sr-only"
                            >
                              Phone
                            </label>
                            <input
                              className="from-control"
                              type="tel"
                              id="appointment_phone"
                              placeholder="Phone"
                              aria-required="true"
                              {...register("phone")}
                            />
                            {errors.phone && (
                              <div className="text-danger pl-2" role="alert">
                                {errors.phone.message} *
                              </div>
                            )}
                          </div>
                          <div className="col-lg-12 mb-25">
                            <label
                              htmlFor="appointment_message"
                              className="sr-only"
                            >
                              Your Message
                            </label>
                            <input
                              className="from-control"
                              type="text"
                              id="appointment_message"
                              placeholder="Your Message"
                              aria-required="true"
                              {...register("message")}
                            />
                            {errors.message && (
                              <div className="text-danger pl-2" role="alert">
                                {errors.message.message} *
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <button className="submit-btn" type="submit">
                            {loading ? "Sending Email . . ." : "Submit Now"}
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="line-inner style2">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
        {/* Bannar End */}

        {/* About Start */}
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
                      help our clients streamline operations, boost
                      productivity, and achieve their goals. Our approach
                      combines innovation, dedication, and a deep understanding
                      of industry needs to deliver exceptional results.
                    </div>
                    <div className="desc pb-35">
                      We pride ourselves on building long-lasting partnerships
                      with our clients, focusing on their unique challenges and
                      turning them into opportunities for growth. Let’s work
                      together to bring your vision to life and pave the way for
                      a successful future.
                    </div>
                  </div>
                  <div className="btn-part">
                    <Link
                      to="/about"
                      className="readon learn-more"
                      title="Learn more about NanoSoft"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Uncomment and add alt if you bring these shapes back */}
            {/* <div className="shape-image">
      <img className="top dance" src={dotted3} alt="Decorative dotted shape" />
      <img className="bottom dance" src={shape3} alt="Decorative shape" />
    </div> */}
          </div>
        </div>
        {/* About End */}

        {/* Service Start */}
        <div
          className="rs-services style2 pt-80 pb-80 md-pt-60 md-pb-60"
          style={{ background: "inherit" }}
        >
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">Services</span>
              <h2 className="title">
                Your Trusted IT Partner for Innovative Solutions
              </h2>
            </div>
            <div className="row" role="list">
              {/* Web Development */}
              <div className="col-lg-4 col-md-6 mb-25" role="listitem">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img
                              src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754907565/Nanosoft/Home/Services/2_sagcqn.png"
                              alt="Web Development Icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a
                              href="web-development.html"
                              title="Web Development Services"
                            >
                              Web Development
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We create engaging and responsive websites that
                            enhance user experience and drive business growth.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a
                              href="web-development.html"
                              title="Learn More About Web Development Services"
                            >
                              Web Development
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            Our web development services focus on building
                            dynamic, user-friendly websites that effectively
                            represent your brand and grow your business online.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="web-development.html"
                            title="Learn More About Web Development"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Software Development */}
              <div className="col-lg-4 col-md-6 mb-25" role="listitem">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img
                              src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754907564/Nanosoft/Home/Services/1_uc2mbb.png"
                              alt="Software Development Icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a
                              href="software-development.html"
                              title="Software Development Services"
                            >
                              Software Development
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            We deliver custom, scalable software that drives
                            efficiency and success in the digital world.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a
                              href="software-development.html"
                              title="Learn More About Software Development"
                            >
                              Software Development
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            Our software development services are tailored to
                            meet your business needs, providing scalable and
                            secure solutions focused on innovation and
                            efficiency.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="software-development.html"
                            title="Learn More About Software Development"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom CRM/SRM */}
              <div className="col-lg-4 col-md-6 mb-25" role="listitem">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img
                              src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754907566/Nanosoft/Home/Services/3_lubj46.png"
                              alt="Custom CRM/SRM Icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a
                              href="analytic-solutions.html"
                              title="Custom CRM and SRM Solutions"
                            >
                              Custom CRM/SRM
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Tailored CRM/SRM solutions to enhance customer
                            relationships and streamline management.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a
                              href="analytic-solutions.html"
                              title="Learn More About Custom CRM/SRM"
                            >
                              Custom CRM/SRM
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            Our Custom CRM/SRM services provide powerful tools
                            to manage interactions, track customer data, and
                            drive growth. Learn how we can transform your
                            business operations.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="analytic-solutions.html"
                            title="Learn More About Custom CRM/SRM"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* E-commerce Development */}
              <div className="col-lg-4 col-md-6" role="listitem">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img
                              src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754907564/Nanosoft/Home/Services/5_szr8lc.png"
                              alt="E-commerce Development Icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a
                              href="data-center.html"
                              title="E-commerce Development Services"
                            >
                              E-commerce Development
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            This solutions designed to create engaging online
                            stores that boost sales and enhance user experience.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a
                              href="data-center.html"
                              title="Learn More About E-commerce Development"
                            >
                              E-commerce Development
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            Our e-commerce development services deliver tailored
                            platforms for seamless transactions and customer
                            satisfaction, helping your business succeed online.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="data-center.html"
                            title="Learn More About E-commerce Development"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud and DevOps */}
              <div className="col-lg-4 col-md-6 md-mb-25" role="listitem">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img
                              src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754907567/Nanosoft/Home/Services/4_ftv9jy.png"
                              alt="Cloud and DevOps Icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a
                              href="cloud-and-devops.html"
                              title="Cloud and DevOps Services"
                            >
                              Cloud and DevOps
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Streamline your operations with our Cloud and DevOps
                            solutions, designed to enhance scalability and
                            efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a
                              href="cloud-and-devops.html"
                              title="Learn More About Cloud and DevOps"
                            >
                              Cloud and DevOps
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            Our Cloud and DevOps services optimize
                            infrastructure, automate processes, and improve
                            deployment speed, driving your business forward.
                            Discover how we can help you scale efficiently.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="cloud-and-devops.html"
                            title="Learn More About Cloud and DevOps"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Design */}
              <div className="col-lg-4 col-md-6 sm-mb-25" role="listitem">
                <div className="flip-box-inner">
                  <div className="flip-box-wrap">
                    <div className="front-part">
                      <div className="front-content-part">
                        <div className="front-icon-part">
                          <div className="icon-part">
                            <img
                              src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754907564/Nanosoft/Home/Services/6_scwu73.png"
                              alt="Website Design Icon"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="front-title-part">
                          <h3 className="title">
                            <a
                              href="/services/web-design"
                              title="Website Design Services"
                            >
                              Website Design
                            </a>
                          </h3>
                        </div>
                        <div className="front-desc-part">
                          <p>
                            Creative website design solutions that captivate
                            users and represent your brand with style.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="back-front">
                      <div className="back-front-content">
                        <div className="back-title-part">
                          <h3 className="back-title">
                            <a
                              href="/services/web-design"
                              title="Learn More About Website Design"
                            >
                              Website Design
                            </a>
                          </h3>
                        </div>
                        <div className="back-desc-part">
                          <p className="back-desc">
                            Our website design services focus on creating
                            visually stunning and user-friendly websites that
                            leave a lasting impression. Get in touch to bring
                            your vision to life.
                          </p>
                        </div>
                        <div className="back-btn-part">
                          <a
                            className="readon view-more"
                            href="/services/web-design"
                            title="Learn More About Website Design"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="shape-animation">
    <div className="shape-part">
      <img className="dance" src="" alt="Decorative shape animation" />
    </div>
  </div> */}
        </div>
        {/* Service End */}

        {/* Process Start */}
        <div className="rs-process style2 pb-120 md-pt-80 md-pb-73">
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">Process</span>
              <h2 className="title title2">Our Working Process</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 md-mb-50">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <img
                        src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754919439/Nanosoft/Home/Process/disc_onmewc.png"
                        alt="Discovery process icon"
                        title="Discovery phase of the project"
                      />
                    </div>
                    <div className="process-text">
                      <h3 className="title">Discovery</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 md-mb-50">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <img
                        src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754919440/Nanosoft/Home/Process/pencil_oquxrx.png"
                        alt="Project planning icon"
                        title="Planning stage of the project"
                      />
                    </div>
                    <div className="process-text">
                      <h3 className="title">Planning</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div className="process-img">
                      <img
                        style={{
                          filter:
                            "sepia(70) saturate(120%) brightness(90%) hue-rotate(90deg)",
                        }}
                        src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754919442/Nanosoft/Home/Process/tree_ssrusu.jpg"
                        alt="Execution process graphic"
                        title="Execution phase of the project"
                      />
                    </div>
                    <div className="process-text">
                      <h3 className="title">Execute</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="addon-process">
                  <div className="process-wrap">
                    <div
                      className="process-img"
                      style={{
                        height: "20.5rem",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754919438/Nanosoft/Home/Process/cal_emyupk.svg"
                        alt="Project delivery icon"
                        title="Deliverables phase of the project"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                    <div className="process-text">
                      <h3 className="title">Deliver</h3>
                    </div>
                  </div>
                </div>
                <style>
                  {`
        @media (min-width: 1024px) {
          .process-img {
            height: 17.5rem !important;
          }
        }
      `}
                </style>
              </div>
            </div>
          </div>
        </div>
        {/* Process End */}

        {/* Industry Start */}
        <div
          style={{ background: "#F6F7F9" }}
          className="rs-industry pt-80 pb-80 md-pt-60 md-pb-60"
        >
          <div className="container">
            <div className="sec-title2 text-center mb-45">
              <span className="sub-text style-bg">Industry Solutions</span>
              <h2 className="title">
                Delivering the Best to Every Organization
              </h2>
            </div>
            <div className="all-services" role="list">
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913700/Nanosoft/Home/Industry/1_ekgz5k.png"
                      alt="Software Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Software</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913700/Nanosoft/Home/Industry/2_v6qusw.png"
                      alt="E-commerce Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">E-commerce</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913707/Nanosoft/Home/Industry/image_qmuq8g.png"
                      alt="Healthcare Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Healthcare</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913708/Nanosoft/Home/Industry/real-state_pmp5dy.png"
                      alt="Real Estate Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Real Estate</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913703/Nanosoft/Home/Industry/9_kfyhwt.png"
                      alt="Manufacturing Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Manufacturing</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913705/Nanosoft/Home/Industry/10_zbeuce.png"
                      alt="Logistics Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Logistics</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913709/Nanosoft/Home/Industry/travel_rs5bmx.png"
                      alt="Travel Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Travel</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913701/Nanosoft/Home/Industry/6_wv7iba.png"
                      alt="News Portal Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">News Portal</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913702/Nanosoft/Home/Industry/7_xelxgi.png"
                      alt="Entertainment Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Entertainment</h4>
                  </div>
                </div>
              </div>
              <div className="services-item" role="listitem">
                <div className="services-wrap">
                  <div className="services-icon">
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754913706/Nanosoft/Home/Industry/event_tcwtns.png"
                      alt="Events Industry Solutions"
                      loading="lazy"
                    />
                  </div>
                  <div className="services-text">
                    <h4 className="title">Events</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Industry End */}

        {/* Technology Section Start */}
        <div>
          <div className="rs-technology style2 pt-110 pb-115 md-pt-75 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text style-bg">Our Portfolio</span>
                <h2 className="title">
                  Showcasing Our Full-Stack Development Work
                </h2>
              </div>

              <Portfolio />
            </div>
          </div>
        </div>
        {/* Technology Section End */}
        {/* Technology Section Start */}
        <div>
          <div className="rs-technology style2 pb-115 md-pt-75 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text style-bg">TESTIMONIAL</span>
                <h2 className="title">What our happy user says!</h2>
              </div>

              <Testimonial />
            </div>
          </div>
        </div>
        {/* Technology Section End */}

        {/* Contact section Start */}
        <div
          id="rs-contact"
          className="rs-contact gray-color pt-80 pb-80 md-pt-60"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-box">
                  <div className="sec-title mb-45">
                    <span
                      style={{ padding: "0" }}
                      className="sub-text style-bg white-color"
                    >
                      Let&quot;s Talk
                    </span>
                    <h2 className="title white-color">
                      Talk with Our Expert Engineers!
                    </h2>
                  </div>

                  <div className="address-box mb-25">
                    <div className="address-icon">
                      <i className="fa fa-home" />
                    </div>
                    <div className="address-text">
                      <span className="label">Email:</span>
                      <a href="mailto:123222-8888">contact@nanosoft.agency</a>
                    </div>
                  </div>
                  <div className="address-box mb-25">
                    <div className="address-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="address-text">
                      <span className="label">Phone:</span>
                      <a href="tel:01789557538">01789557538</a>
                    </div>
                  </div>
                  <div className="address-box">
                    <div className="address-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="address-text">
                      <span className="label">Address:</span>
                      <div className="desc">19 South Tootpara, Khulna</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 pl-70 md-pl-15 md-mt-40">
                <div className="contact-widget onepage-style">
                  <div className="sec-title2 mb-40">
                    <span className="sub-text style-bg contact mb-15">
                      Contact Us
                    </span>
                    {successMessageContact ? (
                      <div className="d-flex mt-3 justify-content-between alert alert-success text-center">
                        <span
                          className="text-success"
                          style={{ fontWeight: "700px" }}
                        >
                          Thanks for contac with us. You will get an Email from
                          us soon.
                        </span>

                        <span
                          style={{ cursor: "pointer", paddingLeft: "3px" }}
                          onClick={() => setSucessMessageContact(false)}
                        >
                          <RxCross1 color="#000" />
                        </span>
                      </div>
                    ) : (
                      <h2 className="title testi-title">
                        We'd Love to Hear From You!
                      </h2>
                    )}
                  </div>
                  <div id="form-messages" />
                  <form
                    ref={contactForm}
                    onSubmit={handleSubmitContact(sendContactEmail)}
                    id="contact-form"
                  >
                    <fieldset>
                      <div className="row">
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="name"
                            placeholder="First Name"
                            {...registerContact("firstName")}
                          />
                          {contactErrors.firstName && (
                            <div className="text-danger pl-2">
                              {contactErrors.firstName.message} *
                            </div>
                          )}
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="name"
                            placeholder="Last Name"
                            {...registerContact("lastName")}
                          />
                          {contactErrors.lastName && (
                            <div className="text-danger pl-2">
                              {contactErrors.lastName.message} *
                            </div>
                          )}
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="email"
                            placeholder="E-Mail"
                            {...registerContact("email")}
                          />
                          {contactErrors.email && (
                            <div className="text-danger pl-2">
                              {contactErrors.email.message} *
                            </div>
                          )}
                        </div>
                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                          <input
                            className="from-control"
                            type="text"
                            id="phone"
                            placeholder="Phone Number"
                            {...registerContact("phone")}
                          />
                          {contactErrors.phone && (
                            <div className="text-danger pl-2">
                              {contactErrors.phone.message} *
                            </div>
                          )}
                        </div>
                        <div className="col-lg-12 mb-30">
                          <textarea
                            className="from-control"
                            id="message"
                            placeholder="Your message Here"
                            {...registerContact("message")}
                          />
                          {contactErrors.message && (
                            <div className="text-danger pl-2">
                              {contactErrors.message.message} *
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="btn-part">
                        <div className="form-group mb-0">
                          <button
                            className="readon learn-more submit"
                            type="submit"
                          >
                            {contactLoading
                              ? "Sending Email . . ."
                              : "Submit Now"}
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="map-canvas pt-120 md-pt-70">
            <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div> */}
        </div>
        {/* Contact section End */}

        {/* CTA Start */}
        <div className="rs-cta style1 bg7 pt-70 pb-70">
          <div className="container">
            <div className="cta-wrap">
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-12 md-pr-0 pr-148 md-pl-15 md-mb-30 md-center">
                  <div className="title-wrap">
                    <h2 className="epx-title">
                      Grow Your Business and Build Your Website or Software With
                      us.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 text-righ">
                  <div className="button-wrapt md-center">
                    <Link className="readon learn-more" to="/contact">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA End */}

        {/* Partner Section Start */}
        {/* <div className="rs-partner pt-80 pb-70">
          <div className="container">
            <div
              className="rs-carousel owl-carousel"
              data-loop="true"
              data-items={5}
              data-margin={30}
              data-autoplay="true"
              data-hoverpause="true"
              data-autoplay-timeout={5000}
              data-smart-speed={800}
              data-dots="false"
              data-nav="false"
              data-nav-speed="false"
              data-center-mode="false"
              data-mobile-device={2}
              data-mobile-device-nav="false"
              data-mobile-device-dots="false"
              data-ipad-device={3}
              data-ipad-device-nav="false"
              data-ipad-device-dots="false"
              data-ipad-device2={3}
              data-ipad-device-nav2="false"
              data-ipad-device-dots2="false"
              data-md-device={5}
              data-md-device-nav="false"
              data-md-device-dots="false"
            >
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner1}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner1}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner2}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner2}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner3}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner3}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner4}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner4}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src={partner5}
                      alt
                    />
                    <img
                      className="main-logo"
                      src={partner5}
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/6.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/6.png"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/7.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/7.png"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/8.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/8.png"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="partner-item">
                <div className="logo-img">
                  <a href="https://rstheme.com/">
                    <img
                      className="hover-logo"
                      src="assets/images/partner/9.png"
                      alt
                    />
                    <img
                      className="main-logo"
                      src="assets/images/partner/9.png"
                      alt
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Partner Section End */}
      </Layout>
    </>
  );
};

export default Home;
