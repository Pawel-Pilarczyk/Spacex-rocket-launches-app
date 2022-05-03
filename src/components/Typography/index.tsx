import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import {scaling} from 'src/styles/scaling';
import {COLORS} from 'src/constants/colors';

type TSize =
  | '8'
  | '10'
  | '12'
  | '14'
  | '16'
  | '18'
  | '22'
  | '24'
  | '28'
  | '32'
  | '40';
export type TFontType = 'bold' | 'regular' | 'light';

const fontWeight: Record<TFontType, any> = {
  bold: '800',
  regular: '400',
  light: '200',
};

type TProps = {
  children: string | Element | Element[];
  color?: string;
  size?: TSize;
  type?: TFontType;
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
};

const Typography = ({
  size = '12',
  type = 'regular',
  children,
  style,
  color = COLORS.BLACK,
}: TProps) => {
  return (
    <Text
      style={[
        style,
        {
          fontSize: scaling.hs(+size),
          fontWeight: fontWeight[type],
          color,
        },
      ]}>
      {children}
    </Text>
  );
};

export default Typography;
