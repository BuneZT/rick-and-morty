import { NotifyMessage } from './notifyMessage';

/**
 * Wiadomość do notyfikacji
 *
 * @export
 * @interface Message
 */
export interface Message {
  /**
   * Kolor okienka notyfikacji
   *
   * @type {string}
   * @memberof Message
   */
  color: string;
  /**
   * Treść notyfikacji
   *
   * @type {NotifyMessage}
   * @memberof Message
   */
  message: NotifyMessage;
}
