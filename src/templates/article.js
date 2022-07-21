import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Article = ({ data }) => {
  const { title, tag, date } = data.mdx.frontmatter
  return (
    <Layout>
      <Helmet title={`${title} | seth.blog`} />
      <section className="w-100 p-4 md:p-8 md:w-4/5 mx-auto">
        <span className="text-slate-500 text-sm">{date}</span>
        <h1 className="font-semibold text-4xl mb-4">{title}</h1>
        <span className="inline-block py-1 px-3 bg-slate-500 text-white">
          {tag}
        </span>
        <section className="markdown-content my-8">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </section>
      </section>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        tag
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
