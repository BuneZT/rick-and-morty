import { EntityResourceNames } from '@/interfaces/entityResourceNames';
import { Filter } from '@/interfaces/filter';
import { ListResponse } from '@/interfaces/list';
import { VariableType } from 'json-to-graphql-query';
import { StateFilterArgs, StateFilterVariables } from './queryVariables/filters';
import { Resource } from './resource';

/**
 * Abstrakcyjny resource do obsługi encji
 *
 * @export
 * @abstract
 * @class EntityResource
 * @extends {Resource}
 * @template EntityType
 */
export abstract class EntityResource<EntityType> extends Resource {
  protected entityName: string;

  /**
   * Nazwa zapytania o listę
   *
   * @protected
   * @type {string}
   * @memberof EntityResource
   */
  protected listQueryName: string;

  /**
   * Zmienne zapytania o listę
   *
   * @protected
   * @memberof EntityResource
   */
  protected listVariables: any = StateFilterVariables;

  /**
   * Argumenty zapytania o listę
   *
   * @protected
   * @memberof EntityResource
   */
  protected listArgs: any = StateFilterArgs;

  /**
   * Pola zapytania o listę
   *
   * @protected
   * @abstract
   * @type {*}
   * @memberof EntityResource
   */
  protected abstract listFields: any;

  /**
   * Pobranie listy encji
   *
   * @param {Filter} filters
   * @param {boolean} [preventLoader=false]
   * @returns {Promise<ListResponse<EntityType>>}
   * @memberof EntityResource
   */
  public list(filters: Filter, preventLoader = false): Promise<ListResponse<EntityType>> {
    const query = this.prepareOptions({
      query: {
        __variables: this.listVariables,
        [this.listQueryName]: {
          __args: this.listArgs,
          results: this.listFields,
          info: {
            count: true,
            pages: true,
            next: true,
            prev: true
          }
        }
      }
    });
    return this.query({ query, variables: { filters } }, this.listQueryName, preventLoader);
  }

  constructor({ entityName, listName = entityName + 's' }: EntityResourceNames) {
    super();
    this.entityName = entityName;
    this.listQueryName = listName;
    this.listArgs = { page: new VariableType('page') };
    this.listVariables = {
      page: 'Int'
    };
  }
}
