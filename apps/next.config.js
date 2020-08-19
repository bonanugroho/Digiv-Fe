

const withPlugins = require('next-compose-plugins')

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
    pageExtensions: ['js'],
    useFileSystemPublicRoutes: false
}

module.exports = withPlugins([
    nextConfig
]);