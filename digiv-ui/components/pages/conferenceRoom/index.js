import React, { useState, useEffect } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import "@styles/pages/conference.scss";
import imageBooth from "@assets/images/background/bg-conf-room.jpeg";
import carAvanxa from "@assets/images/car/car-avanza.png";
import {ModalDetailCar} from "@components/element/modal";
import {ModalTestDrive} from "@components/element/modal";
import {ModalBooking} from "@components/element/modal";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
//import { firebase } from "@utils/firebase";

export default function ConferenceRoom() {
    const router = useRouter();
	const [shoModalCar,setShowModalCar] = useState(false);
	const [showModalBooking,setShowModalBooking] = useState(false);
	const [showModalTestDrive,setShowModalTestDrive] = useState(false);
    const [styleVideo, setStyleVideo] = useState({
		display: "block",
	});

	const onClickBoot = (value) => {
		if(value == "zoom"){
			setShowModalBooking(true);
		}else{
			setShowModalTestDrive(true);
		}
        //setShowModalCar(true)
		//router.push("/conference");
    };

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

	return (
		<DefaultLayout>
			<main>
                <div className='main-booth' style={{flex: 1,
                    width: '100%',
                    height: '100vh',
                    resizeMode: 'contain'
                    }}>
					<img class="bg-image" src={imageBooth} />
					<div onClick={()=>onClickBoot('zoom')} class="click-zoom" />
					<div onClick={()=>onClickBoot('rundown')} class="click-rundown" />
                    <div id='video-booth' className='' style={styleVideo}>
                    <div class="videoplayer">
                        <ReactPlayer
                            playing={true}
                            width={'50vw'}
                            height={'60vh'}
                            url="https://www.youtube.com/watch?v=CmS5rlX9cDA"
                        />
                    </div>
                    {/* <video
							playsInline='playsInline'
							autoPlay='autoplay'
							muted='muted'
							loop='loop'>
							<source
								src='https://www.youtube.com/watch?v=CmS5rlX9cDA'
								type='video/mp4'
							/>
					</video> */}
                    </div>
					<div onClick={()=>onClickBoot('avanza')} className='item-layer item-layer__1'>
						<img src={carAvanxa}></img>
					</div>
				</div>
				<ModalDetailCar isShow={shoModalCar} onClose={()=>setShowModalCar(false)} />
				<ModalBooking isShow={showModalBooking} onClose={()=>setShowModalBooking(false)} />
				<ModalTestDrive isShow={showModalTestDrive} onClose={()=>setShowModalTestDrive(false)} />
			</main>
		</DefaultLayout>
	);
}
 