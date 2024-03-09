import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react";

const ImageSlider = ({ imageUrls}) => {
  
  const [imageIndex, setImageIndex] = useState(0)
  
  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  };
  
  return (  
    <div style={{width: "100%", height: "100%", position: "relative"}}>
      <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden"}}>
        {imageUrls.map(url => (
          <img key={url} src={"http://127.0.0.1:8000/" + url} className="img-slider-img"
          style={{translate: `${-100 * imageIndex}%`}}/>
        
        ))}
      </div>
      <button onClick={showPrevImage} className="img-slider-button" style={{left: 0}}><ArrowBigLeft/></button>
      <button onClick={showNextImage} className="img-slider-button" style={{right: 0}}><ArrowBigRight/></button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-button"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
 
export default ImageSlider;