/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import LaunchDetails from 'src/screens/LaunchDetails';
import {TNavigation, TLaunch, TRoute} from 'src/types';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

const launchData: TLaunch = {
  id: '1',
  launch_date_utc: 'Thu Mar 31 2022 14:56:49 GMT+0200',
  launch_site: {site_name_long: 'TEST SIDE'},
  launch_success: true,
  links: {
    article_link: '',
    video_link: '',
  },
  mission_name: 'TEST MISSION',
  rocket: {
    rocket_name: 'TEST ROCKET',
  },
};

const videoLaunchData: TLaunch = {
  ...launchData,
  links: {
    article_link: '',
    video_link: 'Link',
  },
};
const articleLaunchData: TLaunch = {
  ...launchData,
  links: {
    article_link: 'Link',
    video_link: '',
  },
};
const articleAndVideoLaunchData: TLaunch = {
  ...launchData,
  links: {
    article_link: 'Link',
    video_link: 'Link',
  },
};

const navigation: TNavigation = {
  navigate: (route: string, params: any) => {},
  goBack: () => {},
};

it('should render correctly', () => {
  const route: TRoute = {
    params: {
      launchData,
    },
  };
  const launchDetails = render(
    <LaunchDetails navigation={navigation} route={route} />,
  ).toJSON();
  expect(launchDetails).toMatchSnapshot();
});

it('should render Open Video Button and should not render Article button', () => {
  const route: TRoute = {
    params: {
      launchData: videoLaunchData,
    },
  };
  const launchDetails = render(
    <LaunchDetails navigation={navigation} route={route} />,
  );

  expect(launchDetails.queryAllByTestId('videoButton').length).toEqual(1);
  expect(launchDetails.queryAllByTestId('articleButton').length).toEqual(0);
});

it('should render Open Article Button and should not render Video button', () => {
  const route: TRoute = {
    params: {
      launchData: articleLaunchData,
    },
  };
  const launchDetails = render(
    <LaunchDetails navigation={navigation} route={route} />,
  );

  expect(launchDetails.queryAllByTestId('videoButton').length).toEqual(0);
  expect(launchDetails.queryAllByTestId('articleButton').length).toEqual(1);
});

it('should render Open Article Button and Video button', () => {
  const route: TRoute = {
    params: {
      launchData: articleAndVideoLaunchData,
    },
  };
  const launchDetails = render(
    <LaunchDetails navigation={navigation} route={route} />,
  );

  expect(launchDetails.queryAllByTestId('videoButton').length).toEqual(1);
  expect(launchDetails.queryAllByTestId('articleButton').length).toEqual(1);
});

it('should not render Open Article Button and Video button', () => {
  const route: TRoute = {
    params: {
      launchData: launchData,
    },
  };
  const launchDetails = render(
    <LaunchDetails navigation={navigation} route={route} />,
  );

  expect(launchDetails.queryAllByTestId('videoButton').length).toEqual(0);
  expect(launchDetails.queryAllByTestId('articleButton').length).toEqual(0);
});

it('should display Lauch Data', () => {
  const route: TRoute = {
    params: {
      launchData: launchData,
    },
  };
  const launchDetails = render(
    <LaunchDetails navigation={navigation} route={route} />,
  );

  expect(launchDetails.queryAllByTestId('videoButton').length).toEqual(0);
  expect(launchDetails.queryAllByTestId('articleButton').length).toEqual(0);
});
