/**
 * Mixin notyfikacji
 * Zawiera metody:
 *  - `notifySuccess(message)` - wyświetla powiadomienie o sukcesie
 *  - `notifyError(message)` - wyświetla powiadomienie o błędzie
 */
export const notificationsMixin = {
  methods: {
    /**
     * Wyświetla notyfikację o sukcesie
     *
     * @param {*} title
     * @param {*} messages
     */
    notifySuccess (title, messages) {
      this.$store.dispatch('notifySuccess', { title, messages })
    },

    /**
     * Wyświetla notyfikację o błędzie
     *
     * @param {*} title
     * @param {*} messages
     */
    notifyError (title, messages) {
      this.$store.dispatch('notifyError', { title, messages })
    }
  }
}
