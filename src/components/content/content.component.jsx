// React
import React from 'react';
import 'aos/dist/aos.css';

// Styles
import './content.styles.scss';

// Components
import Banner from '../banner/banner.component';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Contact from '../contact/contact.component';

const Content = ({bannerLoaded, homeRef, aboutRef, projectsRef, contactRef, projectsScroll, menuBottom}) => (
  <div className={`content ${menuBottom ? 'bottomMenu' : ''}`} tabIndex='-1'>
    <Banner bannerLoaded={bannerLoaded} homeRef={homeRef} projectsScroll={projectsScroll}/>
    <About aboutRef={aboutRef} menuBottom={menuBottom}/>
    <Projects projectsRef={projectsRef} menuBottom={menuBottom}/>
    <Contact contactRef={contactRef} menuBottom={menuBottom}/>
  </div>
);

export default Content;