import ImageSlider from "./ImageSlider";

const Gallery= () => {

  const images = ['car-1.jpg', 'car-2.jpg', 'car-3.jpg', 'car-4.jpg', 'car-5.jpg'];

  return (  
    <div  style={{
      maxWidth: "1200px",
      width: "100%",
      aspectRatio: "10 / 6",
      margin: "0 auto",
    }}>
      <ImageSlider imageUrls={images}/>
    </div>
  );
}
 
export default Gallery;