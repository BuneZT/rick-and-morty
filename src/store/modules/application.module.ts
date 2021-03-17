import { EntityModule } from './entity.module';
import { Application } from '@/interfaces/application';
import { ApplicationResource, applicationResource } from '@/resources/application.resource';

/**
 * Moduł 
 *
 * @export
 * @class ApplicationModule
 * @extends {EntityModule<Application, ApplicationResource>}
 */
export class ApplicationModule extends EntityModule<Application, ApplicationResource> {
  constructor() {
    super(applicationResource);
  }
}

export default new ApplicationModule();
