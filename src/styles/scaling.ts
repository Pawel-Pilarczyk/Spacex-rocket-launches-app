import {Dimensions} from 'react-native';

const {height: windowHeight, width: windowWidth} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
// scale
const s = (size: number) =>
  size + ((windowWidth / guidelineBaseWidth) * size - size) * 0.5;

// vertical scale
const vs = (size: number) =>
  Math.round(size + ((windowHeight / guidelineBaseHeight) * size - size));

// horizontal scale
const hs = (size: number) =>
  Math.round(size + (windowWidth / guidelineBaseWidth) * size - size);

export const scaling = {s, vs, hs};
