import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  const handleClick = () => {
    navigate(
      "/page-2",
      {
        state: { testing: 'ehhsjkdhksjhd' },
      }
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {/* <Link to="/page-2/"
      state={{ testing: 'winning' }}
    >Go to page 2</Link> */}
      <h4 onClick={() => handleClick()}>Page 2</h4>
    </Layout>
  )
}

export default IndexPage
