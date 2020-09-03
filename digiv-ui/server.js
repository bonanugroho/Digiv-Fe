// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.mode === 'development'  });
const handler = routes.getRequestHandler(app);
const PORT = 8081;
const postLogEs = require("./utils/elasticSearch")
const compression = require('compression')
require('dotenv').config()


// With express
const express = require("express");
app.prepare().then(() => {
	const server = express();
	server.use(compression())

	server.get("/espush", postLogEs)
	server.get("/health", (req, res) => {
		res.json({ name: "digivapp.fe", healthy: true });
	});
	

	server.get("*", (req, res) => {
		return handler(req, res, req.params);
	});
	


	server.use(handler).listen(PORT, (err) => {
		if (err) {
			console.error(err);
			throw err;
		}
		console.log(`> Ready on http://localhost:${PORT}`);
	});


	//   express().use(handler).listen(8081)
});
