import Document, { Html, Head, Main, NextScript } from "next/document";

class DefaultDocument extends Document {
	render() {
		return (
			<Html>
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PH6GCDZ');`,
					}}
				/>

				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id='GTM-PH6GCDZ'" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}
				/>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=UA-176762896-1'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'UA-176762896-1');`,
					}}
				/>
			</Html>
		);
	}
}

export default DefaultDocument;
