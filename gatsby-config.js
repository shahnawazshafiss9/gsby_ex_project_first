/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Magostech Gatsby Tutorial',
    description: 'some random description',
    author: 'Shahnawaz Alam',
    data:['item 1', 'item 2', 'item 3'],
    person: {name: "Alam", age: 32}
  },
  plugins: [
    'gatsby-plugin-styled-components',`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mlmiz5w4q2f8`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'H4ikGUN-390s41lcBYttbFyBpK3G-cOjp8Ik4gaPCfU',
      },
    },
  ],
}
