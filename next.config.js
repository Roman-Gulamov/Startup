require('dotenv').config();
const withImages = require('next-images');

module.exports = withImages({
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    dynamicAssetPrefix: true,
    webpack(config, options) {
        return config
    },
    
    env: {
        API_URL: process.env.API_URL
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        iconSizes: [],
        loader: "cloudinary",
        path: "https://res.cloudinary.com/romangulamov/image/upload",
    },
})