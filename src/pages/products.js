import React from "react"
import Layout from "../components/Layout"
import Products from "../components/Products/Products"
import SEO from "../components/SEO"
const products = () => {
  return (
    <Layout>
      <SEO title="products" />
      <Products />
    </Layout>
  )
}

export default products
