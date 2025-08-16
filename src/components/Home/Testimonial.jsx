import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import review1 from "../../assets/images/banner/style4/circle-1.png";




const Testimonial = () => {


const testimonials = [
  {
    key: "review1",
    name: "Nermene Estanbole",
    positionAndCompany: "Patient",
    rating: 5,
    review:
      "What a great experience with dentist Dr. Soheil! From the moment I walked in I felt welcome and reassured. Dr. Soheil is extremely knowledgeable, listens well to your wishes and works with great precision.",
    avatar: review1,
  },
  {
    key: "review2",
    name: "Majd Elwan",
    positionAndCompany: "Patient",
    rating: 5,
    review:
      "Dr. Soheil is very professional and extremely friendly. He explained everything clearly and made me feel completely at ease. The treatment outcome was perfect. Definitely recommended!",
    avatar: review1,
  },
  {
    key: "review3",
    name: "Amin Zeitoun",
    positionAndCompany: "Local Guide",
    rating: 5,
    review:
      "A wonderful and very clean clinic! The instruments are carefully sterilized and the doctor is very skilled. I appreciated the modern equipment and appointment reminders via text and email.",
    avatar: review1,
  },
  {
    key: "review4",
    name: "Raed Hammoud",
    positionAndCompany: "Local Guide",
    rating: 5,
    review:
      "Really professional doctor with a warm and welcoming atmosphere. Highly recommended for anyone looking for quality dental care.",
    avatar: review1,
  },
];

  return (
    <section className="bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left - Slider */}
          <div className="col-lg-7 col-md-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              slidesPerGroup={1}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.name}>
                  <div className="bg-light shadow-sm rounded-3 p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-3">
                        <img
                          className="rounded-circle object-fit-cover"
                          src={item.avatar}
                          alt="avatar"
                          style={{ width: "64px", height: "64px" }}
                        />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-semibold">{item.name}</h5>
                        <small className="text-muted fw-bold">
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
            <div className="mb-4">
              <Link
                to="https://g.co/kgs/tHBsGss"
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
              See What Our Customers Say's about us
            </h3>

            <div className="d-flex gap-3">
              <button
                id="slider-button-left"
                className="swiper-button-prev d-flex justify-content-center align-items-center border border-2 border-primary rounded p-2 bg-white"
              >
                <MdArrowBack className="text-primary" size={24} />
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next d-flex justify-content-center align-items-center border border-2 border-primary rounded p-2 bg-white"
              >
                <MdArrowForward className="text-primary" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
