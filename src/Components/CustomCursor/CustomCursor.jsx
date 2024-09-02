import React, { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("customCursor");
    const clickableElements = document.querySelectorAll(
      "a, button, input, select, textarea, img"
    );

    const handleMouseMove = (e) => {
    //   const scrollX = window.scrollX || window.pageXOffset;
    //   const scrollY = window.scrollY || window.pageYOffset;
    //   cursor.style.left = `${e.clientX + scrollX}px`;
    //   cursor.style.top = `${e.clientY + scrollY}px`;
	cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => {
      cursor.classList.add("custom-cursor--large");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("custom-cursor--large");
    };

    document.addEventListener("mousemove", handleMouseMove);
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div className="custom-cursor" id="customCursor"></div>;
};

export default CustomCursor;
