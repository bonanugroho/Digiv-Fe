import Head from "next/head";
import { useEffect } from "react";
import MainHall from "@components/pages/mainHall";
import { ModalProvider } from "@components/element/modal";
export default function preRegistration() {
	useEffect(() => {}, []);
	return (
		<div className='min-w-screen min-h-screen'>
			<Head>
				<title>Adira VirtualTour</title>
			</Head>
			<ModalProvider>
				<MainHall />
			</ModalProvider>
		</div>
	);
}
