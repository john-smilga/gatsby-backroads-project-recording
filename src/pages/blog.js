import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Blog from "../components/Blog/Blog"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const blogs = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={data.bcg.childImageSharp.fluid} />
      <Blog />
    </Layout>
  )
}
export const query = graphql`
  query {
    bcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default blogs
