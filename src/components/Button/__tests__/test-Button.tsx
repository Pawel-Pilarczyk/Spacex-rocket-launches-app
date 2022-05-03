import 'react-native';
import {View} from 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from 'src/components';

it('Should render correctly', () => {
  const Btn = render(<Button>Test</Button>);
  expect(Btn).toMatchSnapshot();
});

it('Should invoke passed Function', () => {
  const handlePress = {
    onPress: () => {},
  };
  jest.spyOn(handlePress, 'onPress');
  const Btn = render(
    <View>
      <Button onPress={handlePress.onPress} testID="testButton">
        Test
      </Button>
    </View>,
  );
  const pressable = Btn.getByTestId('testButton');
  fireEvent.press(pressable);
  expect(handlePress.onPress).toBeCalledTimes(1);
});

it('Should be disabled', () => {
  const Btn = render(<Button disabled>Test</Button>);
  expect(Btn.container.props.disabled).toEqual(true);
});

it('Should have property of type equal to primary', () => {
  const Btn = render(<Button type="primary">Test</Button>);
  expect(Btn.container.props.type).toEqual('primary');
});

it('Should have property of type equal to outline', () => {
  const Btn = render(<Button type="outline">Test</Button>);
  expect(Btn.container.props.type).toEqual('outline');
});
