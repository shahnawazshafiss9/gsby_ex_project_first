import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
const getData = graphql`
{
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

const Header = () => {
    const {
        site: {
            info: {
                title,
                person: {name, age},
                author,
            }
        }
    } = useStaticQuery(getData);
    
    return (
        <div>
            <h1>{title}</h1>
            <h1>{author}</h1>
            <p>{age}</p>
            <p>{name}</p>
           
        </div>
    )
}

export default Header
