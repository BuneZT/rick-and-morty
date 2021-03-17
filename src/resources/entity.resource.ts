import { VariableType } from 'json-to-graphql-query';

import { EntityResourceNames } from '@/interfaces/entityResourceNames';
import { Filter } from '@/interfaces/filter';
import { ListResponse } from '@/interfaces/list';
import { StateFilterArgs, StateFilterVariables } from './queryVariables/filters';
import { IdArgs, IdVariables } from './queryVariables/id';
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
   * Nazwa zapytania o encję
   *
   * @protected
   * @type {string}
   * @memberof EntityResource
   */
  protected entityQueryName: string;

  /**
   * Zmienne zapytania o encję
   *
   * @protected
   * @memberof EntityResource
   */
  protected getVariables = IdVariables;

  /**
   * Argumenty zapytania o encję
   *
   * @protected
   * @memberof EntityResource
   */
  protected getArgs = IdArgs;

  /**
   * Pola zapytania o encję
   *
   * @protected
   * @abstract
   * @type {*}
   * @memberof EntityResource
   */
  protected abstract getFields: any;

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
   * Nazwa mutacji dodania encji
   *
   * @protected
   * @type {string}
   * @memberof EntityResource
   */
  protected addMutationName: string;

  /**
   * Zmienne mutacji dodania encji
   *
   * @protected
   * @abstract
   * @type {*}
   * @memberof EntityResource
   */
  protected get addVariables(): any {
    let name = this.entityName;
    name = name[0].toUpperCase() + name.substring(1);

    return {
      model: `${name}Input!`
    };
  }

  /**
   * Argumenty mutacji dodania encji
   *
   * @protected
   * @abstract
   * @type {*}
   * @memberof EntityResource
   */
  protected get addArgs(): any {
    return {
      model: new VariableType('model')
    };
  }

  /**
   * Nazwa mutacji aktualizacji encji
   *
   * @protected
   * @type {string}
   * @memberof EntityResource
   */
  protected updateMutationName: string;

  /**
   * Zmienne mutacji aktualizacji encji
   *
   * @protected
   * @abstract
   * @type {*}
   * @memberof EntityResource
   */
  protected get updateVariables(): any {
    return { id: 'Int!', ...this.addVariables };
  }

  /**
   * Argumenty mutacji aktualizacji encji
   *
   * @protected
   * @abstract
   * @type {*}
   * @memberof EntityResource
   */
  protected get updateArgs(): any {
    return { id: new VariableType('id'), ...this.addArgs };
  }

  /**
   * Nazwa mutacji usunięcia encji
   *
   * @protected
   * @type {string}
   * @memberof EntityResource
   */
  protected deleteMutationName: string;

  /**
   * Zmienne mutacji usunięcia encji
   *
   * @protected
   * @memberof EntityResource
   */
  protected deleteVariables = IdVariables;

  /**
   * Argumenty mutacji usunięcia encji
   *
   * @protected
   * @memberof EntityResource
   */
  protected deleteArgs = IdArgs;

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
          list: this.listFields,
          count: true
        }
      }
    });
    return this.query({ query, variables: { filters } }, this.listQueryName, preventLoader);
  }

  /**
   * Pobranie pojedynczej encji
   *
   * @param {number} id
   * @param {boolean} [preventLoader=false]
   * @returns {Promise<EntityType>}
   * @memberof EntityResource
   */
  public get(id: number, preventLoader = false): Promise<EntityType> {
    const query = this.prepareOptions({
      query: {
        __variables: this.getVariables,
        [this.entityQueryName]: {
          __args: this.getArgs,
          ...this.getFields
        }
      }
    });
    return this.query({ query, variables: { id } }, this.entityQueryName, preventLoader);
  }

  /**
   * Dodanie encji
   *
   * @param {any} model - często jest to model + dodatkowe dane, typu identyfikator powiązanej encji, więc jest typu any
   * @returns {Promise<number>}
   * @memberof EntityResource
   */
  public add(model: any): Promise<number> {
    const mutation = this.prepareOptions({
      mutation: {
        __variables: this.addVariables,
        [this.addMutationName]: { __args: this.addArgs }
      }
    });
    return this.mutation(
      {
        mutation,
        variables: { model }
      },
      this.addMutationName
    );
  }

  /**
   * Aktualizacja encji
   *
   * @param {number} id
   * @param {EntityType} model
   * @returns {Promise<number>}
   * @memberof EntityResource
   */
  public update(id: number, model: any): Promise<number> {
    const mutation = this.prepareOptions({
      mutation: {
        __variables: this.updateVariables,
        [this.updateMutationName]: { __args: this.updateArgs }
      }
    });
    model = { ...model };

    if (model.id) {
      delete model.id;
    }

    if (model.__typename) {
      delete model.__typename;
    }

    return this.mutation({ mutation, variables: { model, id } }, this.updateMutationName);
  }

  /**
   * Usunięcie encji
   *
   * @param {number} id
   * @returns {Promise<number>}
   * @memberof EntityResource
   */
  public delete(id: number): Promise<number> {
    const mutation = this.prepareOptions({
      mutation: {
        __variables: this.deleteVariables,
        [this.deleteMutationName]: { __args: this.deleteArgs }
      }
    });
    return this.mutation({ mutation, variables: { id } }, this.deleteMutationName);
  }

  constructor({
    entityName,
    listName = entityName + 'List',
    addMutationName = entityName + 'Add',
    updateMutationName = entityName + 'Update',
    deleteMutationName = entityName + 'Delete'
  }: EntityResourceNames) {
    super();
    this.entityName = entityName;
    this.entityQueryName = entityName + 'Get';
    this.listQueryName = listName;
    this.addMutationName = addMutationName;
    this.updateMutationName = updateMutationName;
    this.deleteMutationName = deleteMutationName;
  }
}
