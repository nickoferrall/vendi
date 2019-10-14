import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

// import { client } from './client';

const client = new ApolloClient({
  uri: 'https://arcane-reaches-25218.herokuapp.com/'
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);

// export const wrapRootElement = ({ element }) => (
//   <ApolloProvider client={client}>
//     <ApolloHooksProvider client={client}>{element}</ApolloHooksProvider>
//   </ApolloProvider>
// );
