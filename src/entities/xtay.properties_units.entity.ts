import { Entity, OneToOne, JoinColumn} from 'typeorm'
import { Properties } from './xtay.properties.entity';
import { Unit } from './management.unit.entity';


@Entity({ name: 'properties_unit', schema: 'xtay' })
export class PropertiesUnit{

  @OneToOne(()=> Properties)
  @JoinColumn({name: 'properties_id'})
  properties: Properties;

  @OneToOne(()=> Unit)
  @JoinColumn({name: 'unit_id'})
  unit: Unit;

}