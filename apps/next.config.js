const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const tailwindCss = require("tailwindcss");

const nextConfig = {
	// webpack:  (config, options) => {
	//     return webpackBaseConfig(config)
	// },
	// env: JSON.stringify(process.env),
	// serverRuntimeConfig: {
	//     ENV: process.env
	// },
	// publicRuntimeConfig: {
	//     ENV: process.env
	// },
	pageExtensions: ["js"],
	useFileSystemPublicRoutes: false,
};

const sassConfig = withSass({
	webpack(config, options) {
		const rules = [
			{
				test: /\.scss$/,
				use: [
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: [
								tailwindCss("./tailwind.config.js"),
							],
						},
					},
					{ loader: "sass-loader" },
				],
			},
		];
		return {
			...config,
			module: {
				...config.module,
				rules: [...config.module.rules, ...rules],
			},
		};
	},
});

module.exports = withPlugins([sassConfig, nextConfig]);
