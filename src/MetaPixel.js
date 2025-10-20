import ReactPixel from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  const options = {
    autoConfig: true,
    debug: false,
  };
  ReactPixel.init('1511842706385675', {}, options);
};

export const trackPageView = () => {
  ReactPixel.pageView();
};
