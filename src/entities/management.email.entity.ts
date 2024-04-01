import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
/**
 * from email
 */
@Entity({ name: 'service_property', schema: 'management' })
export class ServiceProperty{

  @PrimaryGeneratedColumn("increment")
  id: number

  //from email.emailFrom
  @Column({name: 'email_from', type: 'varchar'})
  emailFrom: string;

  //from email.emailTo
  @Column({name: 'email_to', type: 'varchar'})
  emailTo: string;

  //from email.subject
  @Column({type: 'varchar'})
  subject: string;

  //from email.body
  @Column({type: 'varchar'})
  body: string;

  //from email.sendGridID
  @Column({name: 'send_grid_id', type: 'varchar'})
  sendGridId: string;

  //from email.countRetrySendgrid
  @Column({name: 'count_retry_send_grid', type: 'int'})
  countRetrySendGrid: number;

  //from email.date
  @Column({name: 'email_date', type: 'datetime'})
  emailDate: Date;
}