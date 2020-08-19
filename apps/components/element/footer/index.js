import React from "react";
import styles from "./footer.module.css";

export default function footer() {
	return (
		<footer className={styles.footer}>
			<a
				href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
				target='_blank'
				className={styles.footer_link}
				rel='noopener noreferrer'>
				Digital Innovation
				<img
					src='logo/digital-innovation.png'
					alt='Vercel Logo'
					className={styles.footer_logo}
				/>
			</a>
		</footer>
	);
}
