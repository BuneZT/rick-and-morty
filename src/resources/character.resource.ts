import { EntityResource } from './entity.resource';
import { Character } from '@/interfaces/character';
import { VariableType } from 'json-to-graphql-query';

/**
 * Resource postaci
 *
 * @export
 * @class CharacterResource
 * @extends {EntityResource<Character>}
 */
export class CharacterResource extends EntityResource<Character> {
  public listFields = {
    id: true,
    name: true,
    species: true,
    gender: true,
    image: true
  };

  constructor() {
    super({
      entityName: 'character'
    });
  }
}

export const characterResource = new CharacterResource();
