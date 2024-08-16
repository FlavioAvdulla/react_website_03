import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero/Hero";
import Programs from "./Components/Navbar/Programs/Programs";
import Title from "./Components/Navbar/Title/Title";
import About from "./Components/Navbar/About/About";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs/>
		<About/>
      </div>
    </div>
  );
};

export default App;
