/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import React from 'react'
// import { HostelDataProvider } from './src/context/HostelDataContext'

// export const wrapRootElement = ({ element }) => {
//     return (
//         <HostelDataProvider>
//             {element}
//         </HostelDataProvider>
//     )
// }

export { wrapRootElement } from './src/apollo/wrap-root-element';
