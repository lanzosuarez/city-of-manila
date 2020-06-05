require('dotenv').config();
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `City Of Manila`,
    author: 'Analie Moreno',
    description:
      "Official website of City of Manila Mayor Isko Moreno Domagoso. Find information on Manila's COVID-19 response."
  },
  plugins: [
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-156430051-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Quicksand']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `City Of Manila`,
        short_name: `City Of Manila`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
};
