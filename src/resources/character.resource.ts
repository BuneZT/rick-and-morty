import { Character } from '@/interfaces/character';
import { AbstractResource } from './abstractResource';

/**
 * Resource postaci
 *
 * @export
 * @class CharacterResource
 * @extends {AbstractResource<Character>}
 */
export class CharacterResource extends AbstractResource<Character> {
  public listFields = {
    id: true,
    name: true,
    species: true,
    gender: true,
    image: true,
    status: true,
    episode: {
      id: true,
      name: true
    }
  };

  constructor() {
    super({
      entityName: 'character'
    });
  }
}

export const characterResource = new CharacterResource();
