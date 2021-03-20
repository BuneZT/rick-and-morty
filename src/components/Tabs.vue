<template>
  <v-tabs v-model="activeTab">
    <v-tab v-for="(item, index) in items" :key="'tab_' + index" :to="{ name: item.routeName }">{{ item.name }}</v-tab>
  </v-tabs>
</template>

<script>
// @vuese
// Zakładki
// @group Compoents
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: this.$route.name
    };
  }
};
</script>
