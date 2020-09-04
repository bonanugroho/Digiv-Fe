import React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import "@styles/pages/mainHall.scss";
import imageHall from "@assets/images/background/hall.jpg";
import { useRouter } from "next/router";
import { useVideoStyle } from "@helper/hooks";

export default function MainHall() {
	const router = useRouter();
	const styleVideo = useVideoStyle();


	const onClickBoot = (path) => {
		router.push(path);
	};
	return (
		<DefaultLayout>
			<>
				<main id='virutal-main' className='booth-video-main'>
					<div id='video-booth' className='' style={styleVideo}>
						<img src={imageHall}></img>
						<div className='booth-mainHall__div-adira' onClick={()=>onClickBoot('/booth')}></div>
						<div className='booth-mainHall__div-momotor' onClick={()=>onClickBoot('/booth-momotor')}></div>
						<div className='booth-mainHall__div-momobil' onClick={()=>onClickBoot('/booth-momobil')}></div>
						<div className='booth-mainHall__div-videoHall' onClick={()=>onClickBoot('/booth-video')}></div>

					</div>
				</main>
			</>
		</DefaultLayout>
	);
}
