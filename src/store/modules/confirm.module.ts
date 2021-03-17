/**
 * Moduł do zarządzania potwierdzaniem
 *
 * @export
 * @class ConfirmModule
 */
export class ConfirmModule {
  /**
   * Domyślny stan modułu
   *
   * @private
   * @memberof ConfirmModule
   */
  private defaultState = {
    confirm: undefined
  };

  /**
   * Stan modułu
   *
   * @memberof ConfirmModule
   */
  public state = {
    ...this.defaultState
  };

  public mutations = {
    showConfirm(localState: any, payload: any) {
      if (payload.closeButton === undefined) {
        payload.closeButton = 'Tak';
      }
      if (payload.submitButton === undefined) {
        payload.submitButton = 'Nie';
      }
      localState.confirm = payload;
    }
  };

  public actions = {
    showConfirm(context: any, value: any) {
      context.commit('showConfirm', value);
    }
  };

  public getters = {};
}

export default new ConfirmModule();
