import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GiSparkles } from "react-icons/gi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { ColorRing } from "react-loader-spinner";

// Main App component
const Portfolio = () => {
  const categories = [
    "All",
    "E-commerce",
    "Booking System",
    "Marketplace",
    "Real Estate",
    "Clinic",
    "Portfolio",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Example image data (replace with actual image URLs if available)
  const allImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755264011/Nanosoft/Home/Portfolio/Screenshot_1_avxina.png",
      category: "E-commerce",
      title: "E-commerce Application",
      description:
        "It's an all-in-one Ecommerce and Inventory Management System for Discover Products, Making a purchase, Managing carts, Execute secure payments, and effortlessly completing checkouts MongoDB, Node.js, Express.js, React.js, Redux, and JavaScript",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755293215/Nanosoft/Home/Portfolio/cineplex-booking-system_eydpxf.png",
      category: "Booking System",
      title: "Cineplex Book a Show",
      description:
        "An Online Ticket Booking Application as well as purchase tickets, reserve seats for your favorite shows, and even create personalized Halls and Theatres - Node Js, Express Js, React Js, Mongo DB, Stripe, RTK, Ant Design, Bootstrap, CSS & HTML",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755376138/Nanosoft/Home/Portfolio/clinic-application-reactjs_mtftr3.png",
      category: "Clinic",
      title: "FamClinic",
      description:
        "This app is built with React, featuring email integration via EmailJS, real-time data fetching from JSON, and a toaster for notifications. It includes pages like Home, About Us, Services, and Pricing, providing a seamless user experience.",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755376676/Nanosoft/Home/Portfolio/reactjs-application-dentist-clinic_cmeerd.png",
      category: "Clinic",
      title: "Bright Smile Centrum",
      description:
        "This app is built with React, featuring email integration via EmailJS, real-time data fetching from JSON, and a toaster for notifications. It includes pages like Home, About Us, Services, and Pricing, providing a seamless user experience.",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755376138/Nanosoft/Home/Portfolio/proposedoffer-real-estate-reactjs-mern-application_c9mdau.png",
      category: "Real Estate",
      title: "Propossed Offer",
      description:
        "Proposed Offer is a React-based property selling platform that streamlines real estate transactions. It features React Router for navigation, Formik & Yup for form validation, and EmailJS for seamless email communication.",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755376970/Nanosoft/Home/Portfolio/portfolio-reactjs-application_jcwlcy.png",
      category: "Portfolio",
      title: "Portfolio Website",
      description:
        "This portfolio website is built with React and features React Router for smooth navigation, React Tilt for interactive effects, and Formik & Yup for robust form validation. It includes EmailJS, providing a dynamic and engaging way to showcase the client’s work",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755377110/Nanosoft/Home/Portfolio/portfolio-developer-nanosoft-agency_np6ojx.png",
      category: "Portfolio",
      title: "Portfolio Website",
      description:
        "This portfolio website is built with React and features React Router for smooth navigation, React Tilt for interactive effects, and Formik & Yup for robust form validation. It includes EmailJS, providing a dynamic and engaging way to showcase the client’s work",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/djdkjrlp8/image/upload/v1755377307/Nanosoft/Home/Portfolio/marketplace-application-developer_lnb7hd.png",
      category: "Marketplace",
      title: "SphereFlow - Marketplace Application",
      description:
        "A full-featured Workflow and Task Management Application designed to streamline projects, manage teams, track progress, and collaborate seamlessly — built with Node.js, Express.js, React.js, MongoDB, Redux Toolkit, TailwindCSS, and Shadcn UI.",
    },
  ];

  // Initialize images and filter them when the component mounts or allImages change
  useEffect(() => {
    setImages(allImages);
    filterImages(selectedCategory, allImages);
  }, []); // Empty dependency array means this runs once on mount

  // Function to filter images based on category
  const filterImages = (category, currentImages) => {
    setLoading(true); // Set loading to true while filtering
    setMessage(""); // Clear previous messages
    setTimeout(() => {
      // Simulate network delay
      if (category === "All") {
        setFilteredImages(currentImages);
      } else {
        const newFilteredImages = currentImages.filter(
          (image) => image.category === category
        );
        setFilteredImages(newFilteredImages);
        if (newFilteredImages.length === 0) {
          setMessage(`No images found for "${category}" category.`);
        }
      }
      setLoading(false); // Set loading to false after filtering
    }, 500); // 500ms delay
  };

  // Handle category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterImages(category, images);
  };

  // Handle "Search Images" button click (re-filters based on current selection)
  const handleSearchImages = () => {
    filterImages(selectedCategory, images);
  };

  const handleToggleShow = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="container my-4">
      {/* Header and Category Buttons */}
      <div
        style={{ border: 0, shadow: "none" }}
        className="card bg-transparent mb-4"
      >
        <div className="card-body">
          <div className="d-flex flex-wrap justify-items-center justify-content-center gap-2 pe-2">
            {categories.map((category) => (
              <>
                <button
                  key={category}
                  className={`btn btn-sm rounded-pill 
                  ${
                    selectedCategory === category
                      ? "readon learn-more submit"
                      : "none-readon learn-more submit"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "350px" }}
        >
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="color-ring-loading"
            colors={["#3771CF", "#173EA5", "#3771CF", "#173EA5", "#3771CF"]}
          />
        </div>
      )}

      {/* Message */}
      {!loading && message && (
        <div className="text-center text-muted mt-4">{message}</div>
      )}

      {/* Gallery */}
      {!loading && !message && (
        <>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-2 mb-4">
            {(showAll ? filteredImages : filteredImages.slice(0, 6)).map(
              (image) => (
                <div key={image.id} className="col my-3">
                  <div
                    className="card h-100 position-relative border-0 shadow-sm"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 15px rgba(0,0,0,0.08)";
                    }}
                  >
                    {/* Image */}
                    <img
                      src={image.src}
                      className="w-100"
                      style={{
                        height: "230px",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/300x180/E0E0E0/616161?text=Image+Not+Found";
                      }}
                    />

                    {/* Content */}
                    <div className="card-body p-3">
                      <h5 className="fw-bold mb-2" style={{ color: "#061340" }}>
                        {image?.title || "No title"}
                      </h5>
                      <p
                        className="mb-0 text-muted"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {image?.description || "No description available"}
                      </p>
                    </div>

                    {/* Floating Action Buttons */}
                    <div
                      className="position-absolute"
                      style={{
                        top: "20px",
                        right: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {/* GitHub */}
                      <div
                        onClick={() =>
                          window.open(allImages.liveLink, "_blank")
                        }
                        className="d-flex justify-content-center align-items-center rounded-circle"
                        style={{
                          width: "42px",
                          height: "42px",
                          cursor: "pointer",
                          background:
                            "linear-gradient(135deg, #4B91EA, #F6F7F9)",
                        }}
                      >
                        <AiFillGithub size={25} color="#052592" />
                      </div>

                      {/* Live Link */}
                      <div
                        onClick={() =>
                          window.open(allImages.liveLink, "_blank")
                        }
                        className="d-flex justify-content-center align-items-center rounded-circle"
                        style={{
                          width: "42px",
                          height: "42px",
                          cursor: "pointer",
                          background:
                            "linear-gradient(135deg, #052592, #4B91EA)",
                        }}
                      >
                        <HiOutlineStatusOnline size={20} color="#fff" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="row d-flex justify-content-center mt-4">
            {filteredImages.length > 6 && (
              <div className="text-center">
                <button
                  onClick={handleToggleShow}
                  className="btn readon learn-more submit text-light rounded-pill"
                >
                  {showAll ? "See Less" : "See More"}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
