import ReactPixel from "react-facebook-pixel";

export const initFacebookPixel = () => {
  if (window.fbqInitialized) return; // ✅ prevent re-init
  window.fbqInitialized = true;

  const options = {
    autoConfig: true,
    debug: false,
  };

  ReactPixel.init("1526798621796179", {}, options);
  console.log("✅ Meta Pixel initialized via ReactPixel");

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
    if (typeof window.fbq === "function") {
      ReactPixel.trackCustom(eventName, data);
      console.log(`🎯 Meta Pixel event sent: ${eventName}`, data);
    } else {
      console.warn("⚠️ Meta Pixel not yet loaded, retrying...");
      setTimeout(() => ReactPixel.trackCustom(eventName, data), 1500);
    }
  } catch (error) {
    console.error("⚠️ Meta Pixel custom event failed:", error);
  }
};