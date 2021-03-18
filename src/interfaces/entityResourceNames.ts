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
   * Nazwa akcji do pobrania listy encji
   *
   * @type {string}
   * @memberof EntityResourceNames
   */
  listName?: string;
}
