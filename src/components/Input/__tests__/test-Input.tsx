/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Input} from 'src/components';
import {View} from 'react-native';
it('Should render correctly', () => {
  const value = '';
  const handleSetValue = (str: string) => {};
  const input = render(<Input setValue={handleSetValue} value={value} />);
  expect(input).toMatchSnapshot();
});

it('Should have a placeholder of value placeholder', () => {
  const value = '';
  const handleSetValue = (str: string) => {};
  const input = render(
    <Input setValue={handleSetValue} value={value} placeholder="placeholder" />,
  );
  expect(input.container.props.placeholder).toBeTruthy();
  expect(input.container.props.placeholder).toEqual('placeholder');
});

it('Should have a magnifying glass icon child', () => {
  const value = '';
  const handleSetValue = (str: string) => {};
  const input = render(
    <Input setValue={handleSetValue} value={value} type="search" />,
  );
  const MGlass = input.getByTestId('magnifyingGlass');
  expect(MGlass).toBeDefined();
});

it('Should not have a magnifying glass icon child', () => {
  const value = '';
  const handleSetValue = (str: string) => {};
  const input = render(<Input setValue={handleSetValue} value={value} />);
  const MGlass = input.queryAllByTestId('magnifyingGlass');
  expect(MGlass.length).toEqual(0);
});

it('Should have a value', () => {
  const value = 'value';
  const handleSetValue = (str: string) => {};
  const input = render(<Input setValue={handleSetValue} value={value} />);
  expect(input.container.props.value).toEqual('value');
});
