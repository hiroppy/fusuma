const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const { config } = require('dotenv');

config();

module.exports = withPlugins([withImages], {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              'next/babel',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
        require.resolve('./src/mdx-loader'),
      ],
    });

    return config;
  },
});
