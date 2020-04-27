import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import LaunchListComponent from '../components/LaunchListComponent';
import NavBarComponent from '../components/NavBarComponent';
import LoaderComponent from '../components/LoaderComponent';

export default class Launches extends Component {
  render() {
    return (
      <ListOfLaunches />
    )
  }
}

const LAUNCH_QUERY = gql`
query LaunchQuery {
    launches {
        flight_number,
        mission_name,
        launch_success,
        details,
        launch_date_utc,
        rocket {
          rocket_name,
          rocket_id
        },
        links {
          mission_patch_small,
          flickr_images,
          video_link,
          reddit_media,
          wikipedia,
          article_link
        }
    }
}`;

function ListOfLaunches() {
  const { loading, error, data } = useQuery(LAUNCH_QUERY);
  if (loading) return <LoaderComponent />;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <NavBarComponent />
      <>
        {data.launches.map(launches => (
          <LaunchListComponent key={launches.flight_number} launches={launches} />
        ))}
      </>
    </div>
  )
}