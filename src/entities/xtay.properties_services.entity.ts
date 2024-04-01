import { Entity, OneToOne, JoinColumn} from 'typeorm'
import { Properties } from './xtay.properties.entity';
import { ServiceProperty } from './management.service_property';


@Entity({ name: 'properties_services', schema: 'xtay' })
export class PropertiesServices{

  @OneToOne(()=> Properties)
  @JoinColumn({name: 'properties_id'})
  properties: Properties;

  @OneToOne(()=> ServiceProperty)
  @JoinColumn({name: 'services_id'})
  services: ServiceProperty;

}