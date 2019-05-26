import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)

        return <h1>title: {data.site.siteMetadata.title}</h1>
      }}
    />
  )
}

export default RegularHeader
