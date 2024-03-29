<template>
  <div>
    <v-row>
      <v-col>
        <tabs :items="tabs" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <local-pagination-table
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

import LocalPaginationTable from '@/components/LocalPaginationTable';
import { REMOVE_FAVORITE } from '@/constants';
import { LocalStorage } from '@/enums/localStorage.enum';
import { listByIdsMixin } from '@/mixins/listByIds';
import store from '@/store/store';
import { findCharacterLastEpisodeName } from '@/utils';
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
  components: { LocalPaginationTable, Tabs },
  mixins: [
    listByIdsMixin('favoriteCharacter', {
      listError: 'An error occurred while downloading characters.',
      listNotFound: 'Characters not found'
    })
  ],
  data() {
    return {
      headers: [
        { text: 'Photo', value: 'image', sortable: false },
        { text: 'Character ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Species', value: 'species' },
        { text: 'Last episode', value: 'lastEpisode' },

        { text: 'Remove From Favorites', value: 'actions', sortable: false, align: 'center' }
      ],
      actions: [REMOVE_FAVORITE]
    };
  },
  computed: mapState({
    list: state =>
      state.favoriteCharacter.list.map(character => {
        character.lastEpisode = findCharacterLastEpisodeName(character);
        return character;
      })
  }),
  methods: {
    // @vuese
    // Otwiera dialog
    removeFromFavoriteDialog(object) {
      this.$store.dispatch('showConfirm', {
        title: 'Remove this character from your favorites?',
        description: '',
        onSuccess: () => this.removeFavorite(object.id)
      });
    },
    // @vuese
    // Usuwa z listy ulubionych
    removeFavorite(id) {
      const favorites = localStorage.getItem(LocalStorage.FAVORITE_CHARACTERS)?.split(',') || [];
      favorites.splice(favorites.indexOf(id.toString()), 1);
      localStorage.setItem(LocalStorage.FAVORITE_CHARACTERS, [...new Set(favorites)].join(','));
      store.dispatch('favoriteCharacter/remove', id);
    }
  }
};
</script>
