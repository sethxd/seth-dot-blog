import React from "react"
import Layout from "../components/Layout"
import RecentGames from "../components/RecentGames"
import { Helmet } from "react-helmet"

const Playing = () => {
  return (
    <Layout>
      <Helmet title="Recently played | seth.blog" />
      <RecentGames />
    </Layout>
  )
}

export default Playing
