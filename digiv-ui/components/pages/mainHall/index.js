import React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import "@styles/pages/mainHall.scss";
import imageHall from "@assets/images/background/hall.jpg";
import { useRouter } from "next/router";

export default function MainHall() {
	const router = useRouter();

	const onClickBoot = (path) => {
		router.push(path);
	};
	return (
		<DefaultLayout>
			<main className='main-hall'>
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
			</main>
		</DefaultLayout>
	);
}
