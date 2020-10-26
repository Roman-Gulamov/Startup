require('dotenv').config();

module.exports = {
    env: {
        API_URL: process.env.API_URL
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}