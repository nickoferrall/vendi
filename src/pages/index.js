import React from "react"
import { graphql } from 'gatsby'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Headline from '../pageComponents/homepage/headline'
import HostelCard from '../pageComponents/homepage/hostelCard/HostelCard'
import Layout from '../components/layout'

import styles from '../pageComponents/homepage/hostelCard/hostelCardStyles.jss'
import { withStyles } from '@material-ui/core/styles'

const IndexPage = ({ classes, data: { allContentfulAllHostels } }) => {
  return (
    <Layout>
      <Headline />
      <Grid container justify="center">
        <Box className={classes.boxTitle}>
          <Typography align="center" className={classes.title} variant="h4" >{"For Sale"}</Typography>
          <Typography align="center" variant="h6">{"Find hostels that are currently looking for buyers"}</Typography>
        </Box>
      </Grid>
      <Grid container justify="center">
        {allContentfulAllHostels.edges.map(hostel => {
          return hostel.node.forSale ?
            <HostelCard hostelData={hostel.node} /> : null
        })}
      </Grid>

      <Grid container justify="center">
        <Box className={classes.boxTitle}>
          <Typography align="center" className={classes.title} variant="h4" >{"All Hostels"}</Typography>
          <Typography align="center" variant="h6">{"Browse all hostels in Colombia"}</Typography>
        </Box>
      </Grid>
      <Grid container justify="center">
        {allContentfulAllHostels.edges.map(hostel => {
          return hostel.node.forSale ? null :
            <HostelCard hostelData={hostel.node} />
        })}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
query allHostels {
    allContentfulAllHostels {
      edges{
        node {
          id
          slug
          forSale
          hostelName
          city
          country
          price
          description {
              description
              }
            facilities {
            id,
            Wifi
            Towels
            Showers
            Tour_Desk
            Ceiling_Fans
            Swimming_Pool
            Air_Conditioning
            English_Speaking_Staff
            } 
          image {
              fluid(maxWidth: 800) {
                  ...GatsbyContentfulFluid
              }
          }
        }
      }
    }
  }
`

export default withStyles(styles)(IndexPage)