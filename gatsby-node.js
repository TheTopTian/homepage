exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.nodes.forEach(node => {
      const slug = node.frontmatter.slug
      console.log(slug)
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/pages/template.js`),
        context: { slug: slug },
      })
    })
  }