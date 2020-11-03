const path = require(`path`);
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: `One Punch Man Road to Hero 2.0`,
    siteUrl: `https://opm-rth2-tools.netlify.app`,
    description: `Tools for One Punch Man Roat to Hero 2.0 Game`,
  },

  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@utils': 'src/utils',
          '@styles': 'src/styles',
          '@data': 'src/data',
          '@img': 'src/img',
        },
        extensions: ['ts', 'tsx'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: !isProd,
        fileName: !isProd,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
      },
    },
  ],
};
