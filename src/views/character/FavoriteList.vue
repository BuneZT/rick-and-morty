<template>
  <div>
    <v-row>
      <v-col>
        <tabs :items="tabs" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <component-local-pagination-table
          :items="list"
          :headers="headers"
          :actions="actions"
          @removeFavorite="removeFromFavoriteDialog"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ComponentLocalPaginationTable from '@/components/LocalPaginationTable';
import { REMOVE_FAVORITE } from '@/constants';
import { listByIdsMixin } from '@/mixins/listByIds';
import store from '@/store/store';
import { getFavorites } from '@/utils';
import Tabs from '../../components/Tabs.vue';
import { SessionStorage } from '../../enums/sessionStorage.enum';

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
  components: { ComponentLocalPaginationTable, Tabs },
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
        { text: 'Remove From Favorites', value: 'actions', sortable: false }
      ],
      actions: [REMOVE_FAVORITE]
    };
  },
  computed: mapState({
    list: state => state.character.favorites.list,
    count: state => state.character.favorites.count
  }),
  methods: {
    // @vuese
    // Otwiera dialog
    removeFromFavoriteDialog(object) {
      this.$store.dispatch('showConfirm', {
        title: 'Add this character to your favorites?',
        description: '',
        onSuccess: () => this.removeFavorite(object.id)
      });
    },
    // @vuese
    // Usuwa z listy ulubionych
    removeFavorite(id) {
      const favorites = localStorage.getItem(SessionStorage.FAVORITE_CHARACTERS)?.split(',') || [];
      favorites.splice(favorites.indexOf(id.toString()), 1);
      localStorage.setItem(SessionStorage.FAVORITE_CHARACTERS, [...new Set(favorites)].join(','));
      store.dispatch('character/favorites/remove', id);
    }
  }
};
</script>
