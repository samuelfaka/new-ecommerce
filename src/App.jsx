import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/products';
import AOS from 'aos';
import "aos/dist/aos.css";

import Banner from './components/Banner/Banner';
import Subscribes from './components/subcribes/subscribes';
import Testimoinal from './components/Testimoinal/Testimoinal';
import Footer from './components/Footers/footer'
import Popup from './components/Popup/Popup'

const App = () => {

  const [orderPopup, setorderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setorderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  } , []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
    
      <Banner/>
      <Subscribes/>
      <Products/>
      <Testimoinal/>
      <Footer/>
      <Popup orderPopup={orderPopup} setorderPopup={setorderPopup}/>
      

    </div>
  )
}

export default App