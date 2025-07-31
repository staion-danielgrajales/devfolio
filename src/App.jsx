import './assets/styles/fonts.css';
import './assets/styles/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import lomiPreview from './assets/images/lomi_preview.png'

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
          <div className='parag-container' id='about'>
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

          <div className='experience-container' id='experience'>
            <ul className='experience-list'>
              <li className="experience-card">
                <div className="experience-header">
                    <h3 className="experience-title">
                      Software Engineer · Staion
                    </h3>
                    <span className="experience-date">JUNE 2025 — PRESENT</span>
                </div>

                <p className="experience-description">
                  I contribute to the development of scalable, maintainable web applications from planning to deployment. 
                  I work on designing clean architectures, improving system performance, and ensuring code quality,
                  while collaborating with the team to deliver reliable, high-impact solutions.
                </p>

                <div className="tech-stack">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Django</span>
                </div>
              </li>

              <li className="experience-card">
                <div className="experience-header">
                    <h3 className="experience-title">
                      Full stack developer · Freelance
                    </h3>
                    <span className="experience-date">FEBRUARY 2024 — DECEMBER 2024</span>
                </div>

                <p className="experience-description">
                  As a freelance developer, I was responsible for delivering full-stack web solutions for digital projects, from initial planning to deployment.
                  I collaborated closely with clients to understand their needs and translate them into functional, scalable applications.
                </p>

                <div className="tech-stack">
                  <span className="tech-tag">Spring Boot</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
              </li>

              <li className="experience-card">
                <div className="experience-header">
                    <h3 className="experience-title">
                      Software developer · Bancolombia
                    </h3>
                    <span className="experience-date">JULY 2023 — JANUARY 2024</span>
                </div>

                <p className="experience-description">
                  I was part of the team responsible for building internal tools to support and optimize business processes. 
                  I focused on improving user experience and helping deliver solutions that enhanced efficiency, reporting,
                  and decision-making across the organization.
                </p>

                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Django Rest Framework</span>
                  <span className="tech-tag">Angular</span>
                </div>
              </li>
            </ul>
          </div>

          <div className='project-container' id='projects'>
            <ul className='project-list'>
              <a href='https://lomi.staion.com.co/' target="_blank" rel="noopener noreferrer" className='link-status'>
                <li className='project-card'>
                  
                    <img
                      src={ lomiPreview }
                      alt="Project preview"
                      className="preview-img"
                    />
                  

                  <div className='project-content'>
                    <div className='project-header'>
                        <h3 className="project-title">
                          LOMI
                        </h3>
                    </div>

                    <p className="project-description">
                      Lomi is the go to solution for brands that need a stunning fast loading website that not only looks great but drives real results.
                    </p>

                    <div className="tech-stack">
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Django</span>
                    </div>
                  </div>  
                </li>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}


export default App
