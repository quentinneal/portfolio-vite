import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

// Components
import Header from './components/header/header.component';
import Content from './components/content/content.component';

// Animation On Scroll Initialization
import AOS from 'aos';

// Formspree
import { FormspreeProvider } from "@formspree/react";

function App() {
  // Initialize Animation On Scroll (AOS)
  useEffect(() => {
    AOS.init({
      duration: 1000 // Global animation duration for all AOS animations
    });
  });
    

// States For Keyboard Highlight, Menu Position, Dark Mode And Detection Of Above The Fold Images
  const [mouseUser, setMouseUser] = useState(false);
  const [menuBottom, setMenuBottom] = useState(sessionStorage.getItem('menu-bottom') === 'true');
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');
  const [logoImageLoaded, setLogoImageLoaded] = useState(false);
  const [bannerImageLoaded, setBannerImageLoaded] = useState(false);

// Disable Keyboard Highlight On Detection Of Mouse Click
  useEffect(() => {

    const initMouseMode = () => {
      setMouseUser(true);
      window.removeEventListener('mousedown', initMouseMode);
    }

    window.addEventListener('mousedown', initMouseMode);
    return () => {
      window.removeEventListener('mousedown', initMouseMode);
    };

  }, []);

// Toggle Mobile Menu Placement (Top Or Bottom). Top Is Default For Mobile App Browser Compatibility
  useEffect(() => {sessionStorage.setItem('menu-bottom', menuBottom);}, [menuBottom]);
  const changeMenuDirection = () => {setMenuBottom(prevState => !prevState);}

// Toggle Dark Mode. Saves Settings In Local Storage.
  useEffect(() => {localStorage.setItem('dark-mode', darkMode);}, [darkMode]);
  const changeColorScheme = () => {setDarkMode(prevState => !prevState);}

// Detects If Above The Fold Images Are Loaded. When Loaded, Will Change State To Trigger Intro Animations
  const logoLoaded = () => {setLogoImageLoaded(true);}
  const bannerLoaded = () => {setBannerImageLoaded(true);}

// Smooth scrolling (CSS Solution Shows Bugs On Some Mobile Browsers)
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const homeScroll = () => {homeRef.current.scrollIntoView({ behavior: 'smooth' })}
  const aboutScroll = () => {aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
  const projectsScroll = () => {projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
  const contactScroll = () => {contactRef.current.scrollIntoView({ behavior: 'smooth' })}

  return (
    <FormspreeProvider project="1628451151437364529">
      <div className={`spinner 
          ${darkMode ? 'dark-mode' : 'light-mode'} 
          ${logoImageLoaded && bannerImageLoaded ? 'startIntroAnimation' : 'pauseIntroAnimation'}
      `}>
        <div className="spinner-object" />
      </div>
      <div className={`App
          ${darkMode ? 'dark-mode' : 'light-mode'} 
          ${mouseUser ? 'mouseMode' : 'keyboardMode'}
      `}>
        <Header 
          menuBottom={menuBottom} 
          changeMenuDirection={changeMenuDirection}
          changeColorScheme={changeColorScheme} 
          colorScheme={`${darkMode ? 'dark' : 'light'}`}
          logoLoaded={logoLoaded} 
          homeScroll={homeScroll} 
          aboutScroll={aboutScroll} 
          projectsScroll={projectsScroll} 
          contactScroll={contactScroll}
        />
        <Content 
          menuBottom={menuBottom} 
          bannerLoaded={bannerLoaded} 
          homeRef={homeRef} 
          aboutRef={aboutRef} 
          projectsRef={projectsRef} 
          contactRef={contactRef} 
          projectsScroll={projectsScroll}
        />
      </div>
    </FormspreeProvider>
  );
}

export default App
