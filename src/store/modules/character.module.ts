import { Character } from '@/interfaces/character';
import { CharacterResource, characterResource } from '@/resources/character.resource';
import { AbstractModule } from './abstractModule';

/**
 * Moduł postaci
 *
 * @export
 * @class CharacterModule
 * @extends {AbstractModule<Character, CharacterResource>}
 */
export class CharacterModule extends AbstractModule<Character, CharacterResource> {
  constructor() {
    super(characterResource);
  }
}

export default new CharacterModule();
