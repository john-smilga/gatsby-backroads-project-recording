const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await graphql(`
    {
      allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allContentfulTour.edges.forEach(({ node }) => {
        createPage({
          path: `tours/${node.slug}`,
          component: path.resolve("./src/templates/tour-template.js"),
          context: {
            slug: node.slug,
          },
        })
      })
    })
    .catch(error => console.log(error))
}
