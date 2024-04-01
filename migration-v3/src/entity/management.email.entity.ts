import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from 'typeorm'
/**
 * from email
 */
@Entity({ name: 'email', schema: 'management' })
export class Email{

  @PrimaryColumn('bigint', { unique: true })
  id: number

  //from email.emailFrom
  @Column({name: 'email_from', type: 'varchar', nullable: true})
  emailFrom: string;

  //from email.emailTo
  @Column({name: 'email_to', type: 'varchar', nullable: true})
  emailTo: string;

  //from email.subject
  @Column({type: 'varchar', nullable: true})
  subject: string;

  //from email.body
  @Column({type: 'varchar', nullable: true})
  body: string;

  //from email.sendGridID
  @Column({name: 'send_grid_id', type: 'varchar', nullable: true})
  sendGridId: string;

  //from email.countRetrySendgrid
  @Column({name: 'cont_retry_send_grid', type: 'int', nullable: true})
  countRetrySendGrid: number;

  //from email.date
  @Column({name: 'email_date', type: 'timestamp', nullable: true})
  emailDate: Date;
}