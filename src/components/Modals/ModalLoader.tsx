import {StyleSheet, Modal, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {COLORS} from 'src/constants/colors';
import {Typography} from 'src/components';

const ModalLoader = () => {
  return (
    <Modal transparent={true} animationType="fade" testID="modalLoader">
      <View style={styles.wrapper}>
        <ActivityIndicator
          size="large"
          color={COLORS.PRIMARY}
          testID="loader"
        />
        <Typography size="24">Loading</Typography>
      </View>
    </Modal>
  );
};

export default ModalLoader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(256, 256, 256, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
