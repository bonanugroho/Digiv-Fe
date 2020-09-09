import React,{useEffect} from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import "@styles/pages/sobatFirst.scss";
import { useRouter } from "next/router";

export default function MainHall() {
	const router = useRouter();
	useEffect(() => {
		window.initialVideoSobatFirst();
		window.callReactApps = (type,msg) => {
            console.log(type)
            console.log(msg)
            //handle message;
          };
        window.callAppsReact = (msg) => {
            console.log(msg)
        }
	}, []);
	const onClickBoot = (path) => {
		router.push(path);
	};
	return (
		<DefaultLayout>
			<main className="main">
				<div id='preloadContainer' className="preloacContainer1">
					<div className='preloacContainer1'></div>
					<div className='preloacContainer2'></div>
					<div className='preloacContainer3'></div>
				</div>
				<div id='sobatFirst-viewer' className="view"></div>
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
		</DefaultLayout>
	);
}