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
                            <Link to={`/products/${product.productSlug}`}>{product.prodName}</Link> 
                            <p>{product.prodPrice}</p> 
                            <Link to={`/products/${product.productSlug}`}>
                                <Image fluid={product.prodImage.fluid} />
                            </Link>
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