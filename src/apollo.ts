import ApolloClient from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

export const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_API_URL,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;
