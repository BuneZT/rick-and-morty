import { Character } from '@/interfaces/character';
import { CharacterResource, characterResource } from '@/resources/character.resource';
import { EntityModule } from './entity.module';

/**
 * Moduł ulubionych postaci
 *
 * @export
 * @class FavoriteModule
 * @extends {EntityModule<Favorite, FavoriteResource>}
 */
export class FavoriteCharacterModule extends EntityModule<Character, CharacterResource> {
  constructor() {
    super(characterResource);
  }
}

export default new FavoriteCharacterModule();
