import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
  };


const Carosel = () => {
  return (
    <>
     <div className='banner'>
            <div className='banner-outline'>
                <h5>Xbox Shop</h5>
                <h1>Sale by XB Shop</h1>
                <h3>All Prices upto 50% off</h3>
                <button>Shop now</button>
            </div>
            </div>  
    
<div className='carosel'>

    <h1 className='gradient-text text-center' >Our Products</h1>
<OwlCarousel className="slider-items owl-carousel" {...options}>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt="img"/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                      <div className="item"><img src="/images/xbox1.png" alt='img'/></div>
                     
                  </OwlCarousel>

                  </div>



               
    </>
  )
}

export default Carosel
