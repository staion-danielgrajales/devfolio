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
            <p>I build web applications with a strong focus on accessibility, precision and maintainable systems.</p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi nulla ab similique dolorem consequuntur necessitatibus laborum,
          ex minima sequi cumque praesentium ullam quis culpa accusantium magni! Mollitia facilis quos libero.
        </div>
      </section>
    </>
  )
}

export default App
