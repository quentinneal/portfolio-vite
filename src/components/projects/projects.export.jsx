/*
Use This File To Import Images From image.export.jsx & Create New Project Sections
*/
import { northleaflodge320, northleaflodge640, northleaflodge960, northleaflodge1280, northleaflodge1600, northleaflodge1920, northleaflodge2240, northleaflodge2560, northleaflodge2880, northleaflodge3200, northleaflodge3520, northleaflodge3840} from './image.export';
import { infinity320, infinity640, infinity960, infinity1280, infinity1600, infinity1920, infinity2240, infinity2560, infinity2880, infinity3200, infinity3520, infinity3840} from './image.export';
import { portfolio320, portfolio640, portfolio960, portfolio1280, portfolio1600, portfolio1920, portfolio2240, portfolio2560, portfolio2880, portfolio3200, portfolio3520, portfolio3840} from './image.export';
import { crwnClothing320, crwnClothing640, crwnClothing960, crwnClothing1280, crwnClothing1600, crwnClothing1920, crwnClothing2240, crwnClothing2560, crwnClothing2880, crwnClothing3200, crwnClothing3520, crwnClothing3840} from './image.export';

export const projectsList = [{
  id: 'Northleaf Lodge',
  images: {
    image1: northleaflodge320,
    image2: northleaflodge640,
    image3: northleaflodge960,
    image4: northleaflodge1280,
    image5: northleaflodge1600,
    image6: northleaflodge1920,
    image7: northleaflodge2240,
    image8: northleaflodge2560,
    image9: northleaflodge2880,
    image10: northleaflodge3200,
    image11: northleaflodge3520,
    image12: northleaflodge3840
  },
  title: 'NorthLeaf Lodge',
  technologies: ['React', 'TypeScript', 'Javascript', 'PostgreSQL', 'Node', 'Express', 'HTML5', 'CSS / SCSS', 'React Router', 'Redux Toolkit', 'Npm', 'GitHub', 'Git'],
  summary: `<p>This project is a full stack hotel booking application.</p>`,
  full: `<p>This project contains a slider with an autoplay feature (until an arrow is clicked), a room filters section and a checkout section.</p>
  <p>The data from the room filters page is extracted from the PostgreSQL database and displayed on the page with the assistance of tools such as Node and Express.</p>`,
  sources: {
    demo: 'https://northleaf-lodge-live-quentin.herokuapp.com/',
    github: 'https://github.com/quentinneal/northleaf-lodge'
  },
  color: 'default',
  alt: 'Northleaf Lodge',
  direction: 'slide-right-custom',
  readMore: false
  },
  {
  id: 'Infinity',
  images: {
    image1: infinity320,
    image2: infinity640,
    image3: infinity960,
    image4: infinity1280,
    image5: infinity1600,
    image6: infinity1920,
    image7: infinity2240,
    image8: infinity2560,
    image9: infinity2880,
    image10: infinity3200,
    image11: infinity3520,
    image12: infinity3840
  },
  title: 'Infinity',
  technologies: ['React', 'Javascript', 'HTML5', 'CSS / SCSS', 'NASA Image and Video REST API', 'Intersection Observer API', 'Npm', 'GitHub', 'Git'],
  summary: `<p>NOTE: API is rate limited.</p>
  <p>This project is an infinite scrolling website with search features. The images are fetched from the NASA 
  Image and Video Library REST API. The infinite scrolling mechanism uses the Intersection Observer API.</p>`,
  full: `<p>I've realized that other developers understanding your code is just as important as writing it, so I 
  decided to put extra effort into keeping the code in this project organized and easy to understand.</p>
  <p>I've learned some interesting data manipulation techniques that will be useful in my career.</p>`,
  sources: {
    demo: 'https://infinity-live-quentin.herokuapp.com/',
    github: 'https://github.com/quentinneal/infinity'
  },
  color: 'default',
  alt: 'Infinity',
  direction: 'slide-left-custom',
  readMore: false
  },
  {
  id: 'Portfolio',
  images: {
    image1: portfolio320,
    image2: portfolio640,
    image3: portfolio960,
    image4: portfolio1280,
    image5: portfolio1600,
    image6: portfolio1920,
    image7: portfolio2240,
    image8: portfolio2560,
    image9: portfolio2880,
    image10: portfolio3200,
    image11: portfolio3520,
    image12: portfolio3840
  },
  title: 'Portfolio',
  technologies: ['React', 'Javascript', 'HTML5', 'CSS / SCSS', 'Formspree', 'Font Awesome', 'Node', 'Npm', 'GitHub', 'Git'],
  summary: `<p>This project is my personal portfolio website. I built this website to show my ability to build a website on my own, push boundaries with my CSS skills and to show my projects. </p>`,
  full: `<p>The features of this single page website include smooth scrolling, a preloading spinner, keyboard 
  accessibility, local & session storage, dark mode, a read more feature, mobile fixed navigation, image 
  optimization and a Formspree contact form.</p>`,

  sources: {
    demo: 'https://portfolio-live-quentin.herokuapp.com/',
    github: 'https://github.com/quentinneal/portfolio'
  },
  color: 'default',
  alt: 'Portfolio',
  direction: 'slide-right-custom',
  readMore: false
  },
  {
    id: 'crwnClothing',
    images: {
      image1: crwnClothing320,
      image2: crwnClothing640,
      image3: crwnClothing960,
      image4: crwnClothing1280,
      image5: crwnClothing1600,
      image6: crwnClothing1920,
      image7: crwnClothing2240,
      image8: crwnClothing2560,
      image9: crwnClothing2880,
      image10: crwnClothing3200,
      image11: crwnClothing3520,
      image12: crwnClothing3840
    },
    title: 'Crwn-Clothing',
    technologies: ['HTML5', 'CSS3 / SCSS', 'Javascript', 'React', 'React Router', 'Stripe', 'Redux technologies', 'Firebase', 'Reselect', 'Compression', 'Lodash.memoise', 'Node', 'Npm', 'GitHub', 'Git'],
    summary: `<p>This project is a modified e-commerce website based on a course called Complete React Developer by Andrei Neagoie and Yihua Zhang.</p>
    <p>The website's aesthetics was redesigned by me with CSS and JavaScript as I worked on this project in order to brush up on my coding skills.</p>`,
    full: `<p>This project contains features such as sign in/out, sign up, routing, CRUD operations, cart functionality, checkout with stripe and more.</p>
    <p>The aesthetic improvements include a website redesign, fixed menu, animations and responsive design.</p>`,
    sources: {
      demo: 'https://crwn-live-quentin.herokuapp.com/',
      github: 'https://github.com/quentinneal/crwn-clothing',
      original: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'
    },
    color: 'default',
    alt: 'Crown Clothing',
    direction: 'slide-left-custom',
    readMore: false
  }];