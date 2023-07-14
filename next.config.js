/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devServer = {
        proxy: {
          '/api': {
            target: 'https://api.openai.com/v1/chat/completions',
            pathRewrite: { '^/api': '' },
          }
        }
      };
    }

    return config;
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
}

module.exports = nextConfig
