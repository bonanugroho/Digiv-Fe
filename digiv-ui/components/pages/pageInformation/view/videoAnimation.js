import React, { useState, useEffect } from "react";

export default function formReservation(props) {
	const { onEndVideo, showVideo } = props;
	return (
		<>
			{showVideo && (
				<div className='fullscreen-bg'>
					<video loop muted autoPlay className='fullscreen-bg__video'>
						<source src='video/bg-registration.mp4' type='video/mp4' />
					</video>
				</div>
			)}
		</>
	);
}
