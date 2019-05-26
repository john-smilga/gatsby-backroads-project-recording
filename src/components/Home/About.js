import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import Img from "gatsby-image"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about backroads"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis amet
            aliquam animi molestias vero velit consectetur, excepturi
            consequatur odit temporibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            cupiditate perferendis veniam veritatis suscipit. Vitae dicta quo
            animi? Laborum, optio.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
