import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
	<nav>
	  <img src={logo} alt="" className='logo'/>
	  <ul>
		<li>HOME</li>
		<li>PROGRAM</li>
		<li>ABOUT US</li>
		<li>CAMPUS</li>
		<li>TESTIMONIALS</li>
		<li>CONTACT US</li>
	  </ul>
	</nav>
  )
}

export default Navbar
