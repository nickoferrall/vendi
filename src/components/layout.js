import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Nav from "./Nav"

import styles from './LayoutStyles.jss'
import { withStyles } from '@material-ui/core/styles'


const Layout = ({ children, classes }) => {
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
    <div
      style={{
        margin: '0 auto',
        padding: 0
      }}>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <main className={classes.root}>{children}</main>
    </div>
  )
}

export default withStyles(styles)(Layout)

// export default Layout
