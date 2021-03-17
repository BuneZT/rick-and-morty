import { Message } from '@/interfaces/message';

/**
 * Moduł notyfikacji
 *
 * @export
 * @class NotificationModule
 */
export class NotificationModule {
  /**
   * Domyślny stan modułu
   *
   * @private
   * @memberof NotificationModule
   */
  private defaultState = {
    show: false,
    current: {
      message: { title: '', messages: [] },
      color: ''
    }
  };

  /**
   * Stan modułu
   *
   * @memberof NotificationModule
   */
  public state = {
    ...this.defaultState,
    current: {
      ...this.defaultState.current
    },
    queue: []
  };

  public mutations = {
    /**
     * Ukrywa notyfikację
     *
     * @param localState stan lokalny
     */
    hideNotification: (localState: any): void => {
      localState.show = this.defaultState.show;
      localState.current = this.defaultState.current;
    },
    /**
     * Pokazuje notyfikację
     *
     * @param localState stan lokalny
     * @param message notyfikacja
     */
    showMessage(localState: any, message: Message): void {
      localState.current.message = message.message;
      localState.current.color = message.color || 'black';

      localState.show = true;
    },
    /**
     * Dodaje notyfikację do kolejki
     *
     * @param localState stan lokalny
     * @param message notyfikacja
     */
    addMessage(localState: any, message: Message): void {
      localState.queue.push(message);
    }
  };

  public actions = {
    /**
     * Wyświetla notyfikację o błędzie
     *
     * @param context context
     * @param text tekst notyfikacji
     */
    notifyError(context: any, msg: object): void {
      context.commit('addMessage', {  message: msg });
      if (!context.state.show) {
        context.dispatch('showNext');
      }
    },
    /**
     * Wyświetla wiadomośc o sukcesie
     * @param context context
     * @param text tekst notyfikacji
     */
    notifySuccess(context: any, msg: object): void {
      context.commit('addMessage', {  message: msg });
      if (!context.state.show) {
        context.dispatch('showNext');
      }
    },
    /**
     * Wyświetla notyfikację
     *
     * @param context context
     * @param obj notyfikacja
     */
    notify(context: any, obj: Message): void {
      context.commit('addMessage', obj);
      if (!context.state.show) {
        context.dispatch('showNext');
      }
    },
    /**
     * Ukrywa notyfikację
     *
     * @param context context
     */
    async hideNotification(context: any): Promise<void> {
      await context.commit('hideNotification');
      if (context.state.queue) {
        context.dispatch('showNext');
      }
    },
    /**
     * Pokazuje następną notyfikację
     *
     * @param context context
     */
    showNext(context: any): void {
      const next = context.getters.next(true);
      if (next) {
        context.commit('showMessage', next);
      }
    }
  };

  public getters = {
    /**
     * Pobiera liczbę notyfikacji w kolejce
     */
    countMessages: (localState: any): number => {
      return localState.queue.length;
    },
    /**
     * Pobiera następną notyfikację
     */
    next: (localState: any) => (get: boolean) => {
      return get ? localState.queue.shift() : undefined;
    }
  };
}

export default new NotificationModule();
