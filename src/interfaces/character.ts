import { EntityInterface } from './entityInterface';
import { Episode } from './episode';

/**
 *  Postać
 *
 * @export
 * @interface Character
 */
export interface Character extends EntityInterface {
  /**
   * Nazwa
   *
   * @type {string}
   * @memberof Character
   */
  name?: string;

  /**
   * Status
   *
   * @type {string}
   * @memberof Character
   */
  status?: string;

  /**
   * Rasa
   *
   * @type {string}
   * @memberof Character
   */
  species?: string;

  /**
   * Typ rasy
   *
   * @type {string}
   * @memberof Character
   */
  type?: string;

  /**
   * Płeć
   *
   * @type {string}
   * @memberof Character
   */
  gender?: string;

  /**
   * Obrazek
   *
   * @type {string}
   * @memberof Character
   */
  image?: string;

  /**
   * Odcinki w których się pojawił
   *
   * @type {Episode[]}
   * @memberof Character
   */
  episode?: Episode[];
}
