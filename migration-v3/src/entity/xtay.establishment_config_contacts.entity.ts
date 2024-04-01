import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { EstablishmentConfig } from './xtay.establishment_config.entity';

/**
 * From establishment_config
 */
@Entity({ name: 'establishment_config_contacts', schema: 'xtay' })
export class EstablishmentConfigContacts{

  @PrimaryColumn({name: 'establishment_id'})
  establishment_id: number;

  // @OneToOne(()=> EstablishmentConfig)
  // @JoinColumn({name: 'establishment_id'})
  // establishment: EstablishmentConfig;

  //unknown
  @Column({name: 'contact_type', type: 'varchar', length: 255})
  contactType: string;

  //from establishment_config.information
  @Column({type: 'varchar', length: 255})
  information: string;


}