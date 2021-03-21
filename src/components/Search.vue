<template>
  <v-row no-gutters>
    <v-col md="1" sm="12" class="mt-5">
      <v-text-field class="rounded-l-lg rounded-r-0" outlined label="Search By" disabled> </v-text-field>
    </v-col>

    <v-col md="2" sm="12" class="mt-5">
      <v-select v-model="selectedType" class="rounded-0" tiled outlined :items="items" />
    </v-col>

    <v-col md="2" sm="12" class="mt-5">
      <v-text-field v-model="search" class="rounded-r-lg rounded-l-0" outlined append-icon="search"> </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
// @vuese
// Wyszukiwarka
// @group Components
export default {
  data() {
    return {
      selectedType: 'name',
      search: '',
      items: [
        { text: 'Name', value: 'name' },
        { text: 'Species', value: 'species' }
      ]
    };
  },
  created() {
    for (const item of this.items) {
      if (this.$route.query[item.value]) {
        this.search = this.$route.query[item.value];
        this.selectedType = item.value;
        return;
      }
    }
  },

  watch: {
    search(value) {
      if (this.$route.name === 'charactersFavorite' && !value) {
        return;
      }
      const nextRoute = {
        name: 'characters',
        params: this.$route.params,
        query: { [this.selectedType]: value }
      };
      this.$router.replace(nextRoute);
    },
    $route(to, from) {
      if (to.name === 'charactersFavorite') {
        this.search = '';
      }
    }
  }
};
</script>
