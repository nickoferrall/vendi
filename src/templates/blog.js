import React from "react"

import Blog from '../pageComponents/blog/index'
import Header from '../components/Header'
import HeaderCard from '../pageComponents/blog/headerCard'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid'

const Learn = () => {
    return (
        <Layout>
            <Header title="Learn about running a hostel" />
            <SEO title="Learn" />
            <Grid container justify="center">
                <HeaderCard />
            </Grid>
            <Grid container justify="center" >
                {[1, 2, 3, 4, 5].map(val => {
                    return <Blog />
                })}
            </Grid>
        </Layout>
    )
}

export default Learn
