/**
 * Interfejs konstruktora EntityResource
 *
 * @export
 * @interface EntityResourceNames
 */
export interface EntityResourceNames {
  /**
   * Nazwa akcji do pobrania pojedynczej encji
   *
   * @type {string}
   * @memberof EntityResourceNames
   */
  entityName: string;

  /**
   * Filtry listy
   *
   * @type {object}
   * @memberof EntityResourceNames
   */
  filterVariables: object;

  /**
   * Nazwa akcji do pobrania listy encji
   *
   * @type {string}
   * @memberof EntityResourceNames
   */
  listName?: string;

  /**
   * Nazwa filtru listy
   *
   * @type {string}
   * @memberof EntityResourceNames
   */
  filterName?: string;
}
