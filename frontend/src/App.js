import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;