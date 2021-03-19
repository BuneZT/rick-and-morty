import { Character } from '@/interfaces/character';
import { characterResource, CharacterResource } from '@/resources/character.resource';
import { CharacterModule } from '../character.module';
import { EntityModule } from '../entity.module';

/**
 * Moduł ulubionych postaci
 *
 * @export
 * @class FavoriteCharacterModule
 * @extends {CharacterModule}
 */
export class FavoriteCharacterModule extends EntityModule<Character, CharacterResource> {
  constructor() {
    super(characterResource);
  }
}

export default new FavoriteCharacterModule();
