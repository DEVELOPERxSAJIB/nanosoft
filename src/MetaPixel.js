import ReactPixel, { fbq } from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  const options = {
    autoConfig: true,
    debug: false,
  };
  ReactPixel.init('1511842706385675', {}, options);
};

// export const trackPageView = () => {
//   ReactPixel.pageView();
// };


export const trackPageView = () => {
  if (typeof fbq === "function") {
    fbq("track", "PageView");
    console.log("📊 Meta Pixel: PageView tracked");
  }
};
