import React, { useEffect ,useState } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import "@styles/pages/mainHall.scss";
import imageHall from "@assets/images/background/hall.jpg";
import { useRouter } from "next/router";
import ModalLoading from "@components/element/modalLoading";

import { useVideoStyle } from "@helper/hooks";
import { SOBAT_1 ,SOBAT_2 ,SOBAT_3 } from "@constants/translaterVideo";

export default function MainHall() {
	const router = useRouter();
	const [showModalLoading, setShowModalLoading] = useState(false);

	const translaterVista = (type, msg) => {
		setShowModalLoading(true)
		switch (msg) {
			case SOBAT_1:
				router.push("/sobat-1");
				break;
			case SOBAT_2:
				router.push("/sobat-2");
				break;
			case SOBAT_3: 
				router.push("/sobat-3");
				break;
			default : 
				setShowModalLoading(false)
				break;

		}
	};
	useEffect(() => {
		window.initialVideoFoyer();
		window.callReactApps = (type, msg) => {
			translaterVista(type, msg);
		};
		window.callAppsReact = (msg) => {
			console.log(msg);
		};
	}, []);
	const onClickBoot = (path) => {
		router.push(path);
	};
	return (
		<DefaultLayout breadcumb={[{name: 'Main Hall',url:'#'}]}>
			<main className='main'>
				<div id='preloadContainer' className='preloacContainer1'>
					<div className='preloacContainer1'></div>
					<div className='preloacContainer2'></div>
					<div className='preloacContainer3'></div>
				</div>
				<div id='foyer-viewer' className='view'></div>
			</main>
			{/* <main className='main-hall'>
				<div>
					<img src={imageHall} />
					<div className='main-hall__layer item-layer'>
						<div
							onClick={()=> onClickBoot('/booth')}
							className='item-layer item-layer__1'></div>
						<div
							onClick={()=> onClickBoot('/booth-video')}
							className='item-layer item-layer__2'></div>
					</div>
				</div>
			</main> */}
			<ModalLoading isShowLoading={showModalLoading} />
		</DefaultLayout>
	);
}
