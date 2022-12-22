import { Dictionary } from 'vuex';

import { AbstractModuleState } from '@/interfaces/abstractModuleState';
import { Filter } from '@/interfaces/filter';
import { AbstractResource } from '@/resources/abstractResource';

export class AbstractModule<EntityType extends { id?: number },
  ResourceType extends AbstractResource<EntityType>> {
  /**
   * Stan modułu encji
   *
   * @type {AbstractModuleState<EntityType>}
   * @memberof AbstractModule
   */
  public state: AbstractModuleState<EntityType> = {
    list: [],
    ids: [],
    count: 0,
    pages: 0
  };
  public namespaced: boolean = true;


  public mutations: Dictionary<(...args: any[]) => void> = {
    /**
     * Zapisuje listę do store
     *
     * @param localState stan lokalny
     * @param list lista encji
     */
    saveList(localState: AbstractModuleState<EntityType>, list: EntityType[]): void {
      localState.list = list;
    },
    /**
     * Zapisuje liczbę encji do store
     *
     * @param localState stan lokalny
     * @param count liczba encji
     */
    saveCount(localState: AbstractModuleState<EntityType>, count: number): void {
      localState.count = count;
    },
    /**
     * Zapisuje liczbę stron
     *
     * @param {AbstractModuleState<EntityType>} localState
     * @param {number} pages
     */
    savePages(localState: AbstractModuleState<EntityType>, pages: number): void {
      localState.pages = pages;
    },
    /**
     * Zapisuje idki encji do pobrania
     *
     * @param {AbstractModuleState<EntityType>} localState
     * @param {number[]} ids
     */
    setIds(localState: AbstractModuleState<EntityType>, ids: number[]): void {
      localState.ids = ids;
    },
    /**
     * Dodaje id do listy idk-ów encji do pobrania
     *
     * @param {AbstractModuleState<EntityType>} localState
     * @param {number} id
     */
    addToIds(localState: AbstractModuleState<EntityType>, id: number): void {
      localState.ids.push(id);
    },
    /**
     * Podnosi liczbę encji o 1
     *
     * @param localState stan lokalny
     */
    incrementCount(localState: AbstractModuleState<EntityType>): void {
      localState.count += 1;
    },
    /**
     * Obniża liczbę encji o 1
     *
     * @param localState stan lokalny
     */
    decrementCount(localState: AbstractModuleState<EntityType>): void {
      localState.count -= 1;
    },
    /**
     * Zapisuje identyfikator encji do store
     *
     * @param localState stan lokalny
     * @param id identyfikator encji
     */
    setId(localState: any, id: number): void {
      localState.id = id;
    },
    /**
     * Usuwa encję z listy
     *
     * @param localState stan lokalny
     * @param id identyfikator encji
     */
    remove(localState: AbstractModuleState<EntityType>, id: number): void {
      localState.list.splice(
        localState.list.findIndex((item: EntityType) => item.id === id),
        1
      );
    }
  };

  public actions: Dictionary<(...args: any[]) => Promise<void | any>> = {
    /**
     * Pobiera listę encji
     *
     * @param context context
     * @param filters filtry listy
     */
    list: async (context: any, filters: Filter): Promise<void> => {
      const { results, info } = await this.resource.list(filters);
      context.commit('saveList', results);
      context.commit('saveCount', info.count);
      context.commit('savePages', info.pages);
    },

    /**
     * Pobiera listę encji po id
     *
     * @param {*} context
     * @param {number[]} ids
     * @return {*}  {Promise<void>}
     */
    listByIds: async (context: any, ids?: number[]): Promise<void> => {
      if (!ids) {
        ids = context.state.ids;
      }

      if (!ids?.length) {
        context.commit('saveList', []);
        context.commit('saveCount', 0);
        return;
      }

      const list = await this.resource.listByIds(ids);
      context.commit('saveList', list);
      context.commit('saveCount', list.length);
    },
    /**
     * Usuwa encję
     *
     * @param context context
     * @param id identyfikator encji
     */
    remove: (context: any, id: number): any => {
      context.commit('remove', id);
      context.commit('decrementCount');
    }
  };

  public getters = {
    /**
     * Wybiera encję o podanym identyfikatorze z listy
     */
    byId: (localState: AbstractModuleState<EntityType>) => (id: number): EntityType | undefined =>
      localState.list.find(entity => entity.id === id)
  };

  constructor(protected resource: ResourceType) {
  }

}
