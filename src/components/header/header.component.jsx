// React
import React from 'react';

// Styles
import './header.styles.scss';

// Logo Image
import photo560square from '../../assets/photo560square.jpg';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faCode, faEnvelope, faMoon, faSun, faSortAmountUp, faSortAmountDownAlt} from '@fortawesome/free-solid-svg-icons';

const Header = ({ logoLoaded, changeColorScheme, colorScheme, homeScroll, aboutScroll, projectsScroll, contactScroll, changeMenuDirection, menuBottom }) => (
  <header className={`header ${menuBottom ? 'bottomHeaderMenu' : ''}`}>
    <a className="logo" href="https://www.linkedin.com/in/quentinneal/" target="_blank" rel="noopener noreferrer">
      <img loading="eager" className="logo-image" alt="logo" src={photo560square} onLoad={logoLoaded}/>
    </a>
    <div className="menu">
      <nav className="navigation">
        <a className="home-link" onClick={homeScroll} href="#home" title="Home"><FontAwesomeIcon icon={faHome} /><span>Home</span></a>
        <a className="about-link" onClick={aboutScroll} href="#about" title="About Me"><FontAwesomeIcon icon={faAddressCard}/><span>About</span></a>
        <a className="projects-link" onClick={projectsScroll} href="#projects" title="Portfolio Projects"><FontAwesomeIcon icon={faCode}/><span>Projects</span></a>
        <a className="contact-link" onClick={contactScroll} href="#contact" title="Contact"><FontAwesomeIcon icon={faEnvelope}/><span>Contact</span></a>
      </nav>
      <div className="tools">
      {menuBottom
      ? <button className="menu-toggle" onClick={changeMenuDirection} title="Move Menu To Top"><FontAwesomeIcon icon={faSortAmountUp}/></button>
      : <button className="menu-toggle" onClick={changeMenuDirection} title="Move Menu To Bottom"><FontAwesomeIcon icon={faSortAmountDownAlt}/></button>}
      {colorScheme === 'dark' 
      ? <button className="light-toggle color-toggle" onClick={changeColorScheme} title="Light Mode"><FontAwesomeIcon icon={faSun}/></button> 
      : <button className="dark-toggle color-toggle" onClick={changeColorScheme} title="Dark Mode"><FontAwesomeIcon icon={faMoon}/></button>}
      </div>
    </div>
    <a className="logo hide" href="https://www.linkedin.com/in/quentinneal/" target="_blank" rel="noopener noreferrer">
      <img className="logo-image" alt="logo"  src={photo560square} />
    </a>
  </header>
);

export default Header;