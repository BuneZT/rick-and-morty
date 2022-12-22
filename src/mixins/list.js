import { mapState } from 'vuex';

import store from '@/store/store';
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
 * @param {string} messages.listNotFound - wiadomość w przypadku nie znalezienia listy
 * @returns {Object} mixin
 */
export function listMixin(moduleName, messages) {
  return {
    /**
     * Dane modułu
     *
     * @returns
     */
    data() {
      return { moduleName };
    },
    methods: {
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
      .catch(err =>
        store.dispatch('notifyError', {
          title: err.message.includes('404') ? messages.listNotFound : messages.listError
        })
      );
  }

  /**
   * Zwraca filtry do wyszukiwarki
   *
   * @param {*} route
   * @returns
   */
  function filters(route) {
    const page = tryParseInt(route.query.page) || 1;
    const filter = { ...route.query, page: undefined };
    return { filter, page };
  }
}
