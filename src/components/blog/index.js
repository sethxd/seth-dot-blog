import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogItem from "./BlogItem"

const Blog = () => {
  const articles = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          frontmatter {
            title
            tag
            slug
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
          body
        }
      }
    }
  `)

  const allArticles = articles.allMdx.nodes.map(item => (
    <BlogItem
      key={item.id}
      slug={item.frontmatter.slug}
      alt={item.frontmatter.title}
      title={item.frontmatter.title}
      image={
        item.frontmatter.image &&
        item.frontmatter.image.childImageSharp.gatsbyImageData
      }
    />
  ))

  return (
    <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:p-12 md:gap-8">
      {allArticles}
    </section>
  )
}

export default Blog
