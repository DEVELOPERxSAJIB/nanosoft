import ReactPixel from "react-facebook-pixel";

export const initFacebookPixel = () => {
  const options = {
    autoConfig: true,
    debug: false,
  };
  ReactPixel.init("1511842706385675", {}, options);
};

// Track page view (for route changes)
export const trackPageView = () => {
  try {
    ReactPixel.pageView();
    console.log("📊 Meta Pixel: PageView tracked");
  } catch (error) {
    console.warn("⚠️ Meta Pixel not initialized properly:", error);
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