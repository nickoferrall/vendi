import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Nav from "./Nav"

import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <Nav siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  )
}

export default Layout
