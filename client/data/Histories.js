import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import HistoriesList from '../components/HistoryListComponent';
import NavBarComponent from '../components/NavBarComponent';
import LoaderComponent from '../components/LoaderComponent'

export default class Histories extends Component {
  render() {
    return (
      <ListOfHistories />
    )
  }
}

const HISTORIES_QUERY = gql`
query HistoriesQuery {
    histories {
        id
        title
        event_date_utc,
        details,
        links {
          reddit, 
          article,
          wikipedia
        }
    }
}
`;

function ListOfHistories() {
  const { loading, error, data } = useQuery(HISTORIES_QUERY);
  if (loading) return <LoaderComponent />;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <NavBarComponent />
      <>
        {data.histories.map(histories => (
          <HistoriesList key={histories.id} histories={histories} />
        ))}
      </>
    </div>
  )
}
