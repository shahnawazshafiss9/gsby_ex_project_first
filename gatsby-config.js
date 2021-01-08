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
  ],
}
