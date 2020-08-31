// import '../styles/tailwind.css'
import "@styles/index.scss";
import { useEffect } from "react";
import { Workbox } from "workbox-window";
import { config } from '@fortawesome/fontawesome-svg-core' // 👈
import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
config.autoAddCss = false // 👈// Import the CSS

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
