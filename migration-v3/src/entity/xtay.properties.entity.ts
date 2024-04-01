import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Index, PrimaryColumn} from 'typeorm'
import { Unit } from './management.unit.entity';
import { ServiceProperty } from './management.service_property.entity';

/**
 * from properties - old schema: xtay
 */
@Entity({ name: 'properties', schema: 'management' })
export class Properties{

  @PrimaryColumn()
  id?: number;

  //from properties.propertyPMSId
  @Column({name:'property_pms_id', type: 'varchar'})
  @Index({unique:true})
  propertyPmsId?: string;

  //from properties.name
  @Column({type: 'varchar'})
  name?: string;

  //from properties.description
  @Column({type: 'varchar'})
  description?: string;

  //from properties.politic_url
  @Column({name:'politic_url', type: 'varchar'})
  politicUrl?: string;

  //from properties.image_url
  @Column({name:'image_url', type: 'varchar'})
  imageUrl?: string;

  //from properties.emailRecepcao
  @Column({name:'email_recepcao', type: 'varchar'})
  emailRecepcao?: string;

  //from properties.timeZone
  @Column({name:'time_zone', type: 'varchar'})
  timeZone?: string;

  // @ManyToMany(()=> Unit, (unit)=> unit.properties)
  // @JoinTable({
  //   name: 'properties_units',
  //   inverseJoinColumn: {name: 'unit_id', referencedColumnName: 'id'},
  //   joinColumn: {name: 'properties_id', referencedColumnName: 'id'}
  // })
  // units: Unit[];



}