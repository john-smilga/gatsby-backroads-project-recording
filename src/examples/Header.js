import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//tagged template function
const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
const Header = () => {
  const data = useStaticQuery(query)

  return (
    <div>
      hello world
      <h1>title : </h1>
      <h1>author :</h1>
    </div>
  )
}

export default Header
