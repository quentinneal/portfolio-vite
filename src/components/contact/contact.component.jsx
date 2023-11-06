// React
import React from 'react';

// Formspree
import { useForm, ValidationError } from "@formspree/react";

// Styles
import './contact.styles.scss';

// Animation On Scroll
import 'aos/dist/aos.css';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';

const Contact = ({contactRef, menuBottom}) => {

  const [state, handleSubmit] = useForm('contactMe');

  if (state.succeeded) {
    return (
      <section className="feedback">
        <div ref={contactRef} className={`${menuBottom ? 'contact-anchor-none' : 'contact-anchor'}`} />
        <div className="title">Thank you!</div>
        <div className="description">Your message was received!</div>
      </section>
    );
  }

  return (
    <section className="contact">
    <div ref={contactRef} className={`${menuBottom ? 'contact-anchor-none' : 'contact-anchor'}`} />
      <h2 className="title" data-aos="fade-down">Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-right">
        <div className="name form-group">
          <label className="name-label form-item" htmlFor="name">Name<span></span></label>
          <input className="name-input form-item" type="text" id="name" name="name"/>
          <input className="honeypot" type="text" name="_gotcha" />
        </div>
        <div className="email form-group">
          <label className="email-label form-item" htmlFor="email">Email<span>*</span></label>
          <input className="email-input form-item" type="email" id="email" name="email"/>
          <ValidationError className="email-validator" field="email" prefix="Email" errors={state.errors} />
        </div>
        <div className="message form-group">
          <label className="message-label form-item" htmlFor="message">Message<span></span></label>
          <textarea className="message-textarea form-item" id="message" name="message" rows="8"/>
        </div>
        <div className="buttons form-group">
          <button type="reset" className="form-button">Reset</button>
          <button type="submit" className="form-button">Submit</button>
          <ValidationError errors={state.errors} />
        </div>
      </form>
      <div className="contact-details" data-aos="fade-left">
        <p className="contact-description">Thank you for visiting my website! Feel free to contact me using the contact form or LinkedIn.</p>
        <div className="contact-icons">
          <a className="linkedin-icon icon" href="https://www.linkedin.com/in/quentinneal/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon className="fa-fw" icon={faLinkedin} />
          </a>
          <a className="github-icon icon" href="https://github.com/quentinneal" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon className="fa-fw" icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;