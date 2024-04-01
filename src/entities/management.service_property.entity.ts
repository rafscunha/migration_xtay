import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'


/**
 * from service_property
 */
@Entity({ name: 'service_property', schema: 'management' })
export class ServiceProperty{

  @PrimaryGeneratedColumn("increment")
  id: number

  //from service_property.name
  @Column({type: 'varchar'})
  name: string;

  //from service_property.description
  @Column({name:'send_email', type: 'bool'})
  description: boolean;

  //unknown
  @Column({ type: 'int'})
  price: number;


}