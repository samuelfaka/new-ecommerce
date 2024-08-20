import React from 'react'
import Image1 from "../../assets/Hero/woman-no.png";
import Image2 from "../../assets/Hero/woman.png";
import Image3 from "../../assets/Hero/sale.png";
import Slider from 'react-slick';



const ImageList = [
  {
    id: 1,
    img: Image1,
    tittle: "Upto 50% off on all Mens's Wear",
    description: 
    "lorem His life will forever br changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor indcididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    tittle: "30% off on all Woman's Wear",
    description:
     "who's there lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eisumod tempor incididunt ut labore et dolore magna alique.",
  },
  {
    id: 3,
    img: Image3,
    tittle: "70% off on all Products sale",
    description:
     "consectetur adipiscing elit, sed do eisumod tempor incididunt ut labore et dolore magna alique",
  },
];

const Hero = ({handleOrderPopup}) => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };


  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100
    flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200
    ">
      {/* backgroud pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0
      rounded-3xl rotate-45 -z-9">

      </div>
      {/* Hero secton */}
      <div className="container pb-8 sm:pb-0">
        <Slider {... settings}>
          {ImageList.map((data) =>(

<div>
<div className="grid grid-cols-1 sm:grid-cols-2">
  {/* text content sector */}
   <div
   className='flex flex-col justify-center
   gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
   relative z-10'
   >
    <h1 
      data-aos="zoom-out"
    data-aos-once="true"
    data-aos-duration="500"
    className="text-5xl sm:text-6xl lg:text-7xl font-bold">
      {data.tittle}</h1>
    <p 
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="500"
    className="text-sm">
      {data.description}
    </p>
    <div  
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="500"
    >
      <button
      onClick={handleOrderPopup}
      className="bg-gradient-to-r from-primary to-secondery hover:scale-105
      duration-200 text-white py-2 px-4 rounded-full"
      >
        Order Now
      </button>
    </div>
   </div>
  {/* Images section */}
  <div className='order-2 sm:order-1'>

    <div 
      data-aos="zoom-in"
    data-aos-once="true"
    className='relative z-10'>
      <img src={data.img} alt=""
      className='w-[300px] h-[300px] sm:h-[450px] sm:w-[250px]
      sm:scale-125 object-contain mx-auto lg:scale-120'
      />
    </div>
  </div>
</div>
</div>

          ))}
        
        </Slider>
        
 
        
        
      </div>
    </div>
  )
}

export default Hero