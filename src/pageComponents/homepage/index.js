// import React from 'react';
// import { graphql } from 'gatsby'

// import DisplayHostelsContainer from './displayHostels'
// import Headline from './headline'
// // import useAllHostelsData from '../../hostelsData/AllHostelsData'
// // import useForSaleHostels from '../../hostelsData/ForSaleHostelsData'

// const Homepage = ({ data }) => {
//   // const [forSaleHostelsArr] = useForSaleHostels()
//   // const [allHostelsArr] = useAllHostelsData()
//   console.log("HOMEPAGE", data)
//   if (data) {
//     return (
//       <>
//         <Headline />
//         <DisplayHostelsContainer
//           hostelData={data}
//           subtitle={"Find hostels that are currently looking for buyers"}
//           title={"For Sale"}
//         />
//         {/* <DisplayHostelsContainer
//                   hostelData={allHostelsArr}
//                   subtitle={"Browse all hostels in Colombia"}
//                   title={"All Hostels"}
//               /> */}
//       </>
//     );
//   } else {
//     return null
//   }
// };

// export const query = graphql`
// {
//     allContentfulAllHostels {
//       edges{
//         node {
//           id
//           slug
//         }
//       }
//     }
//   }
// `

// export default Homepage