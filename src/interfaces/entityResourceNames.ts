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

  /**
   * Nazwa akcji do dodania encji
   *
   * @type {string}
   * @memberof EntityResourceNames
   */
  addMutationName?: string;

  /**
   * Nazwa akcji do aktualizacji encji
   *
   * @type {string}
   * @memberof EntityResourceNames
   */
  updateMutationName?: string;

  /**
   * Nazwa akcji do usunięcia encji
   *
   * @type {string}
   * @memberof EntityResourceNames
   */
  deleteMutationName?: string;
}
