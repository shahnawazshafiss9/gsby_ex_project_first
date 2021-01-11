import React from "react"
import { graphql,Link } from 'gatsby'
import Templatelayout from '../component/Templatelayout'
import Image from 'gatsby-image'

const products = ({ data }) => {
    const {
        allContentfulProducts:{
            nodes:products
        }
    } = data;
    console.log(products);
    return(
        <Templatelayout>
            <section className="page">
                {products.map(product => {
                    return(
                        <article key={product.id}>
                            <p>{product.prodName}</p> 
                            <p>{product.prodPrice}</p> 
                            <Image fluid={product.prodImage.fluid} />
                            <Link to={`/products/${product.productSlug}`}>More Details</Link>
                        </article>
                    )
                })}
            </section>
        </Templatelayout>
    )
}

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        id
        prodName
        prodPrice
        productSlug
        prodImage {
            fluid{
                ...GatsbyContentfulFluid
           }
        }
      }
    }
  }
`

export default products