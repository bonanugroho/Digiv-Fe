import React from "react";
import "@assets/styles/components/modal-loading.scss";
import { motion } from "framer-motion";

const modalLoading = (props) => {
	const { isShowLoading = false } = props;
	const background = {
		position: "fixed",
		background: "rgba(255, 255, 255,  0.8)",
		width: "100%",
		height: "100vh",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0",
		zIndex: "999999",
	};

	const loadingContainer = {
		position: "relative",
	};

	const loadingIcon = {
		width: "155px",
		height: "155px",
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: `translate(-50%, -50%)`,
	};

	const LogoIcon = {
		position: "absolute",
		width: "112px",
		height: "auto",
		left: "12%",
		top: "44%",
	};

	const variants = {
		visible: {
			display: "block",

			opacity: 1,
			transition: { duration: 0.2 },
		},
		hidden: {
			opacity: 0,
			transitionEnd: {
				display: "none",
			},
			transition: { duration: 0.2 },
		},
	};

	return (
		<motion.div
			initial='hidden'
			animate={isShowLoading ? "visible" : "hidden"}
			variants={variants}>
			<div id='icon-background' style={background}>
				<div style={loadingIcon}>
					<div style={loadingContainer}>
						<div data-loader='logo-circle'></div>
						<img
							style={LogoIcon}
							className='w-32 sm:w-32 md:w-48 lg:w-64'
							src='logo/adira_logo.svg'></img>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default modalLoading;
