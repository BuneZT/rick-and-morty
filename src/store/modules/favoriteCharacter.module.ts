import { Character } from '@/interfaces/character';
import { CharacterResource, characterResource } from '@/resources/character.resource';
import { AbstractModule } from './abstractModule';

/**
 * Moduł ulubionych postaci
 *
 * @export
 * @class FavoriteModule
 * @extends {AbstractModule<Favorite, FavoriteResource>}
 */
export class FavoriteCharacterModule extends AbstractModule<Character, CharacterResource> {
  constructor() {
    super(characterResource);
  }
}

export default new FavoriteCharacterModule();
