import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HostelDataContext } from '../../gatsby-browser'

const SecondPage = ({ location }) => {
  const { testing } = useContext(HostelDataContext)
  console.log("testing..", testing)
  return (
    < Layout >
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      {location.state.testing}
      <Link to="/">Go back to the {testing}</Link>
    </Layout >
  )
}

export default SecondPage
