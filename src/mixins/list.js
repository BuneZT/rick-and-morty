import { mapState } from 'vuex';

import store from '@/store/store';
import { notificationsMixin } from './notifications';
import { tryParseInt } from '@/utils';

/**
 * Mixin listy encji
 * Zawiera pola:
 *  - `list` - lista encji
 *  - `count` - liczba encji
 *  - `idToDelete` - identyfikator obiektu do usunięcia
 * Zawiera metody:
 *  - `showDeleteDialog(id)` - wyświetla potwierdzenie usunięcia
 *  - `hideDeleteDialog()` - ukrywa potwierdzenie usunięcia
 *  - `remove(id)` - usuwa encję
 *  - `reloadList(pagination)` - przeładowuje listę
 * Pobiera listę encji przed załadowaniem komponentu
 *
 * @export
 * @param {*} moduleName - nazwa modułu store
 * @param {Object} messages - obiekt z wiadomościami do wyświetlenia po wykonaniu akcji i w przypadku niepowodzenia
 * @param {string} messages.added - wiadomość po dodaniu encji
 * @param {string} messages.addError - wiadomość w przypadku niepowodzenia przy dodawaniu encji
 * @param {string} messages.updated - wiadomość po aktualizacji encji
 * @param {string} messages.updateError - wiadomość w przypadku niepowodzenia przy aktualizacji encji
 * @param {string} messages.deleteConfirm - wiadomość potwierdzenia usunięcia
 * @param {string} messages.deleted - wiadomość po usunięciu encji
 * @param {string} messages.deleteError - wiadomość w przypadku niepowodzenia przy usuwaniu encji
 * @param {string} messages.listError - wiadomość w przypadku niepowodzenia przy pobieraniu listy
 * @param {string} messages.getError - wiadomość w przypadku niepowodzenia przy pobieraniu encji
 * @returns {Object} mixin
 */
export function listMixin(moduleName, messages, count = 10) {
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
      },

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
    const { page, search, order, desc } = route.query;
    const start = (tryParseInt(page) - 1) * count;
    return { start, count, search, order, desc: desc === 'true' || desc === true };
  }
}
