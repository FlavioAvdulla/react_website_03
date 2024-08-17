import React from 'react';
import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
	<div className='about'>
	  <div className="about-left">
		<img src={about_img} alt="" className='about-img'/>
		<img src={play_icon} alt="" className='play-icon'/>
	  </div>
	  <div className="about-right">
	  <h3>ABOUT UNIVERSITY</h3>
	  <br></br>
	  <br></br>
	  <h2>Nurturing Tomorrow's Leaders Today</h2>
	  <br></br>
	  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
	  <br></br>
	  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
	  </div>
	</div>
  )
}

export default About;
