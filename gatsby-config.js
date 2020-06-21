module.exports = {
  siteMetadata: {
    title: `Ashley Alexander Furrow`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@chumpgrub`,
    menuLinks: [
      {
        name: `About`,
        link: `/about/`,
        menuLinks: [
          {
            name: `Approach`,
            link: `/about/approach/`,
          },
          {
            name: `Policies`,
            link: `/about/policies/`,
          }
        ]
      },
      {
        name: `Services`,
        link: `/services/`,
        menuLinks: [
          {
            name: `Remote Learning`,
            link: `/services/remote-learning/`,
          },
          {
            name: `Consulting`,
            link: `/services/consulting/`,
          },
          {
            name: `Reading Remediation`,
            link: `/services/reading-remediation/`,
          },
          {
            name: `Executive Functioning`,
            link: `/services/executive-functioning/`,
          },
          {
            name: `Homeschooling`,
            link: `/services/homeschooling/`,
          },
          {
            name: `Test Prep`,
            link: `/services/test-prep/`,
          },
          {
            name: `Assessment`,
            link: `/services/assessment/`,
          },
        ]
      },
      {
        name: `Contact`,
        link: `/contact/`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:400,600,800', 'Merriweather']
        }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
