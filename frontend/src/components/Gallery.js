import ImageSlider from "./ImageSlider";

const Gallery= () => {

  const images = ['static/car-1.jpg', 'static/car-2.jpg', 'static/car-3.jpg', 'static/car-4.jpg', 'static/car-5.jpg'];

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