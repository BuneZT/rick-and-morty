import { Dictionary } from 'vuex';

import { Resource } from '@/resources/resource';

/**
 * Abstrakcyjny moduł store
 *
 * @export
 * @abstract
 * @class AbstractModule
 */
export abstract class AbstractModule<ResourceType extends Resource> {
  /**
   * Czy ma być używany namespace
   *
   * @type {boolean}
   * @memberof AbstractModule
   */
  public namespaced: boolean = true;

  /**
   * Stan store
   *
   * @abstract
   * @type {object}
   * @memberof AbstractModule
   */
  public abstract state: object;

  /**
   * Akcje
   *
   * @abstract
   * @memberof AbstractModule
   */
  public abstract actions: Dictionary<(...args: any[]) => any>;

  /**
   * Mutacje
   *
   * @abstract
   * @memberof AbstractModule
   */
  public abstract mutations: Dictionary<(...args: any[]) => void>;

  /**
   * Gettery
   *
   * @abstract
   * @memberof AbstractModule
   */
  public getters: Dictionary<(localState: any) => any> = {};

  constructor(protected resource: ResourceType) {}
}
