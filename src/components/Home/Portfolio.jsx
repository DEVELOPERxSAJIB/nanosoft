import React, { useState, useEffect } from "react";

// Main App component
const Portfolio = () => {
  const categories = [
    "All",
    "Accessories",
    "Books",
    "Electronics",
    "Food & Drink",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Example image data (replace with actual image URLs if available)
  const allImages = [
    {
      id: 1,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Backpack",
      category: "Accessories",
    },
    {
      id: 2,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Books",
      category: "Books",
    },
    {
      id: 3,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Buttons",
      category: "Electronics",
    },
    {
      id: 4,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Camera",
      category: "Electronics",
    },
    {
      id: 5,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Laptop+Desk",
      category: "Electronics",
    },
    {
      id: 6,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Paint+Brush",
      category: "Accessories",
    },
    {
      id: 7,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Vase",
      category: "Accessories",
    },
    {
      id: 8,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Pencils",
      category: "Books",
    },
    {
      id: 9,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Coffee+Laptop",
      category: "Electronics",
    },
    {
      id: 10,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Spoons",
      category: "Food & Drink",
    },
    {
      id: 11,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Typing",
      category: "Electronics",
    },
    {
      id: 12,
      src: "https://placehold.co/300x200/F5F5F5/4B5563?text=Oil",
      category: "Food & Drink",
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

  return (
    <div className="container my-4">
      {/* Header and Category Buttons */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex flex-wrap justify-items-center justify-content-center gap-2 pe-2">
            {categories.map((category) => (
              <>
                <button
                  key={category}
                  className={`btn btn-sm rounded-pill 
                  ${selectedCategory === category ? "readon learn-more submit" : "none-readon learn-more submit"}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Indicator and Message */}
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}

      {!loading && message && (
        <div className="text-center text-muted mt-4">{message}</div>
      )}

      {/* Image Gallery */}
      {!loading && !message && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 mb-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="col mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={image.src}
                  className="card-img-top"
                  alt={`Category: ${image.category}`}
                  style={{ height: "280px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/300x180/E0E0E0/616161?text=Image+Not+Found";
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-muted small">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
