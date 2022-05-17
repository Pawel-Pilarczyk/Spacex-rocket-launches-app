import React, {useEffect} from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './navigation';

export const API = 'https://api.spacex.land/graphql';

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache(),
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <RootNavigation />
    </ApolloProvider>
  );
};

export default App;
