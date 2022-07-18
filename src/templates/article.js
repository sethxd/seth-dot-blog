import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Article = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, tag } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <section className="p-8 w-4/5 mx-auto">
        <h1 className="font-semibold text-3xl mb-4">{title}</h1>
        <p>{tag}</p>
        <div className="my-8" dangerouslySetInnerHTML={{ __html: html }}></div>
      </section>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tag
      }
    }
  }
`
