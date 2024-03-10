import React from 'react';
import { useEffect, useState } from 'react';
import backendPath from './backendPath';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const path = `${backendPath}static/`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`home ${isLoaded ? 'fade-in' : ''}`}>
      <section className="profile">
        <div className="profile__pic-container">
          <img src={path + "profile.jpg"} alt="Profile" />
        </div>
        <div className="profile__text">
          <p className="profile__text__p1">Hello, I'm</p>
          <h1 className="profile__title">Omar Al-Mizan</h1>
          <p className="profile__text__p2">Full Stack Developer</p>
          <div className="profile__btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('./assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => {window.location.href = '/contact';}}>
              Contact Info
            </button>
          </div>
          <div className="profile__socials-container">
            <img
              src={path + "linkedin.png"}
              alt="LinkedIn"
              className="icon"
              onClick={() => {window.location.href = 'https://www.linkedin.com/in/omar-al-mizan-bb92a81aa/';}}
            />
            <img
              src={path + "github.png"}
              alt="GitHub"
              className="icon"
              onClick={() => {window.location.href = 'https://github.com/Omara2023';}}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
