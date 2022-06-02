import React, {useEffect} from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
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
    <GestureHandlerRootView style={{flex: 1}}>
      <ApolloProvider client={client}>
        <RootNavigation />
      </ApolloProvider>
    </GestureHandlerRootView>
  );
};

export default App;
