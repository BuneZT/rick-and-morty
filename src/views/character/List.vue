<template>
  <div>
    <v-row>
      <v-col>
        <tabs :items="tabs" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <component-table
          :items="list"
          :headers="headers"
          :actions="actions"
          :pageCount="pages"
          @addFavorite="addFavoriteDialog"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ComponentTable from '@/components/Table';
import { ADD_FAVORITE } from '@/constants';
import { listMixin } from '@/mixins/list';
import { findCharacterLastEpisodeName } from '@/utils';
import Tabs from '../../components/Tabs.vue';
import { LocalStorage } from '../../enums/localStorage.enum';

// @vuese
// Lista postaci
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
        { text: 'Photo', value: 'image', sortable: false },
        { text: 'Character ID', value: 'id', sortable: false },
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Gender', value: 'gender', sortable: false },
        { text: 'Species', value: 'species', sortable: false },
        { text: 'Last episode', value: 'lastEpisode', sortable: false },

        { text: 'Add To Favorites', value: 'actions', sortable: false }
      ],
      actions: [ADD_FAVORITE]
    };
  },
  computed: mapState({
    list: state =>
      state.character.list.map(character => {
        character.lastEpisode = findCharacterLastEpisodeName(character);
        return character;
      })
  }),
  methods: {
    // @vuese
    // Otwiera dialog
    addFavoriteDialog(object) {
      this.$store.dispatch('showConfirm', {
        title: 'Add this character to your favorites?',
        description: '',
        onSuccess: () => this.addFavorite(object.id)
      });
    },
    // @vuese
    // Dodaje do listy ulubionych
    addFavorite(id) {
      const favorites = localStorage.getItem(LocalStorage.FAVORITE_CHARACTERS)?.split(',') || [];
      favorites.push(id.toString());
      localStorage.setItem(LocalStorage.FAVORITE_CHARACTERS, [...new Set(favorites)].join(','));
    }
  }
};
</script>
