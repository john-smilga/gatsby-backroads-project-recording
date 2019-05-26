import React from "react"
import Title from "../Title"
import styles from "../../css/items.module.css"
import Tour from "../Tours/Tour"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Featured = ({ tours }) => {
  // const tours = data.featuredTours.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default Featured
