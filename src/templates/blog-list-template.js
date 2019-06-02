import React, { memo } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/Title"
// import SEO from "../components/SEO"

const BlogList = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blogs" : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  const { data } = props
  return (
    <Layout>
      {/* <SEO title="Blogs" /> */}
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.contentful_id} blog={node} />
          })}
        </div>
      </section>
      <section className={styles.links}>
        {!isFirst && (
          <AniLink fade to={prevPage} className={styles.link}>
            Prev
          </AniLink>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <AniLink
            key={`pagination-number${i + 1}`}
            fade
            to={`/blogs/${i === 0 ? "" : i + 1}`}
            className={
              i + 1 === currentPage
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            {i + 1}
          </AniLink>
        ))}
        {!isLast && (
          <AniLink fade to={nextPage} className={styles.link}>
            Next
          </AniLink>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default memo(BlogList)
