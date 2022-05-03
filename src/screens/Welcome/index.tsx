import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from 'src/constants/colors';
import {ROUTES} from 'src/constants/routes';
import {scaling} from 'src/styles/scaling';
import {Rocket} from 'src/assets/svg';
import {Typography, Button} from 'src/components';
import {TScreenProps} from 'src/types';

const Welcome = ({navigation}: TScreenProps) => {
  const handleNavigation = () => navigation.navigate(ROUTES.HOME);
  return (
    <View style={styles.wrapper}>
      <Typography size="40" type="bold">
        Welcome
      </Typography>
      <Typography size="18" style={styles.paragraph}>
        Follow the latest SpaceX rocket launches with just one click
      </Typography>
      <Rocket width={'75%'} height={'60%'} testID="rocketSVG" />
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
});
