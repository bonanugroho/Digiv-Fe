import Head from "next/head";
import { useEffect } from "react";
import PageCountDown from "@components/pages/countDown";
export default function countDownPage() {
	useEffect(() => {}, []);
	return (
		<div className="main">
			<Head>
				<title>Adira VirtualTour</title>
			</Head>
			<PageCountDown />
		</div>
	);
}
