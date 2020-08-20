import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import DefaultLayout from "@components/layout/defaultLayout";
export default function Home() {
	useEffect(() => {
		window.loadVista();
	}, []);
	return (
		<div className={styles.container}>
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
			<DefaultLayout>
				<main className={styles.main}>
					<div id='preloadContainer' className={styles.preloadContainer}>
						<div className='preloacContainer1'></div>
						<div className='preloacContainer2'></div>
						<div className='preloacContainer3'></div>
					</div>
					<div id='viewer' className={styles.viewer}></div>
				</main>
			</DefaultLayout>

			{/* <div className={styles.header}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					className={styles.header_link}
					rel='noopener noreferrer'>
					Digital Innovation
					<img
						src='logo/digital-innovation.png'
						alt='Vercel Logo'
						className={styles.logo_header}
					/>
				</a>
			</div> */}

			{/* <footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{" "}
					<img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
				</a>
			</footer> */}
		</div>
	);
}
