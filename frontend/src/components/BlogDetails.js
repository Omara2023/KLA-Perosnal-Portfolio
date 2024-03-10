import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import backendPath from "./backendPath";

const BlogDetails = () => {
  const { slug } = useParams();
  const path = `${backendPath}blogs/`;
  const {data: blog, error, isLoading} = useFetch(path + slug)

  return (  
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <img src={blog.thumb} alt="I would hope the thumbnail is here, but it seems it aint so..." />
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      ) }
    </div>
  );
}
 
export default BlogDetails;