import { mapState } from 'vuex';

import store from '@/store/store';
import { notificationsMixin } from './notifications';
import { tryParseInt } from '@/utils';

/**
 * Mixin listy encji
 * Zawiera pola:
 *  - `list` - lista encji
 *  - `count` - liczba encji
 * Pobiera listę encji przed załadowaniem komponentu
 *
 * @export
 * @param {*} moduleName - nazwa modułu store
 * @param {Object} messages - obiekt z wiadomościami do wyświetlenia po wykonaniu akcji i w przypadku niepowodzenia
 * @param {string} messages.listError - wiadomość w przypadku niepowodzenia przy pobieraniu listy
 * @returns {Object} mixin
 */
export function listMixin(moduleName, messages) {
  return {
    mixins: [notificationsMixin],
    /**
     * Dane modułu
     *
     * @returns
     */
    data() {
      return { moduleName };
    },
    methods: {
      /**
       * Otwiera okienko z potwierdzeniem usunięcia
       *
       * @param {*} id
       */
      showDeleteDialog(object) {
        this.$store.dispatch('showConfirm', {
          title: 'Potwierdź usunięcie',
          description: '',
          onSuccess: () => this.remove(object.id)
        });
      },

      /**
       * Usuwa encję
       *
       * @param {*} id
       */
      remove(id) {
        this.$store
          .dispatch(`${moduleName}/remove`, id)
          .then(() => this.notifySuccess(messages.deleted))
          .catch(err => this.notifyError(messages.deleteError));
      },

      /**
       * Przeładowuje listę
       *
       * @param {*} pagination
       */
      reloadList(pagination) {
        this.$store
          .dispatch(`${moduleName}/list`, pagination)
          .catch(err => store.dispatch('notifyError', { title: messages.listError }));
      }
    },
    computed: {
      ...mapState({
        list: state => state[moduleName].list,
        count: state => state[moduleName].count,
        pages: state => state[moduleName].pages
      })
    },
    beforeRouteEnter: getList,
    beforeRouteUpdate: getList
  };

  /**
   * Pobiera listę
   *
   * @param {*} to
   * @param {*} from
   * @param {*} next
   */
  function getList(to, from, next) {
    store
      .dispatch(`${moduleName}/list`, filters(to))
      .then(() => next())
      .catch(err => store.dispatch('notifyError', { title: messages.listError }));
  }

  /**
   * Zwraca filtry do wyszukiwarki
   *
   * @param {*} route
   * @returns
   */
  function filters(route) {
    const { page } = route.query;
    return { page: tryParseInt(page) || 1 };
  }
}
