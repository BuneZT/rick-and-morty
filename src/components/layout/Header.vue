<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="margin-top:auto" sm="12" md="2">
        <v-img :src="imgSrc" />
      </v-col>

      <v-col>
        <search />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from '../Search.vue';

// @vuese
// Header strony z nagłówkiem i wyszukiwarką
// @group MainLayout
export default {
  components: {
    Search
  },
  data() {
    return {
      imgSrc: '/img/logo.png'
    };
  }
};
</script>
