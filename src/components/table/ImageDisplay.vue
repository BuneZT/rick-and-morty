<template>
  <v-img class="my-3" :aspect-ratio="aspectRatio" :class="{ 'dead-filter': isDead }" max-width="50" :src="item.image" />
</template>

<script>
// @vuese
// Wyświetlanie zdjęćia w tabeli
// @group Table
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isDead() {
      return this.item.status === 'Dead';
    },
    aspectRatio() {
      return window.innerWidth < 600 ? undefined : 3 / 4;
    }
  }
};
</script>

<style>
.dead-filter {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
