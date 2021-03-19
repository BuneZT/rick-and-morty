<template>
  <div>
    <v-row>
      <v-col>
        <tabs :items="tabs" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <component-table :items="list" :headers="headers" :actions="actions" :pageCount="pages" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ComponentTable from '@/components/Table';
import { DEFAULT_TABLE_ACTIONS } from '@/constants';
import { listMixin } from '@/mixins/list';
import Tabs from '../../components/Tabs.vue';

// @vuese
// Zakładki
// @group Character
export default {
  props: {
    tabs: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  components: { ComponentTable, Tabs },
  mixins: [
    listMixin('character', {
      listError: 'An error occurred while downloading characters.',
      listNotFound: 'Characters not found'
    })
  ],
  data() {
    return {
      headers: [
        { text: 'Character ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Species', value: 'species' }
      ],
      actions: DEFAULT_TABLE_ACTIONS
    };
  }
};
</script>
