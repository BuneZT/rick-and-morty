/**
 * Interfejs konstruktora AbstractResource
 *
 * @export
 * @interface AbstractResourceNames
 */
export interface AbstractResourceNames {
  /**
   * Nazwa akcji do pobrania pojedynczej encji
   *
   * @type {string}
   * @memberof AbstractResourceNames
   */
  entityName: string;

  /**
   * Nazwa akcji do pobrania listy encji
   *
   * @type {string}
   * @memberof AbstractResourceNames
   */
  listName?: string;

  /**
   * Nazwa filtru listy
   *
   * @type {string}
   * @memberof AbstractResourceNames
   */
  filterName?: string;

  /**
   * Nazwa listy filtrującej po id
   *
   * @type {string}
   * @memberof AbstractResourceNames
   */
  listByIdsName?: string;
}
