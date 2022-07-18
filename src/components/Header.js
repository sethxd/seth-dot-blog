import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

function Header() {
  return (
    <header className="bg-black text-white p-8 text-left">
      <Link to="/">
        <h1 className="text-5xl font-serif font-semibold">Title</h1>
      </Link>
    </header>
  )
}

export default Header
