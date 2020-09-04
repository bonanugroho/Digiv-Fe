import React, { useState, useEffect } from "react";

function useVideoStyle(props) {
	const [styleVideo, setStyleVideo] = useState({
		display: "block",
	});

	const resizeVideo = () => {
		if (window.innerHeight > window.innerWidth) {
			const wh = window.innerHeight;
			const ew = wh * 1.78;
			setStyleVideo({ ...styleVideo, width: `${ew}px`, height: `100%` });
		} else {
			const ww = window.innerWidth;
			const eh = ww / 1.78;
			setStyleVideo({ ...styleVideo, width: `100%`, height: `${eh}"px"` });
		}
    };
    

	useEffect(() => {
		window.addEventListener("resize", resizeVideo);
		resizeVideo();

		return () => {
			window.removeEventListener("resize", resizeVideo);
		};
	}, []);
	
	return styleVideo;
}

export default useVideoStyle