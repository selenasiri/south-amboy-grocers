/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * // http://localhost:8000/___playground - chrome only
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Backroads',
    description:
      'Explore awesome worldwide tours & discover what makes each of them unique. forget your daily routine & say yes to adventure',
    author: 'Ying Lu',
    twitterUsername: '@john_smilga',
    image: 'defaultBcg.jpeg',
    siteUrl: 'https://gatsby-backroads-yyyyy.netlify.app/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: `src`,
    //     path: './src/',
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID_Y,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_Y,
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gatsby-backroads-yyyyy.netlify.app',
        sitemap: 'https://gatsby-backroads-yyyyy.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_APIKEY,
        autopop: false,
      },
    },
  ],
}
