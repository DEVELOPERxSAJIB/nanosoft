
import { useEffect, useRef } from "react";

const GoogleAds = () => {
  const adRef = useRef(null);
  const hasPushed = useRef(false);

  useEffect(() => {
    // Helper to inject adsbygoogle script if not present
    const injectScript = () => {
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const script = document.createElement('script');
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9174321091222047";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }
    };

    injectScript();

    const tryPush = () => {
      if (window.adsbygoogle && adRef.current) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          hasPushed.current = true;
        } catch (e) {
          // Retry after a short delay if push fails
          setTimeout(tryPush, 500);
        }
      } else {
        // Retry if adsbygoogle is not yet available
        setTimeout(tryPush, 500);
      }
    };

    if (!hasPushed.current) {
      tryPush();
    }

    // Clean up: remove ad markup if needed
    return () => {
      hasPushed.current = false;
    };
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
