// React
import React from 'react';

// Styles
import './about.styles.scss';

// Animation On Scroll
import 'aos/dist/aos.css';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faHtml5, faJs, faPhp, faReact, faSass, faBootstrap, faNode, faNpm, faWordpress, faGithub, faLinkedin, faStripe, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const About = ({aboutRef, menuBottom}) => (
  
  <section className="about">
  <div ref={aboutRef} className={`${menuBottom ? 'about-anchor-none' : 'about-anchor'}`} />
    <h2 className="title" data-aos="fade-down">About</h2>
    <div className="bio" data-aos="fade-right">
      <a className="bio-image-background" href="https://www.linkedin.com/in/quentinneal/" target="_blank" tabIndex="-1" rel="noopener noreferrer" title="LinkedIn">
        <img className="bio-image" alt="" loading="lazy"/> {/* redesign to add alt text */}
        <div className="color-overlay">
          <FontAwesomeIcon className="fa-fw" icon={faLinkedin} />
        </div>
      </a>
      <div className="bio-description">

      <p>I'm a Software Engineer with professional experience in the MERN stack and React/ASP.NET. I value pushing boundaries of what a website is 
      supposed to be and I value producing maintainable solutions to enhance the success of businesses and clients.</p>

      <p>Along with my programming experience, My hospitality and retail experience along with traveling have given me plenty of opportunities to understand and work with different types of people.</p>

      <p>Outside of programming I like to engage in amature astronomy and use VSTi istruments to produce sounds and music in FL Studio.</p>
      
      <p>Feel free to check out my projects section below to learn more about my professional experience.</p>

      </div>
    </div>
    <div className="skills" data-aos="fade-left">
      <ul className="skills-list">
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faReact} /><span>React</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCode} /><span>TypeScript</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faJs} /><span>JavaScript</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faNode} /><span>Node</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCode} /><span>PostgreSQL</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCode} /><span>Express</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faHtml5} /><span>HTML5</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCss3Alt} /><span>CSS3</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faGithub} /><span>GitHub</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faGitAlt} /><span>Git</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCode} /><span>Redux</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCode} /><span>React Router</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faStripe} /><span>Stripe</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faSass} /><span>Sass</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faBootstrap} /><span>Bootstrap</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faNpm} /><span>Npm</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faPhp} /><span>PHP</span></li>
      <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faWordpress} /><span>WordPress</span></li>
      </ul>
    </div>
  </section>
);

export default About;