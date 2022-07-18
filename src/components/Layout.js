import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet title="Seth's thing" />
      <Header></Header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
