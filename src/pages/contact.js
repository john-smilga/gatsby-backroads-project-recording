import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.bcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    bcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
