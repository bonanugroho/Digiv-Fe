// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.mode === 'development'  });
const handler = routes.getRequestHandler(app);
const PORT = process.env.PORT || 8081;
const compression = require('compression')
// With express
const express = require("express");
app.prepare().then(() => {
	const server = express();
	server.use(compression())
	server.get("*", (req, res) => {
		return handler(req, res, req.params);
	});

	server.get("/health", (req, res) => {
		res.json({ name: "digivapp.fe", healthy: true });
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
