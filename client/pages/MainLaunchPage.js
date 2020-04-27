import React from 'react';
import 'bulma/css/bulma.min.css';
import 'cross-fetch/polyfill';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from '../data/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default MainLaunchPage => {
  return (
    <ApolloProvider client={client}>
      <Launches/>
    </ApolloProvider>
  );
}

