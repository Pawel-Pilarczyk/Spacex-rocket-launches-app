import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import RootNavigation from './navigation';

export const API = 'https://api.spacex.land/graphql';

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootNavigation />
    </ApolloProvider>
  );
};

export default App;
