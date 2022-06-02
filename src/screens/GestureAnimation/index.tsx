import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Ball = () => {
  const offset = useSharedValue({x: 0, y: 0});
  const start = useSharedValue({x: 0, y: 0});
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const savedRotation = useSharedValue(0);
  const width = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: scale.value},
        {rotateZ: `${rotation.value}rad`},
      ],
      width: width.value,
    };
  });

  const dragGesture = Gesture.Pan()
    .averageTouches(true)
    .onUpdate(e => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
      width.value = withSpring(width.value + e.translationX / 2);
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    });

  const zoomGesture = Gesture.Pinch()
    .onUpdate(event => {
      scale.value = savedScale.value * event.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const rotateGesture = Gesture.Rotation()
    .onUpdate(event => {
      rotation.value = savedRotation.value + event.rotation;
    })
    .onEnd(() => {
      savedRotation.value = rotation.value;
    });

  const longPress = Gesture.LongPress()
    .onStart(event => {
      scale.value = event.duration > 0.5 ? scale.value * 2 : 0.5;
    })
    .onEnd(() => (scale.value = 0.4));

  const composed = Gesture.Simultaneous(
    dragGesture,
    longPress,
    Gesture.Simultaneous(zoomGesture, rotateGesture),
  );
  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[styles.ball, animatedStyles]} />
    </GestureDetector>
  );
};

const GestureAnimation = () => {
  return (
    <View style={styles.container}>
      <Ball />
      <Ball />
      <Ball />
    </View>
  );
};

export default GestureAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ball: {
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
