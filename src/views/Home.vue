<template>
  <v-container>
    <v-layout wrap>
      <v-flex md6 offset-md3>
        <h1>{{ appTitle }}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    appTitle: state => state.system.appTitle
  })
};
</script>
