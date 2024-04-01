import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm'
import { Guest } from './xtay.guest.entity';
import { Reservation } from './reservation.reservation.entity';

/**
 * FROM magikey_request
 */
@Entity({ name: 'magikey_request', schema: 'management' })
export class MagikeyRequest{

  @PrimaryColumn('bigint', { unique: true })
  id: number

  //from magikey_request.reservationId
  @ManyToOne(()=> Reservation)
  @JoinColumn({name: 'reservation_id'})
  reservation: Reservation

  //from magikey_request.action
  @Column({type: 'varchar', nullable: true})
  action: string;

  //from magikey_request.dateRequest
  @Column({name:'date_request', type: 'timestamp', nullable: true})
  dateRequest: Date;

  //from magikey_request.sendEmail
  @Column({name:'send_email', type: 'bool', nullable: true})
  sendEmail: boolean;

  //from magikey_request.success
  @Column({ type: 'bool', nullable: true})
  success: boolean;

  //from magikey_request.eventId
  @Column({name:'event_id', type: 'bigint', nullable: true})
  eventId: number;

}