import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { EstablishmentConfig } from './xtay.establishment_config.entity';


/**
 * from establishment_config
 */
@Entity({ name: 'establishment_config_address', schema: 'xtay' })
export class EstablishmentConfigAddress{

  @PrimaryColumn({name: 'establishment_id'})
  establishment_id: number;

  // @OneToOne(()=> EstablishmentConfig)
  // @JoinColumn({name: 'establishment_id'})
  // establishment: EstablishmentConfig;

  //from establishment_config.city
  @Column({type: 'varchar', length: 255})
  city: string;

  //from establishment_config.country
  @Column({type: 'varchar', length: 255})
  country: string;

  //from establishment_config.neighborhood
  @Column({type: 'varchar', length: 80})
  neighborhood: string;

  //from establishment_config.number
  @Column({type: 'varchar', length: 6})
  number: string;

  //from establishment_config.state
  @Column({type: 'varchar', length: 100})
  state: string;

  //from establishment_config.street
  @Column({type: 'varchar', length: 250})
  street: string;

  //from establishment_config.zipCode
  @Column({type: 'varchar', length: 15, name: 'zip_code'})
  zipcode: string;

}