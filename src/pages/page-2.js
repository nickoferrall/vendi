import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => {
  // console.log("location....", location.state.testing)
  return (
    < Layout >
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      {location.state.testing}
      <Link to="/">Go back to the homepage</Link>
    </Layout >
  )
}

export default SecondPage
