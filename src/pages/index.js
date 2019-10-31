import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"

import indexStyles from "./index.module.scss"

require("../styles/index.scss")

const IndexPage = () => {
  return (
    <div className={indexStyles.container}>
      <Layout>
        <Header />
      </Layout>
    </div>
  )
}

export default IndexPage
