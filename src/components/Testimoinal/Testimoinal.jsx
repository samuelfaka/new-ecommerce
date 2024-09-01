import React from 'react'
import Img1 from '../../assets/Banner/fruit/fruit4.png'
import Slider from 'react-slick';

const TestimoinalData = [

  {
    id: 1,
    img: Img1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 1,
    img: Img1,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 1,
    img: Img1,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
  {
    id: 1,
    img: Img1,
    name: "Sachin Tendulkur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  },
]

const Testimoinal = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-10 mb-10'> 
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>What our customer are saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimoinal</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet constectetur,
                    adipisicing elit. sit 
                    asperiores modi
                </p>
            </div>

            {/* Testimoinal card */}

            <div data-aos="zoom-in">
              <Slider {... settings}>
                {
                  TestimoinalData.map((data) => (

                    <div className='my-6'>
                         <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                           dark:bg-gray-800 bg-primary/10 relative'>
                         <div className='mb-4'>
                        <img src={data.img} alt="" 
                        className='rounded-full w-20 h-20'
                        />
                       </div>
                       <div  className='flex items-center gap-4 flex-col'>
                       <div className='space-y-3'>
                       <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                        <p className='text-xs text-gray-500'>{data.text}</p>
                       </div>
                       </div>
                       <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>

                    </div>
                    </div>

                 
                  ))
                }
              </Slider>
            </div>
      </div>
    </div>
  )
}

export default Testimoinal