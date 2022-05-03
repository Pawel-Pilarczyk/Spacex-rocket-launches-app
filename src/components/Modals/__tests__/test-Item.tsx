import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ModalLoader} from 'src/components';

it('Should render correctly', () => {
  const modalLoader = render(<ModalLoader />);
  expect(modalLoader).toMatchSnapshot();
});

it('Should dipslay "Loading" text', () => {
  const modalLoader = render(<ModalLoader />);
  const text = modalLoader.findByText('Loading');
  expect(text).toBeDefined();
});

it('Should have a loader child', () => {
  const modalLoader = render(<ModalLoader />);
  const loader = modalLoader.findByTestId('loader');
  expect(loader).toBeDefined();
});
