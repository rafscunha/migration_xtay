import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { Properties } from './xtay.properties.entity';

/**
 * from properties
 */
@Entity({ name: 'properties_address', schema: 'xtay' })
export class PropertiesAddress{

  @OneToOne(()=> Properties)
  @JoinColumn({name: 'properties_id'})
  propertiesId: Properties;

  //from properties.city
  @Column({type: 'varchar', length: 24, nullable: false})
  city: string;

  //from properties.country
  @Column({type: 'varchar', length: 255, nullable: false})
  country: string;

  //from properties.neighborhood
  @Column({type: 'varchar', length: 80, nullable: false})
  neighborhood: string;

  //from properties.addrNumber
  @Column({type: 'varchar', length: 6, nullable: false})
  number: string;

  //from properties.state
  @Column({type: 'varchar', length: 100, nullable: false})
  state: string;

  //from properties.street
  @Column({type: 'varchar', length: 250, nullable: false})
  street: string;

  //from properties.cep
  @Column({type: 'varchar', length: 15, nullable: false})
  zipcode: string;

}