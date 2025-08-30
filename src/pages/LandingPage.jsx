import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RxCross1 } from "react-icons/rx";

// NanoSoft Brand Colors
const COLORS = {
  primary: "#3771CF",
  secondary: "#173EA5",
  accent: "#052592",
  light: "#F6F7F9",
  dark: "#061340",
};

const LandingPage = () => {
  // Validation schema
  const schema = yup.object().shape({
    name: yup.string().required("Your name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    company: yup.string().required("Company name is required"),
    service: yup.string().required("Please select a service"),
    message: yup.string().max(500, "Message too long"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .sendForm("service_3kfcfro", "template_zm4w45p", formRef.current, {
        publicKey: "GAQ_Vq4tSYF9xubIj",
      })
      .then(() => {
        setSuccess(true);
        reset();
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <PageTitle
        title="NanoSoft - AI Software Solutions, Web & Mobile Apps, Digital Transformation"
        description="NanoSoft delivers AI-powered software, web and mobile apps, and digital transformation for businesses. Get a free consultation and accelerate your growth."
        keywords="NanoSoft, AI software, web development, mobile apps, digital transformation, cloud solutions, automation, business software"
        canonical="https://nanosoft.com/"
        ogTitle="NanoSoft - AI Software Solutions"
        ogDescription="Accelerate your business with NanoSoft's AI-powered software, web & mobile apps, and digital transformation services."
        ogUrl="https://nanosoft.com/"
        ogImage="https://nanosoft.com/og-image.jpg"
        twitterCard="summary_large_image"
        twitterTitle="NanoSoft - AI Software Solutions"
        twitterDescription="Accelerate your business with NanoSoft's AI-powered software, web & mobile apps, and digital transformation services."
        twitterImage="https://nanosoft.com/og-image.jpg"
      />

      {/* Hero Section */}
      <section
        className="hero-area text-center d-flex align-items-center"
        style={{
          minHeight: "80vh",
          background: `linear-gradient(280deg, ${COLORS.primary} 60%, ${COLORS.secondary} 100%)`,
          color: "#fff",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <h1
            className="fw-bold display-3 mb-4"
            style={{
              color: "#fff",
              textShadow: "0 2px 16px rgba(55,113,207,0.18)",
              letterSpacing: "1px",
            }}
          >
            AI-Powered Software Solutions for Tomorrow
          </h1>
          <p
            className="lead mb-4"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.35rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            From web & mobile apps to intelligent automation – NanoSoft builds
            digital solutions that drive business growth.
          </p>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLScLJbYeWnOwNS4mw5yOBjvzmLGiUlF4FqSVp0rdwpYlDH7GoA/viewform?usp=header"
            className="btn btn-lg"
            style={{
              background: COLORS.accent,
              color: "#fff",
              borderRadius: "30px",
              padding: "14px 38px",
              fontWeight: 600,
              fontSize: "1.15rem",
              boxShadow: "0 4px 24px rgba(5,37,146,0.12)",
              border: "none",
            }}
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-5"
        style={{
          background: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1754833544/Nanosoft/Home/about_rzkzek.jpg"
                alt="NanoSoft Team"
                className="img-fluid rounded shadow"
                loading="lazy"
                width="540"
                height="340"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: COLORS.primary }}>
                About NanoSoft
              </h2>
              <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                NanoSoft is a leading provider of AI-powered software solutions,
                web and mobile app development, and digital transformation
                services. Our mission is to help businesses leverage technology
                for growth, efficiency, and innovation.
              </p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">
                  <span style={{ color: COLORS.accent, fontWeight: 600 }}>
                    ✓
                  </span>{" "}
                  10+ years of experience
                </li>
                <li className="mb-2">
                  <span style={{ color: COLORS.accent, fontWeight: 600 }}>
                    ✓
                  </span>{" "}
                  50+ successful projects
                </li>
                <li className="mb-2">
                  <span style={{ color: COLORS.accent, fontWeight: 600 }}>
                    ✓
                  </span>{" "}
                  Trusted by startups & enterprises
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section
        className="py-5"
        style={{
          background: COLORS.light,
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: COLORS.dark }}>
              Custom Offers for Businesses
            </h2>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Tailored solutions designed to fit your needs
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 mb-4">
              <div
                className="card h-100 border-0 shadow"
                style={{
                  borderRadius: "18px",
                  background: "#fff",
                }}
              >
                <div className="card-body text-center">
                  <h4 className="fw-bold" style={{ color: COLORS.primary }}>
                    Starter Package
                  </h4>
                  <p className="text-muted">
                    For small businesses – website + hosting + basic AI
                    automation.
                  </p>
                  <p
                    className="fw-bold"
                    style={{
                      color: COLORS.accent,
                      fontSize: "1.3rem",
                      marginBottom: 0,
                    }}
                  >
                    $999
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="card h-100 border-0 shadow"
                style={{
                  borderRadius: "18px",
                  background: "#fff",
                }}
              >
                <div className="card-body text-center">
                  <h4 className="fw-bold" style={{ color: COLORS.primary }}>
                    Growth Package
                  </h4>
                  <p className="text-muted">
                    For scaling companies – web application + CRM with AI
                    insights.
                  </p>
                  <p
                    className="fw-bold"
                    style={{
                      color: COLORS.accent,
                      fontSize: "1.3rem",
                      marginBottom: 0,
                    }}
                  >
                    $2,999
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="card h-100 border-0 shadow"
                style={{
                  borderRadius: "18px",
                  background: "#fff",
                }}
              >
                <div className="card-body text-center">
                  <h4 className="fw-bold" style={{ color: COLORS.primary }}>
                    Enterprise Package
                  </h4>
                  <p className="text-muted">
                    Full-scale digital transformation powered by AI & cloud.
                  </p>
                  <p
                    className="fw-bold"
                    style={{
                      color: COLORS.accent,
                      fontSize: "1.3rem",
                      marginBottom: 0,
                    }}
                  >
                    Custom Pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with AI */}
      <section
        className="py-5"
        style={{
          background: "#fff",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: COLORS.primary }}>
            Our AI-Enhanced Services
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div
                className="p-4 h-100"
                style={{
                  background: COLORS.light,
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(55,113,207,0.07)",
                }}
              >
                <h5 className="fw-bold" style={{ color: COLORS.accent }}>
                  Web Development
                </h5>
                <p className="text-muted">
                  Fast, responsive, and optimized websites with AI-driven SEO
                  and analytics.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="p-4 h-100"
                style={{
                  background: COLORS.light,
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(55,113,207,0.07)",
                }}
              >
                <h5 className="fw-bold" style={{ color: COLORS.accent }}>
                  AI Automation
                </h5>
                <p className="text-muted">
                  Streamline workflows with intelligent bots, chat assistants,
                  and predictive systems.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="p-4 h-100"
                style={{
                  background: COLORS.light,
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(55,113,207,0.07)",
                }}
              >
                <h5 className="fw-bold" style={{ color: COLORS.accent }}>
                  Cloud Solutions
                </h5>
                <p className="text-muted">
                  Scalable infrastructure with smart monitoring powered by
                  machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="py-5"
        style={{
          background: COLORS.light,
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: COLORS.primary }}>
              Recent Projects
            </h2>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Explore some of our latest work for clients
            </p>
          </div>
          <div className="row">
            {/* Example portfolio cards */}
            <div className="col-md-4 mb-4 d-flex">
              <div
                className="card border-0 shadow-sm h-100 d-flex flex-column"
                style={{
                  borderRadius: "18px",
                  minHeight: "480px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    borderTopLeftRadius: "18px",
                    borderTopRightRadius: "18px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755264011/Nanosoft/Home/Portfolio/Screenshot_1_avxina.png"
                    alt="E-commerce AI Platform"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold" style={{ color: COLORS.accent }}>
                    E-commerce AI Platform
                  </h5>
                  <p className="text-muted mb-2">
                    Boosted sales for a retail client with AI-driven
                    recommendations and analytics.
                  </p>
                  <div className="mt-auto">
                    <a
                      href="https://github.com/nanosoft/project1"
                      target="_blank"
                      rel="noopener"
                      className="btn btn-sm"
                      style={{
                        background: COLORS.primary,
                        color: "#fff",
                        borderRadius: "20px",
                        fontWeight: 500,
                        width: "100%",
                      }}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex">
              <div
                className="card border-0 shadow-sm h-100 d-flex flex-column"
                style={{
                  borderRadius: "18px",
                  minHeight: "480px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    borderTopLeftRadius: "18px",
                    borderTopRightRadius: "18px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755293215/Nanosoft/Home/Portfolio/cineplex-booking-system_eydpxf.png"
                    alt="Ticket Booking System"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold" style={{ color: COLORS.accent }}>
                    Ticket Booking System
                  </h5>
                  <p className="text-muted mb-2">
                    An Online Ticket Booking Application as well as purchase
                    tickets, reserve seats for your favorite shows, and even
                    create personalized Halls and Theatres
                  </p>
                  <div className="mt-auto">
                    <a
                      href="https://github.com/nanosoft/project2"
                      target="_blank"
                      rel="noopener"
                      className="btn btn-sm"
                      style={{
                        background: COLORS.primary,
                        color: "#fff",
                        borderRadius: "20px",
                        fontWeight: 500,
                        width: "100%",
                      }}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex">
              <div
                className="card border-0 shadow-sm h-100 d-flex flex-column"
                style={{
                  borderRadius: "18px",
                  minHeight: "480px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    overflow: "hidden",
                    borderTopLeftRadius: "18px",
                    borderTopRightRadius: "18px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755377307/Nanosoft/Home/Portfolio/marketplace-application-developer_lnb7hd.png"
                    alt="Marketplace Application (Shpareflow)"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold" style={{ color: COLORS.accent }}>
                    Marketplace Application (Shpareflow)
                  </h5>
                  <p className="text-muted mb-2">
                    Automated cloud infrastructure for a fintech client using
                    ML-based monitoring.
                  </p>
                  <div className="mt-auto">
                    <a
                      href="https://github.com/nanosoft/project3"
                      target="_blank"
                      rel="noopener"
                      className="btn btn-sm"
                      style={{
                        background: COLORS.primary,
                        color: "#fff",
                        borderRadius: "20px",
                        fontWeight: 500,
                        width: "100%",
                      }}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5"
        style={{
          background: "#fff",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: COLORS.primary }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="border rounded p-4 h-100 shadow-sm">
                <p className="mb-3" style={{ fontStyle: "italic" }}>
                  "NanoSoft transformed our business with their AI automation.
                  The team is professional, responsive, and truly understands
                  technology."
                </p>
                <div className="fw-bold" style={{ color: COLORS.accent }}>
                  — Sarah L., Retail CEO
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="border rounded p-4 h-100 shadow-sm">
                <p className="mb-3" style={{ fontStyle: "italic" }}>
                  "Our mobile app launch was seamless and the AI features are a
                  game changer for our patients."
                </p>
                <div className="fw-bold" style={{ color: COLORS.accent }}>
                  — Dr. Ahmed, Clinic Owner
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="border rounded p-4 h-100 shadow-sm">
                <p className="mb-3" style={{ fontStyle: "italic" }}>
                  "Highly recommend NanoSoft for cloud solutions. Their
                  expertise saved us time and money."
                </p>
                <div className="fw-bold" style={{ color: COLORS.accent }}>
                  — John M., Fintech CTO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="get-started"
        className="py-5"
        style={{
          background: `linear-gradient(135deg, ${COLORS.secondary} 60%, ${COLORS.primary} 100%)`,
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: "#fff" }}>
              Let’s Build Something Together
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>
              Fill out the form & our team will contact you within 24 hours
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {success ? (
                <div className="alert alert-success d-flex justify-content-between align-items-center">
                  <span>✅ Thanks! We’ll reach out to you soon.</span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setSuccess(false)}
                  >
                    <RxCross1 />
                  </span>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit(sendEmail)}
                  className="p-4"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "18px",
                    boxShadow: "0 2px 24px rgba(23,62,165,0.10)",
                  }}
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        className="form-control"
                        placeholder="Your Name"
                        {...register("name")}
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #e0e0e0",
                        }}
                        aria-label="Your Name"
                        required
                      />
                      {errors.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        className="form-control"
                        placeholder="Your Email"
                        {...register("email")}
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #e0e0e0",
                        }}
                        aria-label="Your Email"
                        required
                      />
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        className="form-control"
                        placeholder="Company Name"
                        {...register("company")}
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #e0e0e0",
                        }}
                        aria-label="Company Name"
                        required
                      />
                      {errors.company && (
                        <small className="text-danger">
                          {errors.company.message}
                        </small>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <select
                        className="form-control"
                        {...register("service")}
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #e0e0e0",
                        }}
                        aria-label="Select a Service"
                        required
                      >
                        <option value="">Select a Service</option>
                        <option value="web">Web Development</option>
                        <option value="ai">AI Automation</option>
                        <option value="cloud">Cloud Solutions</option>
                      </select>
                      {errors.service && (
                        <small className="text-danger">
                          {errors.service.message}
                        </small>
                      )}
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Your Message"
                        rows="4"
                        {...register("message")}
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #e0e0e0",
                        }}
                        aria-label="Your Message"
                        maxLength={500}
                      />
                      {errors.message && (
                        <small className="text-danger">
                          {errors.message.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg w-100"
                    style={{
                      background: COLORS.accent,
                      color: "#fff",
                      borderRadius: "30px",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      boxShadow: "0 4px 24px rgba(5,37,146,0.12)",
                      border: "none",
                    }}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-5"
        style={{
          background: "#fff",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: COLORS.primary }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      What industries does NanoSoft serve?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="faq1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We work with retail, healthcare, fintech, education, and
                      more. Our solutions are tailored for each industry.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      How long does a typical project take?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Most projects are delivered in 4-12 weeks, depending on
                      complexity and requirements.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      Do you offer post-launch support?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we provide ongoing support, maintenance, and upgrades
                      for all our solutions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer SEO Schema */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NanoSoft",
          "url": "https://nanosoft.com/",
          "logo": "https://nanosoft.com/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/nanosoft",
            "https://twitter.com/nanosoft"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-800-555-1234",
            "contactType": "customer service",
            "areaServed": "Worldwide",
            "availableLanguage": ["English"]
          }
        }
        `}
      </script>
    </Layout>
  );
};

export default LandingPage;
