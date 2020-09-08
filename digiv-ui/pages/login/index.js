import Head from "next/head";
import { useEffect } from "react";
import LoginPage from "@components/pages/login";
import { ModalProvider } from "@components/element/modal";

const Login  = function () {
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

Login.getInitialProps = async (context) => {
	const { req, res, query } = context
	const isUserLoggedIn = req !== undefined && req.cookies['ATT']
	if (isUserLoggedIn) res.redirect('/main-hall')
	return {}

}
export default Login
