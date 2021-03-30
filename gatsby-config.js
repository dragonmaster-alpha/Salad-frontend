require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet", {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Baskerville\:ital,wght@0,400;0,700;1,400`,
          `Montserrat\:400,600`,
          `Mallory\:400,600`,
        ],
        display: "swap",
      },
    },
    // }, {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: process.env.API_URL || "http://localhost:1337",
    //     contentTypes: [
    //       "blog-category",
    //       "blog-post",
    //       "staff-member",
    //       "reward",
    //       "site-fragments",
    //       "site-navigation-item",
    //       "site-page",
    //       "social-card"
    //     ],
    //     singleTypes: [
    //       "blog-summary",
    //       "site-footer",
    //       "site-navigation-bar"
    //     ],
    //     queryLimit: 1000,
    //     loginData: {
    //       identifier: process.env.API_USERNAME || "user@salad.io",
    //       password: process.env.API_PASSWORD || "Pa55w0rd",
    //     },
    //   },
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "gatsby-starter-default",
    //     short_name: "starter",
    //     start_url: "/",
    //     background_color: "#663399",
    //     theme_color: "#663399",
    //     display: "minimal-ui",
    //   },
    // },
    // "gatsby-plugin-offline",
  ],
};
