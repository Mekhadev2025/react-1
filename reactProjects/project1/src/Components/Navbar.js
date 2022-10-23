import React from 'react'
import logo from './logo.svg';
 
function Navbar() {
  return (
    <nav className="navbar">
      
   <img className='logo' src={logo}  alt="logo"  ></img>
     <h2 className='Reactfacts'>ReactFacts</h2>
   
       <h2 className='Project1'>React Course-Project1</h2> 
     
    </nav>
  )
  
}
export default Navbar

 