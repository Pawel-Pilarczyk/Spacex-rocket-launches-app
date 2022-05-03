/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {TLaunch} from 'src/types';
import {Item} from 'src/components';
import {View} from 'react-native';

const launchData: TLaunch = {
  id: '1',
  launch_date_utc: 'Thu Mar 31 2022 14:56:49 GMT+0200',
  launch_site: {site_name_long: 'TEST SIDE'},
  launch_success: true,
  links: {
    article_link: '',
    video_link: '',
  },
  mission_name: 'TEST MISSION',
  rocket: {
    rocket_name: 'TEST ROCKET',
  },
};
const launchFailureData: TLaunch = {
  ...launchData,
  launch_success: false,
};

it('Should render correctly', () => {
  const mockedFunction = jest.fn();
  const item = render(<Item onPress={mockedFunction} data={launchData} />);
  expect(item).toMatchSnapshot();
});

it('Should dipslay mission name', () => {
  const mockedFunction = jest.fn();
  const item = render(<Item onPress={mockedFunction} data={launchData} />);
  expect(item.queryAllByText('TEST MISSION').length).toBeGreaterThan(0);
});

it('Should have a rocketSuccess icon child and should not have rocketFailure child', () => {
  const mockedFunction = jest.fn();
  const item = render(<Item onPress={mockedFunction} data={launchData} />);
  const rocketSuccess = item.getByTestId('rocketSuccess');
  expect(rocketSuccess).toBeDefined();
  expect(item.queryAllByTestId('rocketFailuer').length).toEqual(0);
});

it('Should have a rocketFailure icon child and should not have rocketSuccess child', () => {
  const mockedFunction = jest.fn();
  const item = render(
    <Item onPress={mockedFunction} data={launchFailureData} />,
  );
  const rocketFailure = item.getByTestId('rocketFailure');
  expect(rocketFailure).toBeDefined();
  expect(item.queryAllByTestId('rocketSuccess').length).toEqual(0);
});

it('Should have a arrow icon child', () => {
  const mockedFunction = jest.fn();
  const item = render(
    <Item onPress={mockedFunction} data={launchFailureData} />,
  );
  const arrowIcon = item.getByTestId('arrowIcon');
  expect(arrowIcon).toBeDefined();
});

it('Should invoke a function once pressed', () => {
  const mockedFunction = {
    handlePress: jest.fn(),
  };
  jest.spyOn(mockedFunction, 'handlePress');
  const item = render(
    <Item onPress={mockedFunction.handlePress} data={launchFailureData} />,
  );
  fireEvent.press(item.getByTestId('itemID'));
  expect(mockedFunction.handlePress).toBeCalledTimes(1);
});
