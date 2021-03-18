<template>
  <v-app>
    <layout-header />
    <layout-body />
  </v-app>
</template>
<script>
import LayoutHeader from './components/layout/Header.vue';
import LayoutBody from './components/layout/Body.vue';

export default {
  components: {
    LayoutHeader,
    LayoutBody
  }
};
</script>
