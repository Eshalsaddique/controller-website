import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>

<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <Link to='/' class="navbar-brand" >
    <div className='logo'>
   
       <div style={{color:"whitesmoke",fontWeight:"600",fontSize:"20px"}}><span style={{color:"#c989e9e0"}}>XB</span> Shop</div>
    </div>
    
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/'  class="nav-link" href='#'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about'  class="nav-link" href='#'>About</Link>
        </li>
        <li className="nav-item">
          <Link to='/about'  class="nav-link" href='#'>Products</Link>
        </li>
        <li className="nav-item">
          <Link to='/about'  class="nav-link" href='#'>Trendings</Link>
        </li>
       
       </ul>
       <div>
        <button className='nav-btn'>SIGN UP</button>
       </div>
     
    </div>
  </div>
</nav> 







   </>
  )
}

export default Navbar

