import { EntityModule } from './entity.module';
import { Character } from '@/interfaces/character';
import { CharacterResource, characterResource } from '@/resources/character.resource';

/**
 * Moduł postaci
 *
 * @export
 * @class CharacterModule
 * @extends {EntityModule<Character, CharacterResource>}
 */
export class CharacterModule extends EntityModule<Character, CharacterResource> {
  constructor() {
    super(characterResource);
  }
}

export default new CharacterModule();
