import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tourlist from "./Tourlist"
const Tours = () => {
  const { tours } = useStaticQuery(graphql`
    {
      tours: allContentfulTour {
        edges {
          node {
            name
            price
            slug
            country
            contentful_id
            days
            images {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return <Tourlist tours={tours} />
}

export default Tours
