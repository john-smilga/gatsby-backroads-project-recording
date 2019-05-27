import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="tours" />
      <StyledHero img={data.bcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}
export const query = graphql`
  query {
    bcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default tours
