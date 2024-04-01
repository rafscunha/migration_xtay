import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from 'typeorm'
import { EstablishmentConfig } from './xtay.establishment_config.entity';
import { Company } from './xtay.company.entity';

/**
 * from establishment
 */
@Entity({ name: 'establishment', schema: 'xtay' })
export class Establishment{

  @PrimaryGeneratedColumn("increment")
  id: number;

  //from establishment.name
  @Column({ type: 'varchar'})
  name: string;

  //from establishment.documentNumber
  @Column({name:'document_number', type: 'varchar'})
  documentNumber: string;

  //from establishment.description
  @Column({type: 'varchar'})
  description: string;

  //from establishment.userStays
  @Column({name:'user_stay', type: 'varchar'})
  userStay: string;

  //from establishment.passwordStays
  @Column({name:'password_stays', type: 'varchar'})
  passwordStays: string;

  //from establishment.establishmentType
  @Column({name:'establishment_type', type: 'varchar'})
  establishmentType: string;

  //make the reference with company table
  @OneToOne(() => Company)
  @JoinColumn({name: 'company_id'})
  company: Company;

  @OneToOne(() => EstablishmentConfig)
  @JoinColumn({name: 'establishmentconfig_id'})
  establishmentConfig: EstablishmentConfig;

}