import Head from "next/head";
import { useEffect } from "react";
import TourExample from "@components/pages/tourExample";
export default function tourExamplePage() {
	useEffect(() => {
		window.loadVista();
	}, []);
	return (
		<div className="main">
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='preload'
					href='static/roomTourExample/locale/en.txt?v=1597318843017'
					as='fetch'
					crossOrigin='anonymous'
				/>
				<meta name='description' content='Virtual Tour' />
				<meta name='theme-color' content='#33FF66' />
				<link
					rel='preload'
					href='static/roomTourExample/script.js?v=1597318843017'
					as='script'
				/>
				<script src='static/roomTourExample/lib/tdvplayer.js?v=1597318843017'></script>
				<script src='static/roomTourExample/script.js?v=1597318843017'></script>
				<script src='static/roomTourExample/initialVideo.js'></script>
			</Head>
			<TourExample />
		</div>
	);
}
