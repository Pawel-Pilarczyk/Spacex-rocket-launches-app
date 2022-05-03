import {gql} from '@apollo/client';

export const fetchDataQuery = gql`
  query getRocketsData($offset: Int) {
    launchesPast(limit: 20, offset: $offset) {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      launch_date_utc
      launch_success
      id
    }
  }
`;
