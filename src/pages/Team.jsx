import { Link } from "react-router-dom";
import team1 from "../assets/images/team/style1/1.jpg";
import team2 from "../assets/images/team/style1/2.jpg";
import team3 from "../assets/images/team/style1/3.jpg";
import team4 from "../assets/images/team/style1/4.jpg";
import team5 from "../assets/images/team/style1/5.jpg";
import team6 from "../assets/images/team/style1/6.jpg";
import team7 from "../assets/images/team/style1/7.jpg";
import team8 from "../assets/images/team/style1/8.jpg";
import team9 from "../assets/images/team/style1/9.jpg";
import Layout from "../components/Layout/Layout";

const Team = () => {
  return (
    <>
      <Layout>
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
                        <a href="single-team.html">Makhaia Antitni</a>
                      </h4>
                      <span className="designation">President &amp; CEO</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
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
                        <a href="single-team.html">Corey Anderson</a>
                      </h4>
                      <span className="designation">CEO &amp; Founder</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
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
                        <a href="single-team.html">Masud Rana</a>
                      </h4>
                      <span className="designation">Web Developer</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
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
                        <a href="single-team.html">Najmul Huda</a>
                      </h4>
                      <span className="designation">Digital Marketer</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
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
                          <img src={team5} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Rushali Rumi</a>
                      </h4>
                      <span className="designation">Design Lead</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
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
                          <img src={team6} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Abu Sayed</a>
                      </h4>
                      <span className="designation">App Developer</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 sm-mb-50">
                  <div className="team-item-wrap">
                    <div className="team-wrap">
                      <div className="image-inner">
                        <a href="#">
                          <img src={team7} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Sonia Akhter</a>
                      </h4>
                      <span className="designation">Graphic Artist</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 sm-mb-50">
                  <div className="team-item-wrap">
                    <div className="team-wrap">
                      <div className="image-inner">
                        <a href="#">
                          <img src={team8} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Rayhan Ali</a>
                      </h4>
                      <span className="designation">CEO &amp; Founder</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team-item-wrap">
                    <div className="team-wrap">
                      <div className="image-inner">
                        <a href="#">
                          <img src={team9} alt />
                        </a>
                      </div>
                    </div>
                    <div className="team-content text-center">
                      <h4 className="person-name">
                        <a href="single-team.html">Benjir Akther</a>
                      </h4>
                      <span className="designation">Graphic Designer</span>
                      <ul className="team-social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" />
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
