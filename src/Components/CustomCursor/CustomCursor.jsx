import React, { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
	useEffect(() => {
		const cursor = document.getElementById("customcCursor");
		const handleMouseMove = (e) => {
			cursor.style.left = `${e.clientX}px`;
			cursor.style.top = `${e.clientY}px`;
		};
		document.addEventListener("mousemove", handleMouseMove);
		return () = {
			document.removeEventListener("mouse", handleMouseMove)
		};
	}, []);

	return <div className="custom-cursor" id="customCursor"></div>
}

export default CustomCursor;