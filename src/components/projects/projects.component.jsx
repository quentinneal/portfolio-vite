// React
import React, { useState } from "react";

// Animation On Scroll
import 'aos/dist/aos.css';

// Styles
import './projects.styles.scss';

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faBookOpen, faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Projects Array
import {projectsList} from './projects.export';

const Projects = ({projectsRef, menuBottom}) => {
    
  // State for projects array (See projects.export.jsx To See List Of Projects)
  const [projects, setProjects] = useState(projectsList);

  return (
    <section className="projects">
    <div ref={projectsRef} className={`${menuBottom ? 'projects-anchor-none' : 'projects-anchor'}`} />
    {projects.map(({id, images, title, technologies, summary, full, sources, color, alt, direction, readMore}, i) => (
      <div key={id} className={`project ${color}`}>
        <img
          loading="lazy"
          className="background"
          sizes="(max-width: 3840px) 100vw, 3840px"
          srcSet={`
          ${images.image1} 320w,
          ${images.image2} 640w,
          ${images.image3} 960w,
          ${images.image4} 1280w,
          ${images.image5} 1600w,
          ${images.image6} 1920w,
          ${images.image7} 2240w,
          ${images.image8} 2560w,
          ${images.image9} 2880w,
          ${images.image10} 3200w,
          ${images.image11} 3520w,
          ${images.image12} 3840w`}
          src={images.image12}
          alt={alt}
        />
          <div data-aos={direction} className="project-info">
            <div className='title'>{title}</div>
            <div className='technologies'>
            {technologies.map((technology, index) => (
              <div key={index} className='box'><span>{technology}</span></div>
            ))}
            </div>
            <div className='summary' dangerouslySetInnerHTML={{__html: summary}} />
            <div className='project-actions' >
              <div className="project-icons">
                <a className="icon icon-link" href={sources.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FontAwesomeIcon className="fa-fw" icon={faGithub} />
                </a>
                <a className="icon icon-link" href={sources.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                  <FontAwesomeIcon className="fa-fw" icon={faDesktop} />
                </a>
              </div>
              <div className="project-icons">
                <button className="icon icon-button" tabIndex="0" rel="noopener noreferrer" title={`${readMore ? "Read Less" : "Read More"}`}
                    onClick={() => {
                      // Copy Projects Array And Toggle ReadMore Boolean, Replace State With Modified Array
                      let projectsCopy = [...projects];
                      let projectCopy = { ...projectsCopy[i] };
                      projectCopy.readMore = !readMore;
                      projectsCopy[i] = projectCopy;
                      setProjects(projectsCopy);
                    }}>
                      {readMore ? (
                        <FontAwesomeIcon className="fa-fw" icon={faBook} />
                      ) : (
                        <FontAwesomeIcon className="fa-fw" icon={faBookOpen} />
                      )}
                </button>
              </div>
            </div>
            <div className={`rest ${readMore ? 'open' : 'close'}`}>
              <div className='full' dangerouslySetInnerHTML={{__html: full}} />
            </div>
          </div>
      </div>
      ))}
    </section>
  );
}

export default Projects;