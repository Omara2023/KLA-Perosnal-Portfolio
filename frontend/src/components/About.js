import React from 'react';
import './AboutMe.css'; 

const AboutMe = () => {

  const backendPath = "http://127.0.0.1:8000/static/profile.jpg";  

  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <h1>About Me</h1>
        <p>Welcome to the site! I'm passionate about software development, healthTech and I love building cool stuff.</p>
      </div>
      <div className="about-me-content">
        <div className="about-me-image">
        <img src={backendPath} alt="Software Developer" />
        </div>
        <div className="about-me-details">
          <h2>Omar Al-Mizan</h2>
          <p>Full Stack Developer</p>
          <p>I have experience with various technologies including React, Node.js, and Django. I enjoy tackling challenging problems and creating elegant solutions.</p>
          <p>Feel free to get in touch with me via email at: omar.almizan@hotmail.com.</p>
        </div>
      </div>
      <div className="about-me-more">
          <p>I'm currently in my first year of CS and I've participated in several hackathons already. The main languages I work in are Python, Java, Javascript and SQL.
             Shout out to the top folk at KLA and the KBC for supercharging my WebDev journey. It is no exagerration to say that this course has taught me half of everything I know!</p>
        </div>
    </div>
  );
}

export default AboutMe;
