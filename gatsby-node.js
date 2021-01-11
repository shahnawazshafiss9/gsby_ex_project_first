const path = require('path')
// create pages dynamically
exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`query GetProducts{
        products: allContentfulProducts{
          nodes{
            productSlug
          }
        }
      }
      `)
     result.data.products.nodes.forEach((product) => {
         createPage({
             path: `/products/${product.productSlug}`,
             component: path.resolve(`src/templates/product_template.js`),
             context: {
                 slug: product.productSlug
             }
         })
     })
}