import { Link } from "react-router-dom";
import team1 from "../assets/images/team/style1/1.jpg";
import team2 from "../assets/images/team/style1/2.jpg";
import team3 from "../assets/images/team/style1/3.jpg";
import team4 from "../assets/images/team/style1/4.jpg";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/PageTitle";

const Team = () => {
  return (
    <>
      <Layout>
      <PageTitle title={"NanoSoft - Our team"}/>
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
          <div className="rs-team modify1 pt-120 pb-95 md-pt-80 md-pb-75">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-50">
                  <div className="team-item-wrap">
                    <div className="team-wrap">
                      <div className="image-inner">
                        <a href="#">
                          <img src={team1} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Md SaJib Shikder</a>
                      </h4>
                      <span className="designation">Founder & Chief Executive Officer</span>
                      <ul className="team-social">
                        <li>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/mdsajibshikder/"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/Md.SaJib.Raajput/"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-50">
                  <div className="team-item-wrap">
                    <div className="team-wrap">
                      <div className="image-inner">
                        <a href="#">
                          <img src={team2} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Ashraful Alom</a>
                      </h4>
                      <span className="designation">Chief Technology Officer & Full-Stack Engineer</span>
                      <ul className="team-social">
                        <li>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/beautifulmind/"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/beautyformind"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-50">
                  <div className="team-item-wrap">
                    <div className="team-wrap">
                      <div className="image-inner">
                        <a href="#">
                          <img src={team3} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Sajol Khan</a>
                      </h4>
                      <span className="designation">Full Stack web application developer</span>
                      <ul className="team-social">
                        <li>
                          <a
                            href="#"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100007420697877"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-50">
                  <div className="team-item-wrap">
                    <div className="team-wrap">
                      <div className="image-inner">
                        <a href="#">
                          <img src={team4} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Tohid Bin Azam</a>
                      </h4>
                      <span className="designation">Dedicated Backend Developer</span>
                      <ul className="team-social">
                        <li>
                          <a
                            href="https://www.linkedin.com/in/tohidbinazam007/"
                            target="_blank"
                          >
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/tohidbinazam"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team Section End */}
        </div>
      </Layout>
    </>
  );
};

export default Team;
