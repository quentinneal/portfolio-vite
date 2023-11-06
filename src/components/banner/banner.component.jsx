// React
import React from "react";

// Animation On Scroll
import "aos/dist/aos.css";

// Styles
import "./banner.styles.scss";

// Viewport height Mobile Fix
import Div100vh from "react-div-100vh";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Responsive Images Import
import puntaSir320 from "../../assets/puntaSir320.jpg";
import puntaSir640 from "../../assets/puntaSir640.jpg";
import puntaSir960 from "../../assets/puntaSir960.jpg";
import puntaSir1280 from "../../assets/puntaSir1280.jpg";
import puntaSir1600 from "../../assets/puntaSir1600.jpg";
import puntaSir1920 from "../../assets/puntaSir1920.jpg";
import puntaSir2240 from "../../assets/puntaSir2240.jpg";
import puntaSir2560 from "../../assets/puntaSir2560.jpg";
import puntaSir2880 from "../../assets/puntaSir2880.jpg";
import puntaSir3200 from "../../assets/puntaSir3200.jpg";
import puntaSir3520 from "../../assets/puntaSir3520.jpg";
import puntaSir3840 from "../../assets/puntaSir3840.jpg";

const Banner = ({ bannerLoaded, homeRef, projectsScroll }) => (
  <section ref={homeRef} className="banner">
    <img
      loading="eager"
      data-aos="image-zoom-custom"
      data-aos-delay="1600"
      data-aos-duration="20000"
      onLoad={bannerLoaded}
      className="background paused"
      sizes="(max-width: 3840px) 100vw, 3840px"
      srcSet={`
      ${puntaSir320} 320w,
      ${puntaSir640} 640w,
      ${puntaSir960} 960w,
      ${puntaSir1280} 1280w,
      ${puntaSir1600} 1600w,
      ${puntaSir1920} 1920w,
      ${puntaSir2240} 2240w,
      ${puntaSir2560} 2560w,
      ${puntaSir2880} 2880w,
      ${puntaSir3200} 3200w,
      ${puntaSir3520} 3520w,
      ${puntaSir3840} 3840w`}
      src={puntaSir3840}
      alt="Punta Sir"
    />
    <Div100vh>
      {/* Ensures that Div is 100% of viewport height On Mobile Devices*/}
      <div className="color-overlay">
        <div className="heading">
          <h1 className="name">
            <span>Quentin Neal</span>
          </h1>
          <div className="description">
            <span>Software Developer</span>
          </div>
          <div className="icons">
            <a className="github-icon icon" href="https://github.com/quentinneal" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FontAwesomeIcon className="fa-fw" icon={faGithub} />
            </a>
            <a className="linkedin-icon icon" href="https://www.linkedin.com/in/quentinneal/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FontAwesomeIcon className="fa-fw" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </Div100vh>
  </section>
);

export default Banner;
