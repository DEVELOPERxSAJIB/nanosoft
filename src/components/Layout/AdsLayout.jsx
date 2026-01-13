import GoogleAds from "../Ads/GoogleAds";
import Layout from "./Layout";

const AdsLayout = ({ children }) => {
  return (
    <Layout>

      <div className="container-fluid py-5">
        <div className="row">
          {/* Left Ad Column */}
          <div className="col-lg-2 d-none d-lg-block">
            <div className="sticky-top pb-3" style={{ top: "100px" }}>
              {/* Replace this with your Google Ad code */}
              <div className="bg-light p-2 text-center">
                <GoogleAds />
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="col-lg-8 col-md-12">{children}</div>

          {/* Right Ad Column */}
          <div className="col-lg-2 d-none d-lg-block">
            <div className="sticky-top pb-3" style={{ top: "100px" }}>
              {/* Replace this with your Google Ad code */}
              <div className="bg-light p-2 text-center">
                <GoogleAds />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdsLayout;
