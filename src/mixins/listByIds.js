import { mapState } from 'vuex';

import store from '@/store/store';

/**
 * Mixin listy encji po id
 * Zawiera pola:
 *  - `list` - lista encji
 *  - `count` - liczba encji
 * Pobiera listę encji przed załadowaniem komponentu
 *
 * @export
 * @param {*} moduleName - nazwa modułu store
 * @param {Object} messages - obiekt z wiadomościami do wyświetlenia po wykonaniu akcji i w przypadku niepowodzenia
 * @returns {Object} mixin
 */
export function listByIdsMixin(moduleName, messages) {
  return {
    /**
     * Dane modułu
     *
     * @returns
     */
    data() {
      return { moduleName };
    },

    computed: {
      ...mapState({
        list: state => state[moduleName].list,
        count: state => state[moduleName].count
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
      .dispatch(`${moduleName}/listByIds`, ids)
      .then(() => next())
      .catch(err =>
        store.dispatch('notifyError', {
          title: err.message.includes('404') ? messages.listNotFound : messages.listError
        })
      );
  }
}
