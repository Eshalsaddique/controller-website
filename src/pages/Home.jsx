import React from 'react';
import Navbar from '../Components/Navbar';
import {FaPlay} from 'react-icons/fa'
import About from './About';
import Footer from '../Components/Footer';
import Services from './Services';
const Home = () => {
  return (
    <>
  <Navbar/>
<div className='home'>

<div className='home-box' id='box1'>
  </div>
  <div className='home-box' id='box2'>
  </div>
  <div className='home-box' id='box3'>
  </div>
  <div className='home-box' id='box4'>
  </div>
  <div className='home-box' id='box5'>
  </div>
  <div className='home-box' id='box6'>
  </div>


  <div className='home-main'>
  <h1 className="gradient-text">
    Keep up with the era
  </h1>
  <p>change your gaming experience to the next level with our product</p>
  
    
    <div className='playbtn'>
    <button>$70 FROM MICROSOFT</button>
  <FaPlay  style={{color:"#c989e9e0 ",fontSize:"15px",position:"relative",top:"9px",left:"10px"}}/>
  <p >HOW TO USE</p>
  </div>

  </div>


<div className='home-img'>
<img src="/images/xbox1.png" alt=''/>
<h1 className='gradient-text text-center' >1708</h1>
</div>
</div>
<About/>


<Services/>
<Footer/>
    </>
  )
}

export default Home
