import Head from "next/head";
import { useEffect } from "react";
import ConfPage from "@components/pages/conferenceRoom";
import { ModalProvider } from "@components/element/modal";
export default function ConferenceRoom() {
	useEffect(() => {}, []);
	return (
		<div className='min-w-screen min-h-screen'>
			<Head>
				<title>Adira VirtualTour</title>
			</Head>
			<ModalProvider>
				<ConfPage />
			</ModalProvider>
		</div>
	);
}
