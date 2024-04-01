import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, PrimaryColumn} from 'typeorm'
import { Properties } from './xtay.properties.entity';


/**
 * from service_property
 */
@Entity({ name: 'service_property', schema: 'management' })
export class ServiceProperty{

  @PrimaryColumn('bigint', { unique: true })
  id: number

  //from service_property.name
  @Column({type: 'varchar', nullable: true})
  name: string;

  //from service_property.description
  @Column({name:'description', type: 'varchar', nullable: true})
  description: string;

  //unknown
  @Column({ type: 'int', nullable: true})
  price: number;

  @ManyToMany(()=> Properties)
  @JoinTable({
    name: 'properties_services',
    inverseJoinColumn: {name: 'properties_id', referencedColumnName: 'id'},
    joinColumn: {name: 'service_id', referencedColumnName: 'id'},
  })
  properties: Properties[];


}