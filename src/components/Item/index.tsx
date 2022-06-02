import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  SlideInRight,
  SlideOutLeft,
  Layout,
  SlideInLeft,
  SlideOutRight,
} from 'react-native-reanimated';
import {TLaunch} from 'src/types/index';
import {COLORS} from 'src/constants/colors';
import {scaling} from 'src/styles/scaling';
import {Typography} from 'src/components';
import {RocketFailure, RocketSuccess, Arrow} from 'src/assets/svg';

type Props = {
  data: TLaunch;
  onPress: () => void;
  index?: number;
  nextPressed?: boolean;
};

const Item = ({data, onPress, index, nextPressed}: Props) => {
  const {mission_name, launch_success} = data;
  return (
    <Animated.View
      entering={
        nextPressed
          ? SlideInRight.delay(index ? index * 40 : 0)
          : SlideInLeft.delay(index ? index * 40 : 0)
      }
      exiting={
        nextPressed
          ? SlideOutLeft.delay(index ? index * 20 : 0)
          : SlideOutRight.delay(index ? index * 20 : 0)
      }
      layout={Layout.springify()}>
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
    </Animated.View>
  );
};

function areEqual(
  prevProps: Record<string, any>,
  nextProps: Record<string, any>,
) {
  return nextProps === prevProps ? true : false;
}

export default React.memo(Item, areEqual);

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
