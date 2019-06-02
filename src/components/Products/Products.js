import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
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
  console.log(products)

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="products" />
      <div className={styles.center}>our products</div>
    </section>
  )
}

export default Products
