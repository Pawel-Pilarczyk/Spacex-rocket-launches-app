import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
} from 'react-native-reanimated';
import {COLORS} from 'src/constants/colors';
import {ROUTES} from 'src/constants/routes';
import {scaling} from 'src/styles/scaling';
import {Globe, RocketSuccess} from 'src/assets/svg';
import {Typography, Button} from 'src/components';
import {TScreenProps} from 'src/types';

const Welcome = ({navigation}: TScreenProps) => {
  const rocketAnimationValue = useSharedValue(0);
  const globeAnimationValue = useSharedValue(0);

  const rocketAnimation = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rocketAnimationValue.value}deg`}],
    };
  });
  const globeAnimation = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${globeAnimationValue.value}deg`}],
    };
  });

  useEffect(() => {
    rocketAnimationValue.value = withRepeat(
      withTiming(360, {duration: 10000}),
      Infinity,
    );
    globeAnimationValue.value = withRepeat(
      withTiming(-360, {duration: 20000}),
      Infinity,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = () => navigation.navigate(ROUTES.HOME);
  return (
    <View style={styles.wrapper}>
      <Typography size="40" type="bold">
        Welcome
      </Typography>
      <Typography size="18" style={styles.paragraph}>
        Follow the latest SpaceX rocket launches with just one click
      </Typography>
      <View style={styles.animatedView}>
        <Animated.View style={[globeAnimation, styles.animatedGlobe]}>
          <Globe testID="rocketSVG" />
        </Animated.View>
        <Animated.View style={[rocketAnimation, styles.animatedRocket]}>
          <RocketSuccess />
        </Animated.View>
      </View>

      <Button style={styles.button} onPress={handleNavigation}>
        Let's get Started!
      </Button>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scaling.hs(10),
    paddingVertical: scaling.vs(25),
  },
  button: {
    width: '100%',
    marginTop: 'auto',
  },
  paragraph: {
    marginTop: scaling.vs(20),
    marginBottom: scaling.vs(40),
    textAlign: 'center',
  },
  animatedView: {
    width: '60%',
    height: '60%',
  },
  animatedGlobe: {
    width: '100%',
    height: '100%',
  },
  animatedRocket: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
