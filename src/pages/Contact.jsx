import { useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { RxCross1 } from "react-icons/rx";
import PageTitle from "../components/PageTitle";

const Contact = () => {

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
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
    reset: resetContactForm,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const contactForm = useRef();

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
      <PageTitle title={"NanoSoft - Contact Us"}/>
        {/* Breadcrumbs Start */}
        <div className="rs-breadcrumbs img6">
          <div className="breadcrumbs-inner text-center">
            <h1 className="page-title">Contact</h1>
            <ul>
              <li title="">
                <Link className="active" to={"/"}>
                  Home
                </Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        {/* Breadcrumbs End */}
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
                            {contactLoading ? "Sending Email . . ." : "Submit Now"}
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
      </Layout>
    </>
  );
};

export default Contact;
