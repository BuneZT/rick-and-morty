<template>
  <v-app>
    <v-main app>
      <v-fade-transition mode="out-in">
        <v-container>
          <layout-header />

          <layout-body />
        </v-container>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<script>
import LayoutBody from './components/layout/Body.vue';
import LayoutHeader from './components/layout/Header.vue';

export default {
  components: {
    LayoutHeader,
    LayoutBody
  }
};
</script>
