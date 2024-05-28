import React from 'react'


const About = () => {
  return (
   <>
  
   <div className='about'>

    <div className='about-img'>
        <img src='/images/about1.jfif' alt='img' className='img' id='img1'/>
        <img src='/images/about3.jfif' alt='img' className='img' id='img2'/>
        <img src='/images/about4.jfif' alt='img' className='img' id='img3'/>
    </div>

<div className='about-main'>
<h1 className='gradient-text'>
  Made with quality
</h1>
<p>
  Your Xbox controller isn't just limited to your console, with integrated Bluetooth supporting IOS,Android and PCs .we recommend phone clip though.
</p>
<ul>
  <li>Great,in hand feel</li>
  <li>Works with Xbox ,Android,IOS,PC</li>
  <li>Supports Xbox controller clips</li>
  <li>Easy to use for any environment</li>
</ul>
</div>


   </div>
   
   </>
  )
}

export default About
