import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://arcane-reaches-25218.herokuapp.com/'
});
// uri: process.env.GATSBY_HEROKU_URL
