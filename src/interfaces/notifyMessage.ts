/**
 * Notyfikacja
 *
 * @export
 * @interface NotifyMessage
 */
export interface NotifyMessage {
  /**
   * Tytuł notyfikacji
   *
   * @type {string}
   * @memberof NotifyMessage
   */
  title: string;
  /**
   * Tablica dodatkowych komunikatów
   *
   * @type {string[]}
   * @memberof NotifyMessage
   */
  messages?: string[];
}
