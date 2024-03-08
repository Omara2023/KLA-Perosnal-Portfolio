import myImage from './profile.jpg'; 
import gitHubImage from "./github.png";
import linkedInImage from "./linkedin.png";

const Home = () => {

  return (
    <div className="home">
      <section id="profile">
        <div className="section__pic-container">
          <img src={myImage} alt="This should have loaded.." />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Omar Al-Mizan</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
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
          <div id="socials-container">
            <img
              src={linkedInImage}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => {window.location.href = 'https://linkedin.com/';}}
            />
            <img
              src={gitHubImage}
              alt="My Github profile"
              className="icon"
              onClick={() => {window.location.href = 'https://github.com/';}}
            />
          </div>
        </div>
      </section>
    </div>
  );
  
}

export default Home;
