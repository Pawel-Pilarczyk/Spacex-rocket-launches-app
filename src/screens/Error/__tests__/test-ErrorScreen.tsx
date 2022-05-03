/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ErrorScreen} from 'src/screens';
import {TNavigation} from 'src/types';

const navigation: TNavigation = {
  navigate: (route: string, params: any) => {},
  goBack: () => {},
};

it('Should render correctly', () => {
  const modalError = render(<ErrorScreen navigation={navigation} />);
  expect(modalError).toBeDefined();
});

it('Should have Error Icon', () => {
  const modalError = render(<ErrorScreen navigation={navigation} />);
  expect(modalError.findByTestId('errorIcon')).toBeDefined();
});

it('Should have Try again Button ', async () => {
  const modalError = render(<ErrorScreen navigation={navigation} />);
  const tryAgainButton = await modalError.findByTestId('tryAgainButton');
  expect(tryAgainButton).toBeDefined();
});
