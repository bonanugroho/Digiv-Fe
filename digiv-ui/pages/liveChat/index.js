import Head from "next/head";
import { useEffect } from "react";
import LiveChatPage from "@components/pages/liveChat";
import { ModalProvider } from "@components/element/modal";
export default function LiveChat() {

	return (
		<div className='min-w-full min-h-full  login-content'>
			<Head>
				<title>Adira VirtualTour</title>
			</Head>
			<ModalProvider>
				<LiveChatPage />
			</ModalProvider>
		</div>
	);
}
