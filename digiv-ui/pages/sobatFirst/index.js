import Head from "next/head";
import { useEffect } from "react";
import MainHallPage from "@components/pages/mainHall";
import { ModalProvider } from "@components/element/modal";
import withAuth from "@hoc/withAuth"

const MainHall = function () {
	useEffect(() => {}, []);
	return (
		<div className='min-w-screen min-h-screen'>
			<Head>
				<title>Adira VirtualTour</title>
				<link
					rel='preload'
					href='http://34.107.209.44/foyer/locale/en.txt?v=1597318843017'
					as='fetch'
					crossOrigin='anonymous'
				/>
				<meta name='description' content='Virtual Tour' />
				<meta name='theme-color' content='#33FF66' />
				<link
					rel='preload'
					href='http://34.107.209.44/foyer/script.js?v=1597318843017'
					as='script'
				/>
				<script src='http://34.107.209.44/foyer/lib/tdvplayer.js?v=1597318843017'></script>
				<script src='http://34.107.209.44/foyer/script.js?v=1597318843017'></script>
				<script src='static/foyer/initialVideo.js'></script>
			</Head>
			<ModalProvider>
				<MainHallPage />
			</ModalProvider>
		</div>
	);
}
MainHall.getInitialProps = async (context) => {
	const { req, res, query } = context
	const isUserLoggedIn = req !== undefined && req.cookies['ATT']
	console.log(req.cookies)
	if (!isUserLoggedIn) res.redirect('/login')
	return {}

}
export default MainHall