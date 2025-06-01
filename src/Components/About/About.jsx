import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/IMG_0046.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>As a MERN Stack Developer, I enjoy solving complex problems and creating clean, scalable web applications. My focus is on writing quality code that enhances user experience and drives business growth.</p>
            <p>In my final year at Galgotias University, I’m eager to bring my technical skills and creative mindset to a team that values innovation and continuous learning.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS & JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>REACTJS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>NODEJS</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>EXPRESSJS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>MONGODB</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>INTERNSHIPS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
