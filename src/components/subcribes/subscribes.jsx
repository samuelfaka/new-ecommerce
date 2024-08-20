import React from 'react'
import Pattern from "../../assets/pattern/background-color.png";


const PatternImg = {
    backgroundImage: `url((${Pattern}))`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const subscribes = () => {
  return (
    <div 
    data-aos="zoom-in"
    className='mb-20 bg-yellow-500 dark:bg-yellow-500 text-black' style={PatternImg}
    >
        <div className='container backdroup-blur-sm py-10 '>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1
                className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'
                >Get Notified About New products
                </h1>
                <input 
                data-aos="fade-up"
                type="text" 
                placeholder='Enter your email' 
                className='w-full p-3'
                />
            </div>
        </div>
    </div>
  )
}

export default subscribes