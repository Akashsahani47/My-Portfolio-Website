import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Subject 2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  
  const resumeLink = 'https://drive.google.com/file/d/1s6S2ITGGcNsmywP1S3_NEMcX38RlE3eb/view?usp=sharing';
  const githubLink = 'https://github.com/Akashsahani47';
  const linkedinLink = 'https://www.linkedin.com/in/akash-kumar-3a7928222/';

  return (
    <div id='home' className='hero'>
      <div className="hero-img-container">
        <img src={profile_img} alt="Profile" />
      </div>
      <h1><span>Hello,</span> I'm Akash Kumar</h1>
      <p>I'm a passionate MERN Stack Developer, dedicated to crafting robust and user-friendly web applications.</p>
      <div className='hero-action'>
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
            My Resume
          </a>
        </div>
      </div>
      <div className='hero-action2'>
        <div className="hero-github">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
            My Github
          </a>
        </div>
        <div className="hero-linkdin">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
            My LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
