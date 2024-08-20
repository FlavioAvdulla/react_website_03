import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={0} duration={500}>
            PROGRAM
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={0} duration={500}>
            CAMPUS
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={0} duration={500}>
            TESTIMONIALS
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={0} duration={500} className="btn_02">
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
