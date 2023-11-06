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

      <p>I'm a Software Developer with fundamental experience in Data Structures & Algorithms, JavaScript, SQL, HTML, CSS and Design Principles.
      I also use other technologies such as React, TypeScript, Node, PostgreSQL, Git and more.</p>

      <p>A strong aspect of my personality is to solve problems. I like to push boundaries of what a website is 
      supposed to be and discover unique ways to find solutions. My hospitality and retail experience along with traveling have also 
      given me plenty of opportunities to understand and work with different types of people.</p>

      <p>My plans are to enter the industry as a Frontend or Software Developer.</p>

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