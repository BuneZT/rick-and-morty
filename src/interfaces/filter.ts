/**
 * Interfejs bazowy filtrów
 *
 * @export
 * @interface Filter
 */
export interface Filter {
  /**
   * Liczba elementów do pobrania
   *
   * @type {number}
   * @memberof Filter
   */
  count?: number;

  /**
   * Pierwszy element do pobrania
   *
   * @type {number}
   * @memberof Filter
   */
  start?: number;

  /**
   * Wyszukiwana fraza
   *
   * @type {string}
   * @memberof Filter
   */
  search?: string;

  /**
   * Pole po którym dane mają być sortowane
   *
   * @type {string}
   * @memberof Filter
   */
  order?: string;

  /**
   * Czy sortować malejąco
   *
   * @type {boolean}
   * @memberof Filter
   */
  desc?: boolean;
}
