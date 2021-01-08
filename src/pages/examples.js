import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import { graphql } from 'gatsby'

const examples = ({ data }) => {
    const {
        site: {
            info: { author }
        }
    } = data;
    return (
        <div>
            <h1>Author: {author}</h1>
            <Header />
            <HeaderStatic />
        </div>

    )
}
export const data = graphql`
query MyQuery{
    site{
        info: siteMetadata{
          title,
          description,
          author,
          data,
          person {
            name
            age
          }
        }
      }
  }
`
export default examples
