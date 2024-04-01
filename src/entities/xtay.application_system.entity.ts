import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from 'typeorm'

/**
 * from application_system
 */
@Entity({ name: 'application_system', schema: 'xtay' })
export class ApplicationSystem{

  @PrimaryGeneratedColumn("increment")
  id?: number;

  //from application_system.name
  @Column({ type: 'varchar'})
  name?: string;

  //from application_system.css
  @Column({type: 'varchar'})
  css?: string;

  //from application_system.senderEmail
  @Column({name:'sender_email', type: 'varchar'})
  senderEmail?: string;

  //from application_system.headerEmailUrl
  @Column({name:'header_email_url', type: 'varchar'})
  headerEmailUrl?: string;

  //from application_system.bottomEmailUrl
  @Column({name:'button_email_url', type: 'varchar'})
  buttonEmailUrl?: string;
}