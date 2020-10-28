require('dotenv').config();
const withImages = require('next-images');

module.exports = withImages({
    dynamicAssetPrefix: true,
    webpack(config, options) {
        return config
    },
    
    env: {
        API_URL: process.env.API_URL
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
})