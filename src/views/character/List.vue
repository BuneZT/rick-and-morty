<template>
  <component-table :items="list" :headers="headers" :actions="actions" :pageCount="pages" />
</template>

<script>
import ComponentTable from '@/components/Table';
import { listMixin } from '@/mixins/list';
import { DEFAULT_TABLE_ACTIONS } from '@/constants';

export default {
  components: { ComponentTable },
  mixins: [
    listMixin('character', {
      listError: 'An error occurred while downloading characters.',
      listNotFound: 'Character not found'
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
