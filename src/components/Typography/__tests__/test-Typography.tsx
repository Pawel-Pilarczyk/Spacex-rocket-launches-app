import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {COLORS} from 'src/constants/colors';
import {Typography} from 'src/components';

it('Should render correctly', () => {
  const typography = render(<Typography>Test</Typography>);
  expect(typography).toMatchSnapshot();
});

it('Should render have correct props', () => {
  const typography = render(
    <Typography type="bold" size="22" color={COLORS.PRIMARY}>
      Test
    </Typography>,
  );
  expect(typography.container.props.type).toEqual('bold');
  expect(typography.container.props.size).toEqual('22');
  expect(typography.container.props.color).toEqual(COLORS.PRIMARY);
});
