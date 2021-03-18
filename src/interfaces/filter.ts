/**
 * Interfejs bazowy filtrów
 *
 * @export
 * @interface Filter
 */
export interface Filter {
  /**
   * Strona
   *
   * @type {number}
   * @memberof Filter
   */
  page?: number;

  /**
   * Filtry
   *
   * @type {number}
   * @memberof Filter
   */
  filter?: any;
}
