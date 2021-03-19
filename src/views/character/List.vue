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
          @addFavorite="addFavorite"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ComponentTable from '@/components/Table';
import { ADD_FAVORITE } from '@/constants';
import { listMixin } from '@/mixins/list';
import Tabs from '../../components/Tabs.vue';
import { SessionStorage } from '../../enums/sessionStorage.enum';

// @vuese
// Lista bohaterów
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
        { text: 'Character ID', value: 'id', sortable: false },
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Gender', value: 'gender', sortable: false },
        { text: 'Species', value: 'species', sortable: false },
        { text: 'Add To Favorites', value: 'actions', sortable: false }
      ],
      actions: [ADD_FAVORITE]
    };
  },
  methods: {
    // @vuese
    // Dodaje do listy ulubionych
    addFavorite(objcet) {
      const favorites = localStorage.getItem(SessionStorage.FAVORITE_CHARACTERS)?.split(',') || [];
      favorites.push(objcet.id.toString());
      localStorage.setItem(SessionStorage.FAVORITE_CHARACTERS, [...new Set(favorites)].join(','));
    }
  }
};
</script>
