// pages/index.js
import Image from "next/image";
import slide1 from "../public/images/slideshow/slideshow-1.jpeg";
import slide2 from "../public/images/slideshow/slideshow-2.jpeg";
import slide3 from "../public/images/slideshow/slideshow-3.jpeg";
import slide4 from "../public/images/slideshow/slideshow-4.jpeg";
import slide5 from "../public/images/slideshow/slideshow-5.jpeg";
import slide6 from "../public/images/slideshow/slideshow-6.jpeg";
import slide7 from "../public/images/slideshow/slideshow-7.jpeg";
import slide8 from "../public/images/slideshow/slideshow-8.jpeg";
// import slide9 from "../public/images/slideshow/slideshow-9.jpeg";
// import slide10 from "../public/images/slideshow/slideshow-10.jpeg";
import slide11 from "../public/images/slideshow/slideshow-11.jpeg";
// import slide12 from "../public/images/slideshow/slideshow-12.jpeg";
import slide13 from "../public/images/slideshow/slideshow-13.jpeg";
import slide14 from "../public/images/slideshow/slideshow-14.jpg";
import slide15 from "../public/images/slideshow/slideshow_15.jpg";
import slide16 from "../public/images/slideshow/slideshow_16.jpg";
import slide17 from "../public/images/slideshow/slideshow_17.jpg";
import slide18 from "../public/images/slideshow/slideshow_18.jpg";
import slide19 from "../public/images/slideshow/slideshow_19.jpg";
import slide20 from "../public/images/slideshow/slideshow_20.jpg";
import slide21 from "../public/images/slideshow/slideshow_21.jpg";
import slide22 from "../public/images/slideshow/slideshow-22.jpg";




export const Slider = () => {
    const images = [slide1, slide2, slide3,slide11, slide4, slide5, slide6, slide7, slide8, slide22, slide13, slide14,slide15, slide16, slide17, slide18, slide19, slide20, slide21];
  return (
    <section className="slide">
      
      <div className="image-slider">
        
        {images.map((image, index) => (
          
          <Image
          className="slideimage"
          key={index}
          src={image}
          />))}

      </div>
    </section>
  );
}


export default Slider;
