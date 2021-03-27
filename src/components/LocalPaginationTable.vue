<template>
  <div>
    <v-data-table
      class="elevation-0"
      item-key="id"
      hide-default-footer
      :page.sync="page"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      :headers="headers"
      :items="items"
      :items-per-page="itemsPerPage"
    >
      <template v-slot:item.actions="{ item }">
        <actions :object="item" :actions="actions" v-on="$listeners" />
      </template>

      <template v-slot:item.gender="{ item }">
        <gender :item="item" />
      </template>

      <template v-slot:item.image="{ item }">
        <image-display :item="item" />
      </template>
    </v-data-table>

    <div v-if="items.length" class="pt-2">
      <v-pagination v-model="page" :total-visible="6" :length="pageCount" />
    </div>
  </div>
</template>

<script>
import { tryParseInt } from '@/utils';
import Actions from './table/Actions';
import Gender from './table/Gender';
import ImageDisplay from './table/ImageDisplay.vue';

// @vuese
// Tabela oparta o lokalną paginację
// @group Components
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    sortBy: {
      type: Array,
      required: false
    },
    sortDesc: {
      type: Array,
      required: false
    },
    actions: {
      type: Array,
      required: false
    },
    itemsPerPage: {
      type: Number,
      default: 20
    }
  },
  components: { Actions, Gender, ImageDisplay },
  data() {
    return {
      page: tryParseInt(this.$route.query.page) || 1
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  }
};
</script>
