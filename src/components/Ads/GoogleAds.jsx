import { useEffect, useRef } from "react";

const GoogleAds = () => {
  const adRef = useRef();

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Google Ads error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", zIndex: "1" }}
      data-ad-client="ca-pub-9174321091222047"
      data-ad-slot="7105642350"
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
};

export default GoogleAds;
