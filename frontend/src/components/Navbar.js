import { Link } from "react-router-dom";

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1><Link to="/">Home</Link></h1>
      <div className="links">
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;