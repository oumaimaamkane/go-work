// import React from "react";
//import { toggleTheme } from '../../assets/js/main';

function Auth() {
  return (
    <div className="navbar-area">
      <div className="zash-responsive-nav">
        <div className="container">
          <div className="zash-responsive-menu">
            <div className="logo black-logo">
              <a href="index.html">
                <img src="assets/img/logo.png" alt="logo" />
              </a>
            </div>

            <div className="logo white-logo">
              <a href="index.html">
                <img src="assets/img/white-logo.png" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="zash-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand black-logo" href="index.html">
              <img
                src="assets/img/logo-youcode-ma.png"
                alt="logo"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a className="navbar-brand white-logo" href="index.html">
              <img
                src="assets/img/logo-youcode-ma.png"
                alt="logo"
                style={{ maxWidth: "150px" }}
              />
            </a>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="about.html" className="nav-link active">
                    Home <i className="flaticon-down-arrow"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Home One
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="index-2.html" className="nav-link">
                        Home Two
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="index-3.html" className="nav-link">
                        Home Three
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="index-4.html" className="nav-link">
                        Home Four
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a href="the-place.html" className="nav-link">
                    The Place
                  </a>
                </li>

                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    Event <i className="flaticon-down-arrow"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="event.html" className="nav-link">
                        Event
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="single-event.html" className="nav-link">
                        Event Details
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    Pages <i className="flaticon-down-arrow"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="gallery.html" className="nav-link">
                        Gallery
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="about.html" className="nav-link">
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="services.html" className="nav-link">
                            Services
                          </a>
                        </li>

                        <li className="nav-item">
                          <a href="single-services.html" className="nav-link">
                            Services Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="pricing.html" className="nav-link">
                        Pricing
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="team.html" className="nav-link">
                        Team
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="error-404.html" className="nav-link">
                        404 Error
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    News <i className="flaticon-down-arrow"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="news-1.html" className="nav-link">
                        News Grid
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="news-2.html" className="nav-link">
                        News Right Sidebar
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="single-news.html" className="nav-link">
                        News Details
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="others-option d-flex align-items-center">
                <div className="call-us">
                  <a href="tel:1518285679" className="d-inline-block">
                    <div className="icon">
                      <i className="flaticon-call"></i>
                    </div>
                    Call Us:
                    <span>+1 518 285679</span>
                  </a>
                </div>

                <div className="dark-version-btn">
                  <label id="switch" className="switch">
                    {/* eslint-disable-next-line no-undef */}
                    <input type="checkbox" onChange={toggleTheme} id="slider" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Auth;
