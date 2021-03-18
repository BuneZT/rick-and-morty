import { Info } from './info';

/**
 * Interfejs odpowiedzi serwera zawierjącej listy
 *
 * @export
 * @interface ListResponse
 * @template T
 */
export interface ListResponse<T> {
  /**
   * Lista elementów
   *
   * @type {T[]}
   * @memberof ListResponse
   */
  results: T[];

  /**
   * Informacje o liście
   *
   * @type {number}
   * @memberof ListResponse
   */
  info: Info;
}
