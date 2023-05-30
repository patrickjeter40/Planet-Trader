import * as React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Settings for the slider here https://react-slick.neostack.com/docs/api/
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 20000,
    
  };
  return (
    <Slider {...settings} style={{margin:"35px 0px"}}>
      <div style={{ width: "100%", }}>
        <Image
          src="https://drive.google.com/uc?id=1XA835vbCigj3z-LsTtREf1KGQKLaU8De" 
          height={200}
          width={1500}
          alt="Black and white image of a planet"
          quality={100}
          style={{objectFit: "cover", borderRadius: "18px", width: "100%",}}
        />  
      </div>
      <div>
      <Image
          src="https://drive.google.com/uc?id=1XA835vbCigj3z-LsTtREf1KGQKLaU8De" 
          height={200}
          width={1500}
          alt="Black and white image of a planet"
          quality={100}
          style={{objectFit: "cover", borderRadius: "18px", width: "100%",}}
        />  
      </div>
      <div>
      <Image
          src="https://drive.google.com/uc?id=1XA835vbCigj3z-LsTtREf1KGQKLaU8De" 
          height={200}
          width={1500}
          alt="Black and white image of a planet"
          quality={100}
          style={{objectFit: "cover", borderRadius: "18px", width: "100%",}}
        />  
      </div>
    </Slider>  
  );
}




