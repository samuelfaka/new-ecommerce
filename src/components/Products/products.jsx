import React from 'react'
import Img1 from "../../assets/Women/Women1.png";
import Img2 from "../../assets/Women/Women2.jfif";
import Img3 from "../../assets/Women/Women3.jfif";
import Img4 from "../../assets/Women/women4.jfif";
import {FaStar} from "react-icons/fa6"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        tittle: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDeplay: "0",
    },
    {
        id: 2,
        img: Img2,
        tittle: "Women western",
        rating: 4.5,
        color: "Red",
        aosDeplay: "200",
    },
    {
        id: 3,
        img: Img3,
        tittle: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDeplay: "400",
    },
    {
        id: 4,
        img: Img4,
        tittle: "Printed T-Shirt",
        rating: 4.4,
        color: "Yellow",
        aosDeplay: "0",
    },
    {
        id: 5,
        img: Img2,
        tittle: "Fashin T-shirt",
        rating: 4.5,
        color: "pink",
        aosDeplay: "800",
    },
];

const products = () => {
  return (
    <div className='mt-14 mb-10'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet constectetur,
                    adipisicing elit. sit 
                    asperiores modi
                </p>
            </div>
            {/* Body section */}
            <div>
                <div
                className='grid grid-cols-1 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center
                gap-5'
                >
                    {/* card section */}
                    {
                        ProductsData.map((data) =>(
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDeplay}
                            key={data.id}
                            className='space-y-3'
                            >
                                <img src={data.img} alt="" 
                                className='h-[220px] w-[150px] object-cover rounded-md'
                                />
                                <div>
                                    <h3 className='font-semibold'>{data.tittle}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* view all button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 rounded-md px-5'>
                        View All Button
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default products