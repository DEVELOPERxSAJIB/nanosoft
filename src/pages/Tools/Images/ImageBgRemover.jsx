import GoogleAd from "../../../components/Ads/GoogleAds";
import GoogleAutoAds from "../../../components/Ads/GoogleAutoAds";
import Layout from "../../../components/Layout/Layout";
import PageTitle from "../../../components/PageTitle";

const ImageBgRemover = () => {
  return (
    <Layout>
      <PageTitle
        title="NanoSoft - Premium Image Background Remover & Web Development Tools"
        description="NanoSoft provides premium web development services and custom software solutions. Try our AI-powered Image Background Remover and other web tools to enhance productivity and design workflows."
      />

      <GoogleAutoAds />

      <div className="container-fluid py-5">
        <div className="row">
          {/* Left Ad Column */}
          <div className="col-lg-2 d-none d-lg-block">
            <div className="sticky-top pb-3" style={{ top: "100px" }}>
              {/* Replace this with your Google Ad code */}
              <div className="bg-light p-2 text-center">
                <GoogleAd />
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="col-lg-8 col-md-12">
            <div className="sticky-top pb-3" style={{ top: "100px" }}>
              {/* Replace this with your Google Ad code */}
              <div className="bg-light p-2 text-center">
                <GoogleAd />
              </div>
            </div>
            <div className="tool-content mt-5 p-4 shadow-sm rounded">
              {/* Your tool UI here */}
              <h2 className="text-center mb-4">Image Background Remover</h2>
              <p className="text-center mb-3">
                Remove image backgrounds instantly using AI.
              </p>
              {/* Example tool UI */}
              <div className="text-center">
                <input type="file" className="form-control mb-3" />
                <button className="btn btn-primary">
                  Upload & Remove Background
                </button>
              </div>
            </div>
          </div>

          {/* Right Ad Column */}
          <div className="col-lg-2 d-none d-lg-block">
            <div className="sticky-top pb-3" style={{ top: "100px" }}>
              {/* Replace this with your Google Ad code */}
              <div className="bg-light p-2 text-center">
                <GoogleAd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImageBgRemover;
