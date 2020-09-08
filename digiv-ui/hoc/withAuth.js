import React, { Component } from "react";
import cookie from "js-cookie";
import Router from "next/router";
import ModalLoading from "@components/element/modalLoading";

function getRedirectTo() {
	if (typeof window !== "undefined" && window.location) {
		return window.location;
	}
	return {};
}

export default function withAuth(AuthComponent) {
	return class Authenticated extends Component {
		static async getInitialProps(ctx) {
			// Ensures material-ui renders the correct css prefixes server-side
			let userAgent;
			if (process.browser) {
				userAgent = navigator.userAgent;
			} else {
				userAgent = ctx.req.headers["user-agent"];
			}

			// Check if Page has a `getInitialProps`; if so, call it.
			const pageProps =
				AuthComponent.getInitialProps &&
				(await AuthComponent.getInitialProps(ctx));
			// Return props.
			return { ...pageProps, userAgent };
		}

		constructor(props) {
			super(props);
			this.state = {
				isLoading: true,
			};
		}

		componentDidMount() {
			if (!cookie.get("ATT")) {
				Router.push("/login");
			}
			this.setState({ isLoading: false });
		}

		render() {
            const {isLoading} = this.state
			return (
				<>
					{isLoading ? (<ModalLoading isShowLoading={isLoading}/>) : (<AuthComponent {...this.props} />)}
					
				</>
			);
		}
	};
}
