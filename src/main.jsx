import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true,
  debug: false,
};

ReactPixel.init("1526798621796179", options);
ReactPixel.pageView(); // Track initial page load

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
