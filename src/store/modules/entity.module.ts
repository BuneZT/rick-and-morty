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
    data: undefined,
    id: undefined
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
    saveCount(localState: EntityModuleState<EntityType>, count: any): void {
      localState.count = count;
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
     * Dodaje encję do listy
     *
     * @param localState stan lokalny
     * @param entity encja
     */
    add(localState: EntityModuleState<EntityType>, entity: EntityType): void {
      localState.list.unshift(entity);
    },
    /**
     * Usuwa encję z listy
     *
     * @param localState stan lokalny
     * @param id identyfikator encji
     */
    remove(localState: EntityModuleState<EntityType>, id: number): void {
      localState.list.splice(localState.list.findIndex((item: EntityType) => item.id === id), 1);
    },
    /**
     * Aktualizuje encję
     *
     * @param localState stan lokalny
     * @param entity encja
     */
    update(localState: any, entity: EntityType): void {
      const index = localState.list.findIndex((item: EntityType) => item.id === entity.id);
      localState.list.splice(index, 1, entity);
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
     * Zapisuje encję do store
     *
     * @param localState stan lokalny
     * @param entity encja
     */
    setEntity(localState: any, entity: EntityType): void {
      localState.data = { ...entity };
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
      const { list, count } = await this.resource.list(filters);
      context.commit('saveList', list);
      context.commit('saveCount', count);
    },
    /**
     * Pobiera encję
     *
     * @param context context
     * @param id identyifkator encji
     */
    get: async (context: any, id?: number): Promise<EntityType> => {
      const entity = await this.resource.get(id || context.state.id);
      context.commit('setEntity', entity);
      return entity;
    },
    /**
     * Dodaje encję
     *
     * @param context context
     * @param data dane do wysłania do API
     */
    add: async (context: any, data: any): Promise<void> => {
      data.id = await this.resource.add(data);
      context.commit('add', data);
      context.commit('incrementCount');
    },
    /**
     * Usuwa encję
     *
     * @param context context
     * @param id identyfikator encji
     */
    remove: async (context: any, id: number): Promise<void> => {
      await this.resource.delete(id);
      context.commit('remove', id);
      context.commit('decrementCount');
    },
    /**
     * Aktualizuje encję
     *
     * @param context context
     * @param data dane encji
     */
    update: async (context: any, data: EntityType): Promise<void> => {
      await this.resource.update(data.id as number, data);
      context.commit('update', data);
      context.commit('setEntity', data);
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
