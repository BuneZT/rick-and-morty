<template>
  <v-row no-gutters>
    <v-col md="1" sm="12">
      <v-text-field class="rounded-l-lg" outlined label="SearchBy" disabled> </v-text-field>
    </v-col>

    <v-col md="2" sm="12">
      <v-select v-model="selectedType" outlined :items="items"> </v-select>
    </v-col>

    <v-col md="2" sm="12">
      <v-text-field v-model="search" class="rounded-r-lg" outlined append-icon="search"> </v-text-field>
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
    const querySearchValue = this.$route.query[this.selectedType];
    if (querySearchValue) {
      this.search = querySearchValue;
    }
  },
  watch: {
    search(value) {
      const nextRoute = {
        name: 'characters',
        params: this.$route.params,
        query: { [this.selectedType]: value }
      };
      this.$router.replace(nextRoute);
    }
  }
};
</script>
