import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Typography} from 'src/components';
import {scaling} from 'src/styles/scaling';
import {COLORS} from 'src/constants/colors';

type TButtonType = 'primary' | 'outline';

type TProps = {
  onPress?: () => void;
  type?: TButtonType;
  children: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  testID?: string;
};

const Button = ({
  children,
  onPress,
  type = 'primary',
  style,
  disabled,
  testID,
}: TProps) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity
      testID={testID}
      onPress={handlePress}
      disabled={disabled}
      style={[
        style,
        styles.wrapper,
        type === 'primary' && styles.primary,
        type === 'outline' && styles.outline,
        disabled && styles.disabled,
      ]}>
      <Typography
        size="18"
        color={type === 'primary' || disabled ? COLORS.WHITE : COLORS.PRIMARY}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: scaling.vs(56),
    maxHeight: scaling.vs(56),
    width: '100%',
    borderRadius: scaling.vs(16),
  },
  primary: {
    backgroundColor: COLORS.PRIMARY,
  },
  outline: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
  },
  disabled: {
    backgroundColor: COLORS.DISABLED,
    borderColor: COLORS.DISABLED,
  },
});
