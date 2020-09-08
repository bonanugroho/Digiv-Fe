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