import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { Registration } from './reservation.registration.entity';
import { Guest } from './xtay.guest.entity';
import { Unit } from './management.unit.entity';

/**
 * from reservation
 */
@Entity({ name: 'reservation', schema: 'reservation' })
export class Reservation{

  @PrimaryGeneratedColumn("increment")
  id: number;

  //make a reference with unit table (weird)
  //from reservation.reservation_pms_id
  @OneToOne(()=> Unit)
  @JoinColumn({name: 'reservation_pms_id'})
  reservationPmd: number

  //from reservation.localizer
  @Column({ type: 'varchar'})
  localizer: string;

  //from reservation.price
  @Column({name: 'reservation_price', type: 'decimal', precision: 2, scale: 38, default: null}) 
  reservationPrice: number

  //from reservation.reservationDate
  @Column({name: 'reservation_date', type: 'datetime', default: null})
  reservationDate: Date;

  //from reservation.cancelationDate
  @Column({name: 'cancelation_date', type: 'datetime', default: null})
  cancelationDate: Date;

  // from reservation.localizedDate
  @Column({name: 'localized_date', type: 'datetime'})
  localizedDate: Date;

  //from reservation.reservationStatus
  @Column({name: 'reservation_status', type:'bool', default: null})
  reservationStatus: boolean;

  //from reservation.salesChannel
  @Column({name: 'sales_channel', type: 'varchar', default: null})
  salesChannel: string;

  //from reservation.guestsQuantity
  @Column({name: 'guest_quantity', type: 'int', default: null})
  guestQuantity: number;

  //from reservation.magickey_passwd
  @Column({name: 'magickey_passwd', type: 'varchar', length: 11})
  magickeyPasswd: string;

  //To do from Event Table reference
  //from reservation.eventId
  @Column({name: 'event_id', type: 'int'})
  eventId: number;

  @Column({name: 'invite_id', type: 'int'})
  //from reservation.inviteeId
  inviteId: number;

  //from reservation.mainGuestId
  @OneToOne(() => Guest)
  @JoinColumn({name: 'main_guest_id'})
  mainGuest: Guest;

  @OneToOne(() => Registration)
  @JoinColumn({name: 'registration_id'})
  registration: Registration

  @OneToOne(() => Unit)
  @JoinColumn({name: 'unit_id'})
  unit: Unit

}