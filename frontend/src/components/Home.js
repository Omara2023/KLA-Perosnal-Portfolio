import React from 'react';
import { useEffect, useState } from 'react';
import myImage from './profile.jpg';
import linkedInImage from './linkedin.png';
import gitHubImage from './github.png';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`home ${isLoaded ? 'fade-in' : ''}`}>
      <section className="profile">
        <div className="profile__pic-container">
          <img src={myImage} alt="Profile" />
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
              src={linkedInImage}
              alt="LinkedIn"
              className="icon"
              onClick={() => {window.location.href = 'https://linkedin.com/';}}
            />
            <img
              src={gitHubImage}
              alt="GitHub"
              className="icon"
              onClick={() => {window.location.href = 'https://github.com/';}}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
