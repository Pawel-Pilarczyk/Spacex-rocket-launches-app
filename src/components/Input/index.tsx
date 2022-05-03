import {TextInput, View, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import {scaling} from 'src/styles/scaling';
import {COLORS} from 'src/constants/colors';
import {MagnifyingGlass} from 'src/assets/svg';

type TProps = {
  type?: 'text' | 'search';
  value?: string;
  setValue: (str: string) => void;
  style?: ViewStyle | ViewStyle[];
  placeholder?: string;
  testID?: string;
};

const Input = ({
  setValue,
  type = 'text',
  value,
  style,
  placeholder,
  testID,
}: TProps) => {
  return (
    <View style={[style, styles.wrapper]}>
      {type === 'search' && <MagnifyingGlass testID="magnifyingGlass" />}
      <TextInput
        onChangeText={setValue}
        value={value}
        style={styles.textInput}
        autoFocus={false}
        maxLength={100}
        placeholder={placeholder}
        testID={testID}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    height: scaling.hs(48),
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaling.hs(10),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  textInput: {
    flex: 1,
  },
});
