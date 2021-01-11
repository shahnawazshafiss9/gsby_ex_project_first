import React from 'react'
import Templatelayout from '../component/Templatelayout'
import Image from 'gatsby-image'
import { graphql, Link } from 'gatsby'

const product_template = ({
    data :{
        product:{
            id,
            prodName,
            prodPrice,
            prodImage: {fixed},
            productSlug,
            prodDescription
        }
    }
}) => {


    return (
        <Templatelayout>
            <div style={{ textAlign: 'center' }}>
                <Link to="/products">back to products</Link>
                <h1>{prodName}</h1>


            </div>
            <article key={id}>
                            <p>{prodName}</p> 
                            <p>{prodPrice}</p> 
                            <Image fixed={fixed} alt={prodName} />
                            <p>{prodDescription.raw}</p>
                        </article>
        </Templatelayout>
    )
}
export const query = graphql
    `query GetsingleProduct($slug: String) {
        product: contentfulProducts(productSlug: {eq: $slug}) {
          prodPrice
          prodName
          prodDescription {
            raw
          }
          productSlug
          prodImage {
            fixed {
                ...GatsbyContentfulFixed
            }
            createdAt
          }
        }
      }`

export default product_template
