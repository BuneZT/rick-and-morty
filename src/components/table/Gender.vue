<template>
  <span>
    <v-icon class="pb-2 gender-icon">{{ genderIcon }}</v-icon>
    {{ item.gender }}
  </span>
</template>

<script>
// @vuese
// Wyświetlanie płci w tabeli
// @group Table
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    genderIcon() {
      if (this.item.gender === 'Male') {
        return 'male';
      } else if (this.item.gender === 'Female') {
        return 'female';
      }
      return 'transgender';
    }
  }
};
</script>

<style>
.gender-icon {
  color: rgba(0, 0, 0, 0.38) !important;
}
</style>
