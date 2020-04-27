import React from 'react';
import 'bulma/css/bulma.min.css';
import 'cross-fetch/polyfill';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Histories from '../data/Histories';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default HistoriesPage => {
  return (
    <ApolloProvider client={client}>
      <Histories/>
    </ApolloProvider>
  );
}

