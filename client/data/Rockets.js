import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import RocketsListComponent from '../components/RocketsListComponent';
import NavBarComponent from '../components/NavBarComponent';
import LoaderComponent from '../components/LoaderComponent'

export default class Rockets extends Component {
  render() {
    return (
      <ListOfRockets />
    )
  }
}

const ROCKETS_QUERY = gql`
query RocketsQuery {
    rockets {
        rocket_id,
        rocket_name,
        country,
        flickr_images,
        description
    }
}`;

function ListOfRockets() {
  const { loading, error, data } = useQuery(ROCKETS_QUERY);
  if (loading) return <LoaderComponent />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <NavBarComponent />
      <>
        {data.rockets.map(rockets => (
          <RocketsListComponent key={rockets.rocket_id} rockets={rockets} />
        ))}
      </>
    </div>
  )
}