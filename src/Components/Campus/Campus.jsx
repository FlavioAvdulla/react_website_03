import React from "react";
import "./Campus.css";
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import arrow_right from "../../assets/arrow_right_white.svg";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt=""/>
        <img src={gallery_2} alt=""/>
        <img src={gallery_3} alt=""/>
        <img src={gallery_4} alt=""/>
      </div>
	  <button className="btn dark-btn">SEE MORE HERE <img src={arrow_right} alt="" /></button>
    </div>
  );
};

export default Campus;
