import ReactPixel from "react-facebook-pixel";

export const initFacebookPixel = () => {
  const options = {
    autoConfig: true,
    debug: false, // set true for console logs
  };

  // Initialize once
  ReactPixel.init("1526798621796179", {}, options);
  console.log("✅ Meta Pixel initialized via ReactPixel");

  // Track first page load
  ReactPixel.pageView();
};

// Track page view (for route changes)
export const trackPageView = () => {
  try {
    ReactPixel.pageView();
    console.log("📊 Meta Pixel: PageView tracked successfully");
  } catch (error) {
    console.warn("⚠️ Meta Pixel trackPageView failed:", error);
  }
};

// Track custom events (optional)
export const trackEvent = (eventName, data = {}) => {
  try {
    ReactPixel.trackCustom(eventName, data);
    console.log(`🎯 Meta Pixel: ${eventName} event sent`, data);
  } catch (error) {
    console.warn("⚠️ Meta Pixel custom event failed:", error);
  }
};
