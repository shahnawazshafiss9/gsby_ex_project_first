import React from "react"
import { graphql } from 'gatsby'

// import Image from 'gatsby-image'

const ComponentNamea = ({ data }) => {
  console.log(data.product)
  return(

            <div>
                  <p>ss</p>
                     <p>{data.product.prodName}</p> 
                    <p>{data.product.prodPrice}</p>
                    {/* <Image fluid={data.prodImage.fluid} />  */}
                    </div>
               
    )
}
export const query = graphql`
  {
    product: contentfulProducts(productSlug: {eq: "first-image"}) {
      prodPrice
      prodName
    }
  }
`

export default ComponentNamea