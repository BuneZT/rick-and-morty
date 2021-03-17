import { EntityResource } from './entity.resource';
import { Application } from '@/interfaces/application';

/**
 * Resource 
 *
 * @export
 * @class ApplicationResource
 * @extends {EntityResource<Application>}
 */
export class ApplicationResource extends EntityResource<Application> {
  public getFields = {
    id: true,

  };

  public listFields = {
    id: true,

  };

  constructor() {
    super({
      entityName: 'application'
    });
  }
}

export const applicationResource = new ApplicationResource();
