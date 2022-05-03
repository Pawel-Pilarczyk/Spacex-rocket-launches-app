import {StyleSheet, View, Linking, ScrollView} from 'react-native';
import React from 'react';
import {TLaunch, TScreenProps} from 'src/types';
import {COLORS} from 'src/constants/colors';
import {scaling} from 'src/styles/scaling';
import {Button, Typography} from 'src/components';
import {RocketFailure, RocketSuccess} from 'src/assets/svg';

export type TParams = {
  launchData: TLaunch;
};

const ModalLaunchData = ({route}: TScreenProps) => {
  const {launchData}: TParams = route?.params || {};
  const {
    launch_date_utc,
    launch_site,
    launch_success,
    links,
    mission_name,
    rocket,
  } = launchData;
  const {article_link, video_link} = links;

  const handleOpenArticleLink = () => Linking.openURL(article_link);
  const handleOpenVideoLink = () => Linking.openURL(video_link);
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Typography type="bold" size="22">
          Mission name
        </Typography>
        <Typography size="22">{mission_name}</Typography>
        <View style={styles.spacer} />
        <View style={styles.missionStatusWrapper}>
          <View>
            <Typography type="bold" size="22">
              Mission status
            </Typography>
            <Typography
              size="22"
              color={launch_success ? COLORS.SUCCESS : COLORS.ERROR}
              type="bold">
              {launch_success ? 'Success' : 'Failure'}
            </Typography>
          </View>
          {launch_success ? <RocketSuccess /> : null}
          {!launch_success ? <RocketFailure /> : null}
        </View>
        <View style={styles.spacer} />
        <Typography type="bold" size="22">
          Mission date
        </Typography>
        <Typography size="22">{launch_date_utc}</Typography>
        <View style={styles.spacer} />
        <Typography type="bold" size="22">
          Rocket Name
        </Typography>
        <Typography size="22">{rocket.rocket_name}</Typography>
        <View style={styles.spacer} />
        <Typography type="bold" size="22">
          Launch site
        </Typography>
        <Typography size="22">{launch_site.site_name_long}</Typography>
        <View style={styles.spacer} />
        <View style={styles.buttonsWrapper}>
          {article_link ? (
            <Button
              onPress={handleOpenArticleLink}
              style={styles.button}
              testID="articleButton">
              Open Article
            </Button>
          ) : null}
          {video_link && (
            <Button
              onPress={handleOpenVideoLink}
              type="outline"
              testID="videoButton">
              Open Video
            </Button>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ModalLaunchData;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: scaling.hs(10),
    paddingVertical: scaling.vs(10),
    backgroundColor: COLORS.WHITE,
  },
  missionStatusWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spacer: {
    height: scaling.vs(25),
  },
  buttonsWrapper: {
    marginTop: 'auto',
    flexDirection: 'row',
  },
  button: {
    marginRight: scaling.hs(20),
  },
});
