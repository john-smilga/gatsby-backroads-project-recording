require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description: `Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure.`,
    author: "@johndoe",
    siteUrl: "https://gatsby-backroads-project-recording.netlify.com", // No trailing slash allowed!
    image: "/defaultBcg.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@john_smilga",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://gatsby-backroads-project-recording.netlify.com",
        sitemap:
          "https://gatsby-backroads-project-recording.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BackRoads Tour Company`,
        short_name: `BackRoads`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/images/icon.jpg",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://shrouded-brook-68415.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: ["restaurant"],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
}
