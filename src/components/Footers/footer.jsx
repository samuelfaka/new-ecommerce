import React from 'react'
import Logo from "../../assets/Logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';





const FooterLink = [
  {
    tittle: "Home",
    link: "/#",
  },
  {
    tittle: "About",
    link: "/#about",
  },
  {
    tittle: "Contact",
    link: "/#contact",
  },
  {
    tittle: "Blog",
    link: "/#blog",
  },
  
]

const footer = () => {
  return (
    <div
    
    className='text-white bg-black'>
      <div className='container'>
        <div 
        data-aos="zoom-in"
        className='grid md:grid-cols-3 pb-30 pt-5'>
          {/* company detail */}
          <div className='py-8 px-4'>
            <h1
            className='sm:text-3xl test-xl font-bold sm:text-left text-justify mb-3
            flex items-center gap-3'
            >
              <img src={Logo} alt="" 
              className='max-w-[50px]'
              />
              Shopsy</h1>
            <p>Lorem dolor sit amet consectetur <br /> elit.
             cum in beate ea <br /> recusandae blanditiis veritatis.</p>
          </div>
          {/* footerlinks */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
              <div className='py-8 px-4'>
                <h1
                className='sm:text-xl test-xl font-bold sm:text-left text-justify mb-3'
                >Important Link</h1>
                <ul className='flex flex-col gap-3 '>
                  {
                    FooterLink.map((link) => (
                      <li className='cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-200 ' key={link.tittle}>

                        <span>{link.tittle}</span>
                      </li>
                      
                      
                    ))
                  }
                </ul>
              </div>
            </div>
            <div>
              <div className='py-8 px-4'>
                <h1
                className='sm:text-xl test-xl font-bold sm:text-left text-justify mb-3'
                > Link</h1>
                <ul className='flex flex-col gap-3 '>
                  {
                    FooterLink.map((link) => (
                      <li className='cursor-pointer hover:text-primary
                      hover:translate-x-1 duration-300 text-gray-200 ' key={link.tittle}>

                        <span>{link.tittle}</span>
                      </li>
                      
                      
                    ))
                  }
                </ul>
              </div>
            </div>

            {/* social link */}
            <div>
              <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                  <FaInstagram className='text-3xl'/>
                </a>
                <a href="#">
                    <FaFacebook className='text-3xl'/>
                  </a>
                  <FaLinkedin className='text-3xl'/>
              </div>
              <div className='mt-5'>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Nodia, Uttar pradesh</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                  <FaMobileAlt />
                  <p>+243 07036545716</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default footer