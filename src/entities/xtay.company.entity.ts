import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from 'typeorm'
import { ApplicationSystem } from './xtay.application_system.entity';

/**
 * from company
 */
@Entity({ name: 'company', schema: 'xtay' })
export class Company{

  @PrimaryGeneratedColumn("increment")
  id: number;

  //from company.name
  @Column({ type: 'varchar'})
  name: string;

  //from company.documentNumber
  @Column({name:'document_number', type: 'varchar'})
  documentNumber: string;

  //from company.description
  @Column({type: 'varchar'})
  description: string;

  //from company.appName
  @Column({name:'app_name', type: 'varchar'})
  appName: string;

  @OneToOne(() => ApplicationSystem)
  @JoinColumn({name: 'applicationsystem_id'})
  applicationSystem: ApplicationSystem;

}