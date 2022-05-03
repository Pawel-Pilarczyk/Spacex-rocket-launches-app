import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TLaunch} from 'src/types/index';
import {COLORS} from 'src/constants/colors';
import {scaling} from 'src/styles/scaling';
import {Typography} from 'src/components';
import {RocketFailure, RocketSuccess, Arrow} from 'src/assets/svg';

type Props = {
  data: TLaunch;
  onPress: () => void;
};

const Item = ({data, onPress}: Props) => {
  const {mission_name, launch_success} = data;
  return (
    <TouchableOpacity onPress={onPress} testID="itemID">
      <View
        style={[
          styles.wrapper,
          launch_success ? styles.lineSuccess : styles.lineError,
        ]}>
        <View style={styles.titleWrapper}>
          {launch_success ? (
            <RocketSuccess width={25} height={25} testID="rocketSuccess" />
          ) : (
            <RocketFailure width={25} height={25} testID="rocketFailure" />
          )}
          <Typography
            color={COLORS.WHITE}
            size="14"
            type="bold"
            style={styles.spacer}>
            {mission_name}
          </Typography>
        </View>
        <Arrow testID="arrowIcon" />
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  wrapper: {
    height: scaling.vs(50),
    borderColor: COLORS.PRIMARYDARK,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaling.hs(10),
    marginVertical: scaling.vs(5),
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineSuccess: {
    backgroundColor: COLORS.SUCCESS,
  },
  lineError: {
    backgroundColor: COLORS.ERROR,
  },
  spacer: {
    marginLeft: scaling.hs(10),
  },
});
