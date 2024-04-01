import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { Guest } from './xtay.guest.entity';
import { Reservation } from './reservation.reservation.entity';

/**
 * FROM magikey_request
 */
@Entity({ name: 'magikey_request', schema: 'management' })
export class MagikeyRequest{

  @PrimaryGeneratedColumn("increment")
  id: number

  //from magikey_request.reservationId
  @OneToOne(()=> Reservation)
  @JoinColumn({name: 'reservation_id'})
  reservation: Reservation

  //from magikey_request.action
  @Column({type: 'varchar'})
  action: string;

  //from magikey_request.dateRequest
  @Column({name:'date_request', type: 'datetime'})
  dateRequest: Date;

  //from magikey_request.sendEmail
  @Column({name:'send_email', type: 'bool'})
  sendEmail: boolean;

  //from magikey_request.success
  @Column({ type: 'bool'})
  success: boolean;

  //from magikey_request.eventId
  @Column({name:'event_id', type: 'bigint'})
  eventId: number;

}