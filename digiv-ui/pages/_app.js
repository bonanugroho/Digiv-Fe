// import '../styles/tailwind.css'
import "@styles/index.scss";
import { useEffect } from "react";
import { Workbox } from "workbox-window";

function MyApp({ Component, pageProps }) {
	// useEffect(() => {
	// 	if (
	// 		!("serviceWorker" in navigator) ||
	// 		process.env.NODE_ENV !== "production"
	// 	) {
	// 		console.warn("Progressive Web App support is disabled");
	// 		return;
	// 	}
	// 	const wb = new Workbox("sw.js", { scope: "/" });
	// 	wb.register();
	// }, []);
	return <Component {...pageProps} />;
}

export default MyApp;
