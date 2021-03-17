<template>
  <v-app>
    <layout-header />
    <layout-body />
    <layout-footer />
  </v-app>
</template>
<script>
import LayoutHeader from './components/layout/Header.vue';
import LayoutBody from './components/layout/Body.vue';
import LayoutFooter from './components/layout/Footer.vue';

export default {
  components: {
    LayoutHeader,
    LayoutBody,
    LayoutFooter
  }
};
</script>
