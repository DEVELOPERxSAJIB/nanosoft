import { useEffect, useRef } from "react";

const GoogleAds = () => {
  const adRef = useRef(null);
  const hasPushed = useRef(false);

  useEffect(() => {
    if (hasPushed.current) return;

    if (window.adsbygoogle && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        hasPushed.current = true;
      } catch (e) {
        console.error("Google Ads error:", e);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9174321091222047"
      data-ad-slot="7105642350"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAds;
