import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Blog from "../components/Blog/Blog"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
const blogs = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.bcg.childImageSharp.fluid} />
      <Blog />
      {documentToReactComponents(data.posts.edges[0].node.text.json)}
    </Layout>
  )
}

export const query = graphql`
  query {
    bcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    posts: allContentfulPost {
      edges {
        node {
          title
          text {
            json
          }
        }
      }
    }
  }
`
export default blogs
