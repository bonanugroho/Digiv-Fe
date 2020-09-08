import Head from "next/head";
import { useEffect } from "react";
import BootMomotorPage from "@components/pages/boothMomotor";
import { ModalProvider } from "@components/element/modal";
export default function Booth() {
	useEffect(() => {}, []);
	return (
		<div className='min-w-screen min-h-screen'>
			<Head>
				<title>Adira VirtualTour</title>
			</Head>
			<ModalProvider>
				<BootMomotorPage />
			</ModalProvider>
		</div>
	);
}
