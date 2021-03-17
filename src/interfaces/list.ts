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
  list: T[];

  /**
   * Całkowita liczba znalezionych elementów
   *
   * @type {number}
   * @memberof ListResponse
   */
  count: number;
}
