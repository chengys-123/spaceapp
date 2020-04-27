const { GraphQLObjectType, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
const axios = require('axios');

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLInt },
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    country: { type: GraphQLString },
    description: { type: GraphQLString },
    flickr_images: { type: GraphQLList(GraphQLString) },
    height: { type: Height },
    mass: { type: Mass },
    wikipedia: { type: GraphQLString },
    engines: { type: EngineType }
  })
});

const Height = new GraphQLObjectType({
  name: 'Height',
  fields: () => ({
    meters: { type: GraphQLFloat },
    feet: { type: GraphQLFloat }
  })
});

const Mass = new GraphQLObjectType({
  name: 'Mass',
  fields: () => ({
    kg: { type: GraphQLInt },
    lb: { type: GraphQLInt }
  })
});

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    rocket: { type: RocketType },
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_utc: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    links: { type: LinksType },
    details: { type: GraphQLString }
  })
});

const HistoryType = new GraphQLObjectType({
  name: 'History',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    event_date_utc: { type: GraphQLString },
    details: { type: GraphQLString },
    links: { type: LinksType }
  })
});

const LinksType = new GraphQLObjectType({
  name: 'Links',
  fields: () => ({
    reddit: { type: GraphQLString },
    reddit_media: { type: GraphQLString },
    article: { type: GraphQLString },
    article_link: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    mission_patch_small: { type: GraphQLString },
    video_link: { type: GraphQLString },
    flickr_images: { type: GraphQLList(GraphQLString) }
  })
});

const EngineType = new GraphQLObjectType({
  name: 'Engines',
  fields: () => ({
    number: { type: GraphQLInt },
    type: { type: GraphQLString },
    version: { type: GraphQLString },
    layout: { type: GraphQLString },
    propellant_1: { type: GraphQLString },
    propellant_2: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    rockets: {
      type: new GraphQLList(RocketType),
      resolve() {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets`)
          .then(
            res => res.data
          )
          .catch(err => {
            console.log("Error in generating response of rockets: ", err)
          })
      }
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
          .then(
            res => res.data
          )
          .catch(err => {
            console.log("Error in getting response of rocket: ", err)
          })
      }
    },
    launches: {
      type: new GraphQLList(LaunchType),
      resolve() {
        return axios
          .get(`https://api.spacexdata.com/v3/launches`)
          .then(
            res => res.data
          )
          .catch(err => {
            console.log("Error in generating response of launches: ", err)
          })
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/lauches/${args.flight_number}`)
          .then(
            res => res.data
          )
          .catch(err => {
            console.log("Error in generating response of launch: ", err)
          })
      }
    },
    histories: {
      type: new GraphQLList(HistoryType),
      resolve() {
        return axios
          .get('https://api.spacexdata.com/v3/history')
          .then(
            res => res.data
          )
          .catch(err => {
            console.log("Error in generating response of histories: ", err)
          })
      }
    },
    history: {
      type: HistoryType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/history/${args.id}`)
          .then(
            res => res.data
          )
          .catch(err => {
            console.log("Error in generating response of history: ", err)
          })
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
