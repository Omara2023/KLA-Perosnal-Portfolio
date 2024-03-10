import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { format } from 'date-fns';
import backendPath from "./backendPath";

const BlogList = () => {

  const path = `${backendPath}blogs/`;
  const {data: blogs} = useFetch(path);  

  // Check if blogs is null or undefined before mapping over it
  if (!blogs) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) =>{
    const date = new Date(dateString);
    const formattedDate = format(date, "yyyy-MM-dd 'at' HH:mm:ss"); // Customize the format as needed
    return formattedDate;
  }

  return (  
    <div className="blog-list">
      <h2>My Ramblings</h2>
       {blogs.map((blog) => (
        <div className="blog-preview" key={blog.slug}>
          <Link to={`/blogs/${blog.slug}`}>
            <h2>{ blog.title }</h2>
            <p>{blog.body.slice(0,50)}</p>
            <p className="blog-date">Written on { formatDate(blog.date) }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;