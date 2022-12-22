<template>
  <v-img class="my-3" :class="{ 'dead-filter': isDead }" max-width="50" :src="item.image" />
</template>

<script>
// @vuese
// Wyświetlanie zdjęćia w tabeli
// @group Table
import { CharacterStatusEnum } from '@/enums/characterStatus.enum';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isDead() {
      return this.item.status === CharacterStatusEnum.DEAD;
    },

  }
};
</script>

<style>
.dead-filter {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
