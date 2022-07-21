const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query AllArticles {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMdx.nodes.forEach(item => {
    actions.createPage({
      path: `/blog/${item.frontmatter.slug}`,
      component: path.resolve(`src/templates/article.js`),
      context: { slug: item.frontmatter.slug },
    })
  })
}
