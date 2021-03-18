import { Dictionary } from 'vuex';

import { EntityModuleState } from '@/interfaces/entityModuleState';
import { Filter } from '@/interfaces/filter';
import { EntityResource } from '@/resources/entity.resource';
import { AbstractModule } from './abstract.module';

export class EntityModule<
  EntityType extends { id?: number },
  ResourceType extends EntityResource<EntityType>
> extends AbstractModule<ResourceType> {
  /**
   * Stan modułu encji
   *
   * @type {EntityModuleState<EntityType>}
   * @memberof EntityModule
   */
  public state: EntityModuleState<EntityType> = {
    list: [],
    count: 0,
    pages: 0
  };

  public mutations: Dictionary<(...args: any[]) => void> = {
    /**
     * Zapisuje listę do store
     *
     * @param localState stan lokalny
     * @param list lista encji
     */
    saveList(localState: EntityModuleState<EntityType>, list: EntityType[]): void {
      localState.list = list;
    },
    /**
     * Zapisuje liczbę encji do store
     *
     * @param localState stan lokalny
     * @param count liczba encji
     */
    saveCount(localState: EntityModuleState<EntityType>, count: number): void {
      localState.count = count;
    },
    /**
     * Zapisuje liczbę stron
     *
     * @param {EntityModuleState<EntityType>} localState
     * @param {number} pages
     */
    savePages(localState: EntityModuleState<EntityType>, pages: number): void {
      localState.pages = pages;
    },
    /**
     * Podnosi liczbę encji o 1
     *
     * @param localState stan lokalny
     */
    incrementCount(localState: EntityModuleState<EntityType>): void {
      localState.count += 1;
    },
    /**
     * Obniża liczbę encji o 1
     *
     * @param localState stan lokalny
     */
    decrementCount(localState: EntityModuleState<EntityType>): void {
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
    }
  };

  public getters = {
    /**
     * Wybiera encję o podanym identyfikatorze z listy
     */
    byId: (localState: EntityModuleState<EntityType>) => (id: number): EntityType | undefined =>
      localState.list.find(entity => entity.id === id)
  };
}
