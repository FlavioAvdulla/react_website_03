import React from 'react'
import './Hero.css'
import dark_arrow from '../../../assets/dark-arrow.png'

const Hero = () => {
  return (
	<div className='hero container'>
	  <div className="hero-text">
		<h1>We Ensure better education for a better world</h1>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
		<button className='btn'>EXPLORE MORE <img src={dark_arrow} alt=""/></button>
	  </div>
	</div>
  )
}

export default Hero
