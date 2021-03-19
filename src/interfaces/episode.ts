import { Character } from './character';
import { EntityInterface } from './entityInterface';

/**
 *  Odcinek
 *
 * @export
 * @interface Episode
 */
export interface Episode extends EntityInterface {
  /**
   * Nazwa
   *
   * @type {string}
   * @memberof Episode
   */
  name?: string;

  /**
   * Data emisji
   *
   * @type {string}
   * @memberof Episode
   */
  air_date?: string;

  /**
   * Kod epizodu
   *
   * @type {string}
   * @memberof Episode
   */
  episode?: string;

  /**
   * Postacie
   *
   * @type {Character[]}
   * @memberof Episode
   */
  characters?: Character[];
}
