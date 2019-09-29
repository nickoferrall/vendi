import React from "react"

import Blog from '../pageComponents/blog/index'
import Header from '../components/Header'
import HeaderCard from '../pageComponents/blog/headerCard'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid'

import styles from '../pageStyles/learnStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const Learn = ({ classes }) => {

    return (
        <Layout>
            <Header title="FAQs about running a hostel in Colombia" />
            <SEO title="Learn" />
            <HeaderCard />
            <Grid container justify="center" >
                {[1, 2, 3, 4, 5].map(val => {
                    return <Blog />
                })}
            </Grid>
        </Layout>
    )
}

export default withStyles(styles)(Learn)

