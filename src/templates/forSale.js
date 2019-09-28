import React from 'react';
import { graphql } from 'gatsby'

import ClickedForSaleHostel from '../pageComponents/clickedForSaleHostel';
import Layout from '../components/layout'

const forSale = ({ data: { allContentfulAllHostels } }) => {
  if (allContentfulAllHostels) {
    return (
      <>
        <Layout />
        {allContentfulAllHostels.edges.map(hostel => {
          return (
            <ClickedForSaleHostel
              hostelData={hostel.node}
            />
          )
        })}
      </>
    );
  }
};

export const query = graphql`
query hostels($slug: String!) {
    allContentfulAllHostels(filter: { slug: { eq: $slug}}) {
      edges{
        node {
          id
          slug
          address
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

export default forSale;