export type TNavigation = {
  navigate: (route: string, params?: any) => void;
  goBack: () => void;
};

export type TRoute = {
  params: any;
};

export type TScreenProps = {
  navigation: TNavigation;
  route?: TRoute;
};

export type TLaunch = {
  mission_name: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    video_link: string;
  };
  rocket: {
    rocket_name: string;
  };
  launch_date_utc: string;
  launch_success: boolean;
  id: string;
};

export type TLaunchesData = {
  launchesPast: Array<TLaunch>;
};
