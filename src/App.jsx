import './assets/styles/fonts.css';
import './assets/styles/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section className='panel-container'>
        <div className='left-container'>
          <div className='name-container'>
            <h1>Daniel Grajales</h1>
            <h3>Full Stack Developer</h3>
            <p>I build web applications with a strong focus on scalability, structure, and usability.</p>
          </div>

          <div className='navi-container'>
            <ul>
              <li>
                <span className='line-span'> </span>
                <span className='navi-text'> About </span> 
              </li>

              <li>
                <span className='line-span'> </span>
                <span className='navi-text'> Experience </span> 
              </li>

              <li>
                <span className='line-span'> </span>
                <span className='navi-text'> Project </span> 
              </li>
            </ul>
          </div>

          <div className="socials-container">
            <a href="#" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={ faGithub } size="1x" />
            </a>

            <a href="#" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={ faLinkedin } size="1x" />
            </a>

            <a href="#" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={ faInstagram } size="1x" />
            </a>

            <a href="#" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={ faDiscord } size="1x" />
            </a>

          </div>

        </div>

        <div className='right-container'>
          <div className='parag-container'>
            <p>
              I'm a full-stack developer who enjoys creating scalable, reliable, and user-friendly web applications.
              I'm particularly drawn to complex projects where I can turn complex ideas into clear and intuitive user experiences.
            </p>

            <br />

            <p>
              Currently, I work as a Software Engineer at <strong> Staion S.A.S,</strong> where I contribute to the design and development of full-stack solutions.
              My work focuses on improving development workflows, enhancing system performance, and ensuring that each application is scalable,
              maintainable, and aligned with both user and business needs.
            </p>

            <br />

            <p>
              I worked at <strong> Bancolombia</strong>, where I contributed to the development of internal tools and supported the optimization of business processes.
              My role involved improving user experience and helping deliver solutions that enhanced operational efficiency and decision-making.
            </p>

            <br />

            <p>
              In my spare time, I enjoy teaching others about programming, going for runs, exploring nature, and spending quality time with my family and pets.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
