import React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import styles from "@styles/pages/tourexample.scss";

export default function home() {
	return (
		<DefaultLayout>
			<main className="main">
				<div id='preloadContainer' className="preloacContainer1">
					<div className='preloacContainer1'></div>
					<div className='preloacContainer2'></div>
					<div className='preloacContainer3'></div>
				</div>
				<div id='viewer' className={styles.viewer}></div>
			</main>
		</DefaultLayout>
	);
}
