import team1 from "../assets/images/team/style1/1.jpg";
import team2 from "../assets/images/team/style1/2.jpg";
import team3 from "../assets/images/team/style1/3.jpg";
import team4 from "../assets/images/team/style1/4.jpg";

const OurTeam = () => {
  return (
    <div className="rs-team modify1 pt-120 pb-95 md-pt-80 md-pb-75">
      <div className="container">
        <div className="sec-title2 text-center mb-45">
          <span className="sub-text style-bg">Our Team</span>
          <h2 className="title">
            Driving Innovation and Business Success
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-50">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a href="#">
                    <img src={"https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551742/Nanosoft/About/Team/Sajib_Shikder_web_developer_agency_grha63.jpg"} alt />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4 className="person-name">
                  <a href="single-team.html">Md SaJib Shikder</a>
                </h4>
                <span className="designation">
                  Founder & Chief Executive Officer
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-50">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a href="#">
                    <img src={"https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551739/Nanosoft/About/Team/web_developer_development_ashraful_alom_zl6oom.jpg"} alt />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4 className="person-name">
                  <a href="single-team.html">Ashraful Alom</a>
                </h4>
                <span className="designation">
                  Chief Technology Officer & Full-Stack Engineer
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-50">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a href="#">
                    <img src={"https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551738/Nanosoft/About/Team/sajon_khan_Full_Stack_web_application_developer_jspuel.jpg"} alt />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4 className="person-name">
                  <a href="single-team.html">Sajol Khan</a>
                </h4>
                <span className="designation">
                  Full Stack web application developer
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-50">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a href="#">
                    <img src={"https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551739/Nanosoft/About/Team/Tohid_bin_azom_Dedicated_Backend_Developer_drfp2i.jpg"} alt />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h4 className="person-name">
                  <a href="single-team.html">Tohid Bin Azam</a>
                </h4>
                <span className="designation">Dedicated Backend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
