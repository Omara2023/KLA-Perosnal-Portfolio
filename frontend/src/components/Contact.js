import backendPath from "./backendPath";

const Contact = () => {

  const path = `${backendPath}static/`

  return (  
    <section className="contact">
      <p className="section-text">Get in Touch</p>
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-item">
          <img src={path + "email.png"} alt="Email icon" className="icon email-icon" />
          <p><a href="mailto:omar.almizan@hotmail.com">omar.almizan@hotmail.com</a></p>
        </div>
        <div className="contact-item">
          <img src={path + "linkedin.png"} alt="LinkedIn icon" className="icon" />
          <p><a href="https://www.linkedin.com/in/omar-al-mizan-bb92a81aa/">LinkedIn</a></p>
        </div>
      </div>
    </section>

  );
}
 
export default Contact;