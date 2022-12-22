/**
 * Interfejs stanu modułu encji
 *
 * @export
 * @interface AbstractModuleState
 * @template EntityType
 */
export interface AbstractModuleState<EntityType> {
  /**
   * Lista encji
   *
   * @type {EntityType[]}
   * @memberof AbstractModuleState
   */
  list: EntityType[];

  /**
   * Liczba encji
   *
   * @type {number}
   * @memberof AbstractModuleState
   */
  count: number;

  /**
   * Liczba stron
   *
   * @type {number}
   * @memberof AbstractModuleState
   */
  pages: number;

  /**
   * Idki encji do pobrania
   *
   * @type {number[]}
   * @memberof AbstractModuleState
   */
  ids: number[];
}
