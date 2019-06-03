import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import Image from "gatsby-image"
const getData = graphql`
  query {
    products: allStrapiRestaurant {
      edges {
        node {
          name
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
const Products = () => {
  const { products } = useStaticQuery(getData)

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="products" />
      <div className={styles.center}>
        {products.edges.map(({ node }, index) => {
          return (
            <div key={index}>
              <h1>{node.name}</h1>
              <p>{node.description}</p>
              <Image fluid={node.image.childImageSharp.fluid} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Products
