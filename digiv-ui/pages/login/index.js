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
			</Head>
			<ModalProvider>
				<LoginPage />
			</ModalProvider>
		</div>
	);
}
