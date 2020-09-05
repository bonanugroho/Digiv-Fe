import Head from "next/head";
import { useEffect } from "react";
import LoginPage from "@components/pages/login";
import { ModalProvider } from "@components/element/modal";

export default function login() {
	useEffect(() => {}, []);
	return (
		
		<div className='min-w-full min-h-full  login-content'>
			<Head>
				<title>Adira VirtualTour</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>

			</Head>
			<ModalProvider>
				<LoginPage />
			</ModalProvider>
		</div>
	);
}
