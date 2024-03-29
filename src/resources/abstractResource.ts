import { AbstractResourceNames } from '@/interfaces/entityResourceNames';
import { Filter } from '@/interfaces/filter';
import { ListResponse } from '@/interfaces/list';
import { VariableType } from 'json-to-graphql-query';
import { FilterArgs } from './queryVariables/filters';
import { Resource } from './resource';

/**
 * Abstrakcyjny resource do obsługi encji
 *
 * @export
 * @abstract
 * @class AbstractResource
 * @extends {Resource}
 * @template EntityType
 */
export abstract class AbstractResource<EntityType> extends Resource {
  protected entityName: string;

  /**
   * Nazwa zapytania o listę
   *
   * @protected
   * @type {string}
   * @memberof AbstractResource
   */
  protected listQueryName: string;

  /**
   * Zmienne zapytania o listę
   *
   * @protected
   * @memberof AbstractResource
   */
  protected listVariables: any;

  /**
   * Argumenty zapytania o listę
   *
   * @protected
   * @memberof AbstractResource
   */
  protected listArgs: any = FilterArgs;

  /**
   * Nazwa zapytania o listę po id
   *
   * @protected
   * @type {*}
   * @memberof AbstractResource
   */
  protected listByIdsName: any;

  /**
   * Pola zapytania o listę
   *
   * @protected
   * @abstract
   * @type {*}
   * @memberof AbstractResource
   */
  protected abstract listFields: any;

  protected constructor({
                          entityName,
                          listName = entityName + 's',
                          listByIdsName = entityName + 'sByIds',
                          filterName,
                        }: AbstractResourceNames) {
    super();
    this.entityName = entityName;
    this.listQueryName = listName;
    this.listByIdsName = listByIdsName;
    this.listVariables = {
      page: 'Int',
      filter: filterName || `Filter${entityName.charAt(0).toUpperCase() + entityName.substr(1)}`,
    };
  }

  /**
   * Pobranie listy encji
   *
   * @param {Filter} filters
   * @param {boolean} [preventLoader=false]
   * @returns {Promise<ListResponse<EntityType>>}
   * @memberof AbstractResource
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
            prev: true,
          },
        },
      },
    });
    return this.query({ query, variables: { ...filters } }, this.listQueryName, preventLoader);
  }

  /**
   * Pobiera liste encji po id
   *
   * @param {number[]} ids
   * @param {boolean} [preventLoader=false]
   * @return {*}  {Promise<EntityType[]>}
   * @memberof AbstractResource
   */
  public listByIds(ids: number[], preventLoader = false): Promise<EntityType[]> {
    const query = this.prepareOptions({
      query: {
        __variables: { ids: '[ID!]!' },
        [this.listByIdsName]: {
          __args: { ids: new VariableType('ids') },
          ...this.listFields,
        },
      },
    });
    return this.query({ query, variables: { ids } }, this.listByIdsName, preventLoader);
  }
}
