import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="What We Offer" />
        <Campus />
		<Title subTitle="TESTIMONIALS" title="What Student Says" />
      </div>
    </div>
  );react_website_03/src/Components/About
};

export default App;
