<template>
  <v-data-table
    class="elevation-1"
    item-key="id"
    :search="search"
    :sort-by="sortBy"
    :sort-desc="sortDesc"
    :headers="headers"
    :items="items"
    :items-per-page="5"
  >
    <!-- eslint-disable vue/no-v-html -->

    <template v-slot:top>
      <div>
        <v-text-field v-model="search" class="ml-2" label="Szukaj" style="width: 20%" />
      </div>
    </template>

    <template v-slot:item.actions="{ item }">
      <actions :object="item" :actions="actions" v-on="$listeners" />
    </template>
    <!--eslint-enable-->
  </v-data-table>
</template>

<script>
import { tryParseBoolean } from '@/utils';
import { tryParseInt } from '@/utils';
import Actions from './table/Actions';

/**
 * @vuese
 * @group Components/Material
 * Tabelka
 */
export default {
  props: {
    // Obiekty z polami `value` i `text`
    headers: {
      type: Array,
      required: true
    },
    // Lista obiektów do wyświetlenia w tabeli
    // Wyświetlane będą pola z `value` nagłówków
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
    // Czy wyświetlać kolumnę z akcjami
    actions: {
      type: Array,
      required: false
    },
    showAddButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: { Actions },
  data() {
    return {
      search: ''
    };
  }
};
</script>

<style scoped>
.data-table-word-break {
  white-space: normal;
  word-break: break-all;
}

.v-datatable td,
.v-datatable th {
  padding: 0 8px !important;
}
</style>
