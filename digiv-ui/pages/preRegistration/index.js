import Head from "next/head";
import { useEffect } from "react";
import PreRegistration from "@components/pages/PreRegistration";
export default function countDownPage() {
	useEffect(() => {}, []);
	return (
		<div className="min-w-full min-h-full  pre-registration-content">
			<Head>
				<title>Adira VirtualTour</title>
			</Head>
			<PreRegistration />
		</div>
	);
}
