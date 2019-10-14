/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// import React from 'react';

// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import { renderToString } from 'react-dom/server';
// import fetch from 'isomorphic-fetch';

// // import Provider from './src/store/provider'; // This can be the React context API or Redux/Mobx

// // gatsby-ssr is required for build regardless if you plan to support SSR
// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
//   const client = new ApolloClient({
//     fetch,
//     uri: 'https://arcane-reaches-25218.herokuapp.com/'
//   });

//   const ConnectedBody = () => (
//     <ApolloProvider client={client}>
//       {/* <Provider> */}
//       {bodyComponent}
//       {/* </Provider> */}
//     </ApolloProvider>
//   );

//   replaceBodyHTMLString(renderToString(<ConnectedBody />));
// };

export { wrapRootElement } from './src/apollo/wrap-root-element';
