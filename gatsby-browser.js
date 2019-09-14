/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import React from 'react'

// const defaultState = {
//     testing: "Yaaaay!",
// }
// export const HostelDataContext = React.createContext(defaultState)

// export const wrapRootElement = ({ element }) => {
//     return (
//         <HostelDataContext.Provider value={defaultState}>
//             {element}
//         </HostelDataContext.Provider>
//     )
// }


import React from 'react'
import { HostelDataProvider } from './src/context/HostelDataContext'

export const wrapRootElement = ({ element }) => {
    return (
        <HostelDataProvider>
            {element}
        </HostelDataProvider>
    )
}
