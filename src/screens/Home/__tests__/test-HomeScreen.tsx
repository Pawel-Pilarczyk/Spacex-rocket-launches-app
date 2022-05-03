/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native';
import React from 'react';
import fetch from 'cross-fetch';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {render, waitFor} from '@testing-library/react-native';
import {Home} from 'src/screens';
import {TNavigation} from 'src/types';

export const API = 'https://api.spacex.land/graphql';

const client = new ApolloClient({
  link: new HttpLink({uri: API, fetch}),
  cache: new InMemoryCache(),
});

const navigation: TNavigation = {
  navigate: (route: string, params: any) => {},
  goBack: () => {},
};

it('Should render correctly', async () => {
  const home = render(
    <ApolloProvider client={client}>
      <Home navigation={navigation} />
    </ApolloProvider>,
  );
  expect(home).toMatchSnapshot();
});

it('Should render modal loader', async () => {
  const home = render(
    <ApolloProvider client={client}>
      <Home navigation={navigation} />
    </ApolloProvider>,
  );
  const modalLoader = home.findByTestId('modalLoader');
  expect(modalLoader).toBeDefined();
});

it('Should render searchbar items and button after loading is finished and loader modal is no longer rendered', async () => {
  const home = render(
    <ApolloProvider client={client}>
      <Home navigation={navigation} />
    </ApolloProvider>,
  );
  await waitFor(() => home.findByPlaceholderText('Search'), {
    timeout: 15000,
    interval: 1000,
  });
  expect(home.findByPlaceholderText('Search')).toBeDefined();
  expect(home.getByTestId('buttonPrevious')).toBeDefined();
  expect(home.getByTestId('buttonNext')).toBeDefined();
  expect(home.queryAllByTestId('itemID').length).toBeGreaterThan(0);
}, 15000);
