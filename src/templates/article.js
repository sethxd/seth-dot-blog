import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const Article = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, tag } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Helmet title={title} />
      <section className="p-8 w-4/5 mx-auto">
        <span className="text-slate-500 text-sm">
          {data.markdownRemark.parent.birthTime}
        </span>
        <h1 className="font-semibold text-4xl mb-4">{title}</h1>
        <span className="inline-block py-1 px-3 bg-slate-500 text-white">
          {tag}
        </span>
        <div className="my-4" dangerouslySetInnerHTML={{ __html: html }}></div>
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
      parent {
        ... on File {
          birthTime(formatString: "MMMM D YYYY")
        }
      }
    }
  }
`
