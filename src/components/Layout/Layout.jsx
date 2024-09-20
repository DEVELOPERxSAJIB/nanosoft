import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <div className="main-content">
        <div className="full-width-header">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
