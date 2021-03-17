import ApolloClient from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

import { SessionStorage } from './enums/sessionStorage.enum';

Vue.use(VueApollo);

export const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_API_URL,
  request: async operation => {}
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;
