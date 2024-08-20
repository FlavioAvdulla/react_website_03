import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 660 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li><link to="hero" smooth={true} offset={0} duration={500}>HOME</link></li>
        <li><link to="programs" smooth={true} offset={0} duration={500}>PROGRAM</link></li>
        <li><link to="about" smooth={true} offset={0} duration={500}>ABOUT US</link></li>
        <li><link to="campus" smooth={true} offset={0} duration={500}>CAMPUS</link></li>
        <li><link to="testimonials" smooth={true} offset={0} duration={500}>TESTIMONIALS</link></li>
        <li><button className="btn_02"><link to="contact" smooth={true} offset={0} duration={500}>CONTACT US</link></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
