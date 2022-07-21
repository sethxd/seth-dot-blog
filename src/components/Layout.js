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
    <div className="flex flex-col min-h-screen">
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
      <main className="max-w-6xl md:mx-auto flex-grow">{children}</main>
      <footer className="bg-black text-white px-8 py-4">
        &copy; {new Date().getFullYear()} Seth
      </footer>
    </div>
  )
}

export default Layout
