import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet title={data.site.siteMetadata.title} />
      <header className="p-8 text-left bg-black text-white">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-5xl font-thin">
              {data.site.siteMetadata.title}
            </h1>
          </Link>
        </div>
      </header>
      <main className="max-w-6xl mx-auto">{children}</main>
    </div>
  )
}

export default Layout
