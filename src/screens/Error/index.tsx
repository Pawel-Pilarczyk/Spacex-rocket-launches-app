import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TScreenProps} from 'src/types';
import {Typography, Button} from 'src/components';
import {Error} from 'src/assets/svg';
import {scaling} from 'src/styles/scaling';

const ModalError = ({navigation}: TScreenProps) => {
  const handleTryAgain = () => navigation.goBack();
  return (
    <View style={styles.wrapper}>
      <Error testID="errorIcon" />
      <Typography size="28" style={styles.text}>
        Something went wrong, please try again
      </Typography>
      <Button
        style={styles.button}
        onPress={handleTryAgain}
        testID="tryAgainButton">
        Try Again
      </Button>
    </View>
  );
};

export default ModalError;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(256, 256, 256, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaling.hs(15),
    paddingBottom: scaling.vs(20),
    paddingTop: scaling.vs(100),
  },
  button: {
    marginTop: 'auto',
  },
  text: {
    textAlign: 'center',
    marginTop: scaling.vs(50),
  },
});
