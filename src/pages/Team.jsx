import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle";
import OurTeam from "../components/OurTeam";

const Team = () => {
  return (
    <>
      <Layout>
        <PageTitle title={"NanoSoft - Our team"} />
        <div>
          {/* Breadcrumbs Start */}
          <div className="rs-breadcrumbs img4">
            <div className="breadcrumbs-inner text-center">
              <h1 className="page-title">Our Team</h1>
              <ul>
                <li>
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
                <li>Our Team</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumbs End */}
          {/* Team Section Start */}
          <OurTeam />
          {/* Team Section End */}
        </div>
      </Layout>
    </>
  );
};

export default Team;
