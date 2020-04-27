import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from 'react-apollo';
import LoaderComponent from '../components/LoaderComponent'

export default class RocketDetail extends Component {
  render() {
    return (
      <Rocket />
    )
  }
}

const ROCKET_QUERY = gql`
query RocketQuery($rocket_id: String!){
    rocket(rocket_id: $rocket_id) {
        id,
        rocket_id,
        rocket_name,
        rocket_type,
        description,
        flickr_images,
        wikipedia,
        height {
          feet,
          meters
        },
        mass {
          kg, 
          lb
        },
        engines {
          number,
          type,
          version,
          layout,
          propellant_1,
          propellant_2
        }
    }
}
`;

function Rocket() {

  const router = useRouter()
  let rocket_id = router.query;
  const { loading, error, data } = useQuery(ROCKET_QUERY, {
    variables: rocket_id
  });

  if (loading) return <LoaderComponent />;
  if (error) return `Error! ${error.message}`;

  const { description,
    flickr_images,
    wikipedia,
    height: { feet, meters },
    mass: { kg, lb },
    engines: { number, type, version, layout, propellant_1, propellant_2 } } = data.rocket;

  return (
    <div>
      <div className="lead">
        <p>{description} </p>
        <p>Navigate to wikipedia for even more information: <a href={wikipedia}>{wikipedia}</a></p>
      </div>
      <img src={flickr_images}></img>
      <div className="rows">
        <div className="card-header-title is-centered">
          <h3 className="title-is-4"> Rocket Attributes</h3>
        </div>
        <div className="columns">
          <div className="column">
            <p className="card-header-title is-centered">HEIGHT</p>
          </div>
          <div className="column">
            <p className="lead">Meters: {meters} m</p>
          </div>
          <div className="column">
            <p className="lead">Feet: {feet} inches</p>
          </div>
        </div>
        <p></p>
        <div className="columns">
          <div className="column column-1">
            <p className="card-header-title is-centered">MASS</p>
          </div>
          <div className="column">
            <p className="lead">Kilogram: {kg} kg</p>
          </div>
          <div className="column">
            <p className="lead">Lb: {lb} lb</p>
          </div>
        </div>
        <div className="column border-gradient">
          <div className="card-header-title is-centered">ROCKET ENGINE</div>
          <div className="lead"> Number: {number} </div>
          <div className="lead"> Type: {type},  version: {version} </div>
          <div className="lead"> Engine layout: {layout} </div>
          <div className="lead"> Engine propellants: {propellant_1}, {propellant_2} </div>
        </div>
      </div>
    </div>
  )
}
