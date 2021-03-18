/**
 * Interfejs stanu modułu encji
 *
 * @export
 * @interface EntityModuleState
 * @template EntityType
 */
export interface EntityModuleState<EntityType> {
  /**
   * Lista encji
   *
   * @type {EntityType[]}
   * @memberof EntityModuleState
   */
  list: EntityType[];

  /**
   * Liczba encji
   *
   * @type {number}
   * @memberof EntityModuleState
   */
  count: number;

  /**
   * Liczba stron
   *
   * @type {number}
   * @memberof EntityModuleState
   */
  pages: number;
}
