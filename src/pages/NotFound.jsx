import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="main-content">
        <div className="page-error">
          <div className="container">
            <div className="error-not-found">
              <div className="error-content">
                <h2 className="title">
                  <span>404</span>oops! page not found
                </h2>
                <div className="btn-part">
                  <Link to="/" className="readon learn-more">
                    Back To Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
