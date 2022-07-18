import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogItem from "./BlogItem"

const Blog = () => {
  const articles = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            tag
            slug
          }
          html
        }
      }
    }
  `)

  const allArticles = articles.allMarkdownRemark.nodes.map((item, index) => (
    <BlogItem
      key={index}
      slug={item.frontmatter.slug}
      alt={item.frontmatter.title}
      title={item.frontmatter.title}
    />
  ))

  return (
    <section className="p-12 grid md:grid-cols-3 grid-cols-2 gap-8">
      {allArticles}
    </section>
  )
}

export default Blog
