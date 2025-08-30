import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";

// Utility function to map letter → color
const getBgColor = (letter) => {
  const colors = [
    "#6c757d", // Gray
    "#0d6efd", // Blue
    "#198754", // Green
    "#dc3545", // Red
    "#fd7e14", // Orange
    "#20c997", // Teal
    "#6610f2", // Purple
    "#ffc107", // Yellow
  ];
  if (!letter) return colors[0];
  const index = letter.charCodeAt(0) % colors.length; // simple hash
  return colors[index];
};

// eslint-disable-next-line react/prop-types
const Testimonial = ({ bg }) => {
  const testimonials = [
    {
      key: "review1",
      name: "nwpropertyoffer",
      positionAndCompany: "Propossed Offer",
      rating: 5,
      review:
        "Website done really well definitely would go with him for any project! Very good work I am really happy how well they done everthing I would recommend him for any projects",
      avatar: "",
    },
    {
      key: "review2",
      name: "Mr Kat",
      positionAndCompany: "Sweden",
      rating: 5,
      review:
        "Everything was great. I recommend it. It is not my first time buying this service from him and as usual perfect job and would definitely order from him again. I recommend him as he is professional",
      avatar: "",
    },
    {
      key: "review3",
      name: "Anissa Belmahdi",
      positionAndCompany: "HEC Paris",
      rating: 5,
      review:
        "Everything was perfect. Communication was excellent. A big thank you for all their advice. They are full of great ideas and takes initiative. I'm extremely satisfied with the work delivered and won't hesitate to work with them again.",
      avatar:
        "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755469770/Nanosoft/Home/Testimonial/testimonial_software_development_agency_rt5efg.jpg",
    },
    {
      key: "review4",
      name: "Abdullah Al Noman",
      positionAndCompany: "Works at Walmart",
      rating: 5,
      review:
        "I loved your dedication and integrity to your work which is very important in professional life. Sometimes it is more important than the official task.",
      avatar:
        "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755469794/Nanosoft/Home/Testimonial/testimonial_nanosfot_software_agency_paajvb.jpg",
    },
  ];

  // Custom navigation buttons refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left - Slider */}
          <div className="col-lg-7 col-md-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              slidesPerGroup={1}
              onInit={(swiper) => {
                // Bind custom buttons
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.name}>
                  <div
                    style={{
                      minHeight: "290px",
                      backgroundColor: bg || "#f8f9fa",
                    }}
                    className="shadow-sm rounded-3 p-4"
                  >
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3">
                        {item.avatar ? (
                          <img
                            className="rounded-circle object-fit-cover"
                            src={item.avatar}
                            alt="avatar"
                            width={64}
                            height={64} // tells browser "this is a square box"
                            style={{ aspectRatio: "1 / 1" }} // explicitly declare aspect ratio
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.nextSibling) {
                                e.currentTarget.nextSibling.style.display =
                                  "flex";
                              }
                            }}
                          />
                        ) : null}

                        {/* Fallback Initial */}
                        <div
                          style={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: getBgColor(
                              item.name?.charAt(0).toUpperCase()
                            ),
                            color: "#fff",
                            borderRadius: "50%",
                            display: item.avatar ? "none" : "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "24px",
                          }}
                        >
                          {item.name?.charAt(0).toUpperCase()}
                        </div>
                      </div>

                      <div className="ml-3">
                        <div className="fw-semibold">{item.name}</div>
                        <small className="text-muted">
                          {item.positionAndCompany}
                        </small>
                      </div>
                    </div>

                    <div className="d-flex mb-3 text-warning">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="fs-6 text-dark">{item.review}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right - Actions */}
          <div className="col-lg-5 col-md-12">
            <div className="mb-4 mt-5 sm:mt-0">
              <Link
                to="https://maps.app.goo.gl/QcqQVJrLoETAszfq7"
                target="_blank"
                className="btn btn-secondary fw-semibold px-4 py-2"
                style={{
                  borderTopRightRadius: "25px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                }}
              >
                Review us on Google
              </Link>
            </div>

            <h3 className="fw-bold text-dark mb-4 fs-2">
              See What Our Customers Say&rsquo;s about us
            </h3>

            <div className="d-flex flex-row gap-3">
              {/* Custom Navigation Buttons */}
              <button
                ref={prevRef}
                className="rounded-circle mr-2 d-flex align-items-center justify-content-center border"
                style={{ width: "40px", height: "40px" }}
                aria-label="Previous slide"
              >
                <BsArrowLeft />
                <span className="visually-hidden">Previous slide</span>
              </button>
              <button
                ref={nextRef}
                className="rounded-circle d-flex align-items-center justify-content-center border"
                style={{ width: "40px", height: "40px" }}
                aria-label="Next slide"
              >
                <BsArrowRight />
                <span className="visually-hidden">Next slide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
