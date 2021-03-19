<template>
  <v-row>
    <v-col>
      <v-select v-model="selectedType" outlined :items="items" />
    </v-col>

    <v-col>
      <v-text-field v-model="search" outlined append-icon="search" />
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
