import { CharacterModule } from '../character.module';

/**
 * Moduł ulubionych postaci
 *
 * @export
 * @class FavouriteCharacterModule
 * @extends {CharacterModule}
 */
export class FavouriteCharacterModule extends CharacterModule {
  constructor() {
    super();

    this.actions = {
      ...this.actions,
      list: (context: any, filters: any): Promise<void> => {
        return this.resource.list(filters).then(list => {
          context.commit('saveList', list);
        });
      }
    };
  }
}

export default new FavouriteCharacterModule();
