const OurTeam = () => {
  return (
    <section
      className="rs-team modify1 pt-120 pb-95 md-pt-80 md-pb-75"
      aria-labelledby="our-team-title"
    >
      <div className="container">
        <header className="sec-title2 text-center mb-45">
          <span className="sub-text style-bg">Our Team</span>
          <h2 id="our-team-title" className="title">
            Driving Innovation and Business Success
          </h2>
        </header>

        <div className="row" role="list">
          {/* Team Member 1 */}
          <article className="col-lg-4 col-md-6 mb-50" role="listitem">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a>
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551742/Nanosoft/About/Team/Sajib_Shikder_web_developer_agency_grha63.jpg"
                      alt="Md SaJib Shikder - Founder & Chief Executive Officer"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h3 className="person-name">Md SaJib Shikder</h3>
                <p className="designation">
                  Founder &amp; Chief Executive Officer
                </p>
              </div>
            </div>
          </article>

          {/* Team Member 2 */}
          <article className="col-lg-4 col-md-6 mb-50" role="listitem">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a>
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551739/Nanosoft/About/Team/web_developer_development_ashraful_alom_zl6oom.jpg"
                      alt="Ashraful Alom - Chief Technology Officer & Full-Stack Engineer"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h3 className="person-name">Ashraful Alom</h3>
                <p className="designation">
                  Chief Technology Officer &amp; Full-Stack Engineer
                </p>
              </div>
            </div>
          </article>

          {/* Team Member 3 */}
          <article className="col-lg-4 col-md-6 mb-50" role="listitem">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a>
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551738/Nanosoft/About/Team/sajon_khan_Full_Stack_web_application_developer_jspuel.jpg"
                      alt="Sajol Khan - Full Stack Web Application Developer"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h3 className="person-name">Sajol Khan</h3>
                <p className="designation">
                  Full Stack Web Application Developer
                </p>
              </div>
            </div>
          </article>

          {/* Team Member 4 */}
          <article className="col-lg-4 col-md-6 mb-50" role="listitem">
            <div className="team-item-wrap">
              <div className="team-wrap">
                <div className="image-inner">
                  <a>
                    <img
                      src="https://res.cloudinary.com/djdkjrlp8/image/upload/v1755551739/Nanosoft/About/Team/Tohid_bin_azom_Dedicated_Backend_Developer_drfp2i.jpg"
                      alt="Tohid Bin Azam - Dedicated Backend Developer"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div className="team-content text-center">
                <h3 className="person-name">Tohid Bin Azam</h3>
                <p className="designation">Dedicated Backend Developer</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
