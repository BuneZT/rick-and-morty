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
import { mapState } from 'vuex';

import ComponentTable from '@/components/Table';
import { REMOVE_FAVORITE } from '@/constants';
import { listByIdsMixin } from '@/mixins/listByIds';
import { getFavorites } from '@/utils';
import Tabs from '../../components/Tabs.vue';

// @vuese
// Ulubione postacie
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
    listByIdsMixin(
      'character/favorites',
      {
        listError: 'An error occurred while downloading characters.',
        listNotFound: 'Characters not found'
      },
      getFavorites()
    )
  ],
  data() {
    return {
      headers: [
        { text: 'Character ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Species', value: 'species' },
        { text: 'Add To Favorites', value: 'actions', sortable: false }
      ],
      actions: [REMOVE_FAVORITE]
    };
  },
  computed: mapState({
    list: state => state.character.favorites.list,
    count: state => state.character.favorites.count
  })
};
</script>
