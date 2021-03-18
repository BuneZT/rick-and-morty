/**
 *  Informacje listy
 *
 * @export
 * @interface
 */
export interface Info {
  /**
   * Ilość encji
   *
   * @type {number}
   * @memberof Info
   */
  count?: number;

  /**
   * Ilość stron
   *
   * @type {number}
   * @memberof Info
   */
  pages?: number;

  /**
   * Następna strona
   *
   * @type {number}
   * @memberof Info
   */
  next?: number;

  /**
   * Poprzednia strona
   *
   * @type {number}
   * @memberof Info
   */
  prev?: number;
}
