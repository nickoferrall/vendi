import React from "react"
import { graphql } from 'gatsby'

import DisplayHostelsContainer from '../pageComponents/homepage/displayHostels'
import Headline from '../pageComponents/homepage/headline'
import Layout from '../components/layout'

const IndexPage = ({ data: { allContentfulAllHostels } }) => {
  // console.log("data --> index pags", allContentfulAllHostels)
  return (
    <Layout>
      <Headline />
      <DisplayHostelsContainer
        hostelData={allContentfulAllHostels.edges}
        subtitle={"Find hostels that are currently looking for buyers"}
        title={"For Sale"}
      />
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

export default IndexPage
