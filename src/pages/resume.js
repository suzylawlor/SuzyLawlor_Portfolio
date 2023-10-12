import Head from "next/head";

function Resume() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Resume</title>
      </Head>
      <div className="root">
        <div className="resume-page">
          <div className="resume">
            <div className="base">
              <div className="profile">
                <div className="photo">
                  <img src="/cvHeadshot.png" alt="cvHeadshot"></img>
                </div>
                <div className="info">
                  <h1 className="name">Suzy Lawlor</h1>
                  <h2 classNames="job">Web Developer</h2>
                </div>
              </div>
              <div className="contact">
                <h3>Contact Me</h3>
                <div className="call">
                  <a href="tel:00447917071290">
                    <i className="fas fa-phone"></i>
                    <span>+4479 17071290</span>
                  </a>
                </div>
                <div className="address">
                  <a href="https://goo.gl/maps/TKEERztE73j4pqRL6">
                    <i className="fas fa-map-marker"></i>
                    <span>London, England</span>
                  </a>
                </div>
                <div className="email">
                  <a href="mailto:lawlor.suzy@gmail.com">
                    <i className="fas fa-envelope"></i>
                    <span>lawlor.suzy</span>
                  </a>
                </div>
                <div className="website">
                  <a
                    href="https://suzy-lawlor-portfolio-suzylawlor.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <i className="fas fa-home"></i>
                    <span>suzylawlor.com</span>
                  </a>
                </div>
              </div>
              <div className="follow">
                <h3>Follow Me</h3>
                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/suzy-lawlor"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                    <span>linkedin</span>
                  </a>
                </div>
                <div className="github">
                  <a href="https://github.com/suzylawlor" target="_blank">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/suzy_lawlor_art/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                    <span>instagram</span>
                  </a>
                </div>
              </div>
              <div className="interests">
                <h3>Interests</h3>
                <div className="interests-items">
                  <div className="art">
                    <i className="fas fa-palette"></i>
                    <span>Contemporary Art</span>
                  </div>
                  <div className="comics">
                    <i className="fas fa-book"></i>
                    <span>Graphic Novels</span>
                  </div>
                  <div className="movies">
                    <i className="fas fa-film"></i>
                    <span>Horror Movies</span>
                  </div>
                  <div className="games">
                    <i className="fas fa-gamepad"></i>
                    <span>Video Games</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="func">
              <div className="work">
                <h3>
                  <i className="fa fa-briefcase"></i>Experience
                </h3>
                <ul>
                  <li>
                    <span>Wordpress Developer/Administrator</span>
                    <small>Bright Heart Education</small>
                    <small>2023 - present</small>
                  </li>
                  <li>
                    <span>Graphic Designer/Administrator</span>
                    <small>AMP Capital</small>
                    <small>2018 - 2022</small>
                  </li>
                </ul>
              </div>
              <div className="edu">
                <h3>
                  <i className="fa fa-graduation-cap"></i>Education
                </h3>
                <ul>
                  <li>
                    <span>Full Stack Web Development</span>
                    <small>HyperionDev / The University of Edinburgh</small>
                    <small>2022-2023</small>
                  </li>
                  <li>
                    <span>BA Honours Degree in Fine Art</span>
                    <small>Central Saint Martins University</small>
                    <small>2012 - 2015</small>
                  </li>
                </ul>
              </div>
              <div className="skills-prog">
                <h3>
                  <i className="fas fa-star"></i>About Me
                </h3>
                Frontend Web Developer with a degree in Fine Art and a
                background in administration, digital content creation and
                marketing design, seeking a challenging position as a web
                developer. Possessing a strong foundation in HTML, CSS, and
                JavaScript, as well as experience with web development
                frameworks and libraries such as React, and Next.js. Experienced
                in creating engaging digital content, including website design,
                client communications and social media campaigns. Dedicated to
                delivering clean, functional, and visually appealing web
                solutions to clients. Currently developing and maintaining
                Wordpress websites for the private education sector. Seeking an
                opportunity to join a dynamic team and grow as a developer while
                contributing to the success of the organisation.
              </div>
              <div className="skills-soft">
                <h3>
                  <i className="fas fa-bezier-curve"></i>Programming and
                  Software Skills
                </h3>
                <ul>
                  <li data-percent="90">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>HTML5</span>
                    <small></small>
                  </li>
                  <li data-percent="75">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>CSS3</span>
                    <small></small>
                  </li>
                  <li data-percent="85">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>ES13</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Typescript</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Bootstrap</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Angular</span>
                    <small></small>
                  </li>
                </ul>
                <ul>
                  <li data-percent="90">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>React</span>
                    <small></small>
                  </li>
                  <li data-percent="75">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Next</span>
                    <small></small>
                  </li>
                  <li data-percent="85">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Wordpress</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Elementor</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Figma</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Mailchimp</span>
                    <small></small>
                  </li>
                </ul>
                <ul>
                  <li data-percent="90">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Ps</span>
                    <small></small>
                  </li>
                  <li data-percent="75">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Ai</span>
                    <small></small>
                  </li>
                  <li data-percent="85">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Id</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>Pixelmator</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>VS Code</span>
                    <small></small>
                  </li>
                  <li data-percent="65">
                    <svg viewbox="0 0 100 100">
                      <circle cx="50" cy="50" r="40"></circle>
                      <circle className="cbar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <span>GitHub</span>
                    <small></small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
