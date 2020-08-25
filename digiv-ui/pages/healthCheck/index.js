function healthCheck({ stars }) {
	return <div>Next stars: {stars}</div>;
}

healthCheck.getInitialProps = async ({ req, res }) => {
	res.json({
		name: "digivapp.fe",
		healthy: true,
	});
};

export default healthCheck;
