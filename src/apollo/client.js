import ApolloClient from 'apollo-boost';

import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  fetch,
  uri: 'https://arcane-reaches-25218.herokuapp.com/'
});
// uri: process.env.GATSBY_HEROKU_URL
