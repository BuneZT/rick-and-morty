import { Character } from '@/interfaces/character';
import { CharacterResource, characterResource } from '@/resources/character.resource';
import favorites from './character/favorite.module';
import { EntityModule } from './entity.module';

/**
 * Moduł postaci
 *
 * @export
 * @class CharacterModule
 * @extends {EntityModule<Character, CharacterResource>}
 */
export class CharacterModule extends EntityModule<Character, CharacterResource> {
  public modules = { favorites };

  constructor() {
    super(characterResource);
  }
}

export default new CharacterModule();
