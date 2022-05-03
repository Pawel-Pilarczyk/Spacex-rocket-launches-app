/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import Welcome from 'src/screens/Welcome';
import {TNavigation} from 'src/types';
import {ROUTES} from 'src/constants/routes';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';
const navigation: TNavigation = {
  navigate: (route: string, params?: any) => {},
  goBack: () => {},
};
it('shoukd render correctly', () => {
  const welcome = render(<Welcome navigation={navigation} />).toJSON();
  expect(welcome).toMatchSnapshot();
});

it('should go to main Home page after pressing button Lets get started', () => {
  jest.spyOn(navigation, 'navigate');
  const welcomePage = render(<Welcome navigation={navigation} />);
  const continueButton = welcomePage.getByText("Let's get Started!");
  fireEvent.press(continueButton);
  expect(navigation.navigate).toHaveBeenCalledWith(ROUTES.HOME);
});

it('Should have a child of SVG graphic', () => {
  const welcome = render(<Welcome navigation={navigation} />);
  const svg = welcome.getByTestId('rocketSVG');
  expect(svg).toBeDefined();
});
