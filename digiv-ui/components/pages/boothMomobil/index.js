import React, { useState, useEffect } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import "@styles/pages/boothMomobil.scss";
import { ModalDetailCar } from "@components/element/modal";
import { useVideoStyle } from "@helper/hooks";
import { useRouter } from "next/router";
import bgMomobil from "@assets/images/background/bg-booth-momobil.png";

export default function MainHall() {
	const router = useRouter();
	const styleVideo = useVideoStyle();
	const [shoModalCar, setShowModalCar] = useState(false);

	const onClickBoot = (value) => {
		setShowModalCar(true);
	};

	return (
		<DefaultLayout>
			<>
				<main id='virutal-main' className='booth-video-main'>
					<div id='video-booth' className='' style={styleVideo}>
						<img src={bgMomobil}></img>
						<div className='booth-momobil__div-car' onClick={onClickBoot}></div>
						<div
							className='booth-momobil__div-banner'
							onClick={onClickBoot}></div>
					</div>
					<ModalDetailCar
						isShow={shoModalCar}
						onClose={() => setShowModalCar(false)}
					/>
				</main>
			</>
		</DefaultLayout>
	);
}
