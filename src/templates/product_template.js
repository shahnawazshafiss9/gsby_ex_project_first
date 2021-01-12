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
            prodInfo
        }
    }
}) => {


    return (
        <Templatelayout>
            <div style={{ textAlign: 'center' }}>
                <Link to="/products">back to products</Link> 
            </div>
            <article key={id}>
            <div className="product_image">
                            <h3>{prodName}</h3>
                            <h5>{prodPrice}</h5> 
                            </div>
                <div className="productdiv">
                            <div className="product_image">
                            <Image fixed={fixed} alt={prodName} />
                            </div> 
                            <div className="product_description">{prodInfo.prodInfo}</div>
                            </div>
                        </article>
        </Templatelayout>
    )
}
export const query = graphql
    `query GetsingleProduct($slug: String) {
        product: contentfulProducts(productSlug: {eq: $slug}) {
          prodPrice
          prodName
          prodInfo{
            prodInfo
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
