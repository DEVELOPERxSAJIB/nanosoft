import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RxCross1 } from "react-icons/rx";
import PageTitle from "../components/PageTitle";
import Portfolio from "../components/Home/Portfolio";
import Testimonial from "../components/Home/Testimonial";
import AboutUs from "../components/AboutUs";

const Home = () => {
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
              <div className="col-lg-7 col-md-12 pr-140 md-mb-40 md-pr-15">
                <div className="banner-content">
                  <h2 className="title">
                    We Build Software that Shapes Tomorrow
                  </h2>
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
        <AboutUs />
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
                            <Link to="/services/web-development">
                              Web Development
                            </Link>
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
                            <Link to="/services/web-development">
                              Web Development
                            </Link>
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
                          <Link
                            className="readon view-more"
                            to="/services/web-development"
                          >
                            Learn More
                            <span className="visually-hidden">
                              {" "}
                              about Web Development
                            </span>
                          </Link>
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
                            <Link to="/services/software-development">
                              Software Development
                            </Link>
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
                            <Link to="/services/software-development">
                              Software Development
                            </Link>
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
                          <Link
                            className="readon view-more"
                            to="/services/software-development"
                          >
                            Learn More
                            <span className="visually-hidden">
                              {" "}
                              about Software Development
                            </span>
                          </Link>
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
                            <Link to="/services/custom-crm-srm">
                              Custom CRM/SRM
                            </Link>
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
                            <Link to="/services/custom-crm-srm">
                              Custom CRM/SRM
                            </Link>
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
                          <Link
                            className="readon view-more"
                            to="/services/custom-crm-srm"
                          >
                            Learn More
                            <span className="visually-hidden">
                              {" "}
                              about Custom CRM/SRM
                            </span>
                          </Link>
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
                            <Link to="/services/ecommerce-development">
                              E-commerce Development
                            </Link>
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
                            <Link to="/services/ecommerce-development">
                              E-commerce Development
                            </Link>
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
                          <Link
                            className="readon view-more"
                            to="/services/ecommerce-development"
                          >
                            Learn More
                            <span className="visually-hidden">
                              {" "}
                              about E-commerce Development
                            </span>
                          </Link>
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
                            <Link to="/services/cloud-and-devops">
                              Cloud and DevOps
                            </Link>
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
                            <Link to="/services/cloud-and-devops">
                              Cloud and DevOps
                            </Link>
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
                          <Link
                            className="readon view-more"
                            to="/services/cloud-and-devops"
                          >
                            Learn More
                            <span className="visually-hidden">
                              {" "}
                              about Cloud and DevOps
                            </span>
                          </Link>
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
                            <Link to="/services/web-design">
                              Website Design
                            </Link>
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
                            <Link to="/services/web-design">
                              Website Design
                            </Link>
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
                          <Link
                            className="readon view-more"
                            to="/services/web-design"
                          >
                            Learn More
                            <span className="visually-hidden">
                              {" "}
                              about Website Design
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service End */}

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
                    <h3 className="title">Software</h3>
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

        {/* Portfolio Section Start */}
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
        {/* Portfolio Section End */}

        {/* Process Start */}
        <div
          style={{ background: "#F6F7F9" }}
          className="rs-process style2 pt-80 pb-80 md-pt-60 md-pb-60"
        >
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

        {/* Testimonail Section Start */}
        <div>
          <div className="rs-technology style2 pt-80 pb-115 md-pt-75 md-pb-80">
            <div className="container">
              <div className="sec-title2 text-center mb-45">
                <span className="sub-text style-bg">TESTIMONIAL</span>
                <h2 className="title">What our happy user says!</h2>
              </div>

              <Testimonial bg={"#F6F7F9"} />
            </div>
          </div>
        </div>
        {/* Testimonial Section End */}

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
                        We&rsquo;d Love to Hear From You!
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
      </Layout>
    </>
  );
};

export default Home;
