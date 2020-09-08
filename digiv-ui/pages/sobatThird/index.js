import Head from "next/head";
import { useEffect } from "react";
import SobatThirdPage from "@components/pages/SobatThrid";
import { ModalProvider } from "@components/element/modal";
import withAuth from "@hoc/withAuth";

const SobatThird = function () {
	return (
		<div className='min-w-screen min-h-screen'>
			<Head>
				<meta
					name='viewport'
					id='metaViewport'
					content='user-scalable=no, initial-scale=1, width=device-width, viewport-fit=cover'
					data-tdv-general-scale='0.5'
				/>

				<title>Adira VirtualTour</title>
				<link
					rel='preload'
					href='http://34.107.209.44/sobat-3/locale/en.txt?v=1599551077870'
					as='fetch'
					crossOrigin='anonymous'
				/>
				<meta name='description' content='Virtual Tour' />
				<meta name='theme-color' content='#33FF66' />
                <link rel="preload" href="http://34.107.209.44/sobat-2/script.js?v=1599551077870" as="script"/>

				<script src='http://34.107.209.44/sobat-3/lib/tdvplayer.js?v=1599551077870'></script>
				<script src='http://34.107.209.44/sobat-3/script.js?v=1599551077870'></script>
				<script src='static/sobatThird/initialVideo.js'></script>
			</Head>
			<ModalProvider>
				<SobatThirdPage />
			</ModalProvider>
		</div>
	);
};
SobatThird.getInitialProps = async props => {
	console.info('##### Congratulations! You are authorized! ######', props);
	return {};
  };
  
export default withAuth(SobatThird);
