import { EntityInterface } from './entityInterface';

/**
 * Encja kart przyjęcia sprzętu komputerowego
 *
 *
 * @export
 * @interface Encja
 */
export interface Application extends EntityInterface {
  /**
   * Nazwa kienta
   *
   * @type {string}
   * @memberof Application
   */
  clientName: string;

  /**
   * Data
   *
   * @type {Date}
   * @memberof Application
   */
  admissionDate: Date;

  /**
   * Numer telefonu klienta
   *
   * @type {string}
   * @memberof Application
   */
  clientPhoneNumber?: string;

  /**
   * Adres e-mail klienta
   *
   * @type {string}
   * @memberof Application
   */
  clientEmail?: string;

  /**
   * Model komputera
   *
   * @type {string}
   * @memberof Application
   */
  computerModel: string;

  /**
   * Numer seryjny
   *
   * @type {string}
   * @memberof Application
   */
  serialNumber?: string;

  /**
   * Czy gwarancja
   *
   * @type {boolean}
   * @memberof Application
   */
  warranty?: boolean;

  /**
   * Opis usterki
   *
   * @type {string}
   * @memberof Application
   */
  faultDescription?: string;
}
