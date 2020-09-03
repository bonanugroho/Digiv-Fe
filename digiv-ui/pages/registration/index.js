import Head from "next/head";
import { useEffect } from "react";
import RegistrationPage from "@components/pages/registration";
import { ModalProvider } from "@components/element/modal";
export default function Registration() {

	return (
		<div className='min-w-full min-h-full  registration-content'>
			<Head>
				<title>Adira VirtualTour</title>
			</Head>
			<ModalProvider>
				<RegistrationPage />
			</ModalProvider>
		</div>
	);
}
