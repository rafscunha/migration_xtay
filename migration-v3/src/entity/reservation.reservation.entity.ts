import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm'
import { Registration } from './reservation.registration.entity';
import { Guest } from './xtay.guest.entity';
import { Unit } from './management.unit.entity';


export enum RESERVATION_STATUS {
  NO_PAYMENT,
  PENDING_PAYMENT,
  FULL_PAYMENT,
  CANCELED,
  PRE_RESERVED
}

/**
 * from reservation
 */
@Entity({ name: 'reservation', schema: 'reservation' })
export class Reservation{

  @PrimaryColumn('bigint', { unique: true })
  id: number;

  //make a reference with unit table (weird)
  //from reservation.reservation_pms_id
  @Column({name:'reservation_pms_id',  type: 'varchar'})
  reservationPms: string;

  //from reservation.localizer
  @Column({ type: 'varchar'})
  localizer: string;

  //from reservation.price
  @Column({name: 'reservation_price', type: 'decimal', precision: 38, scale: 2, default: null}) 
  reservationPrice: number

  //from reservation.reservationDate
  @Column({name: 'reservation_date', type: 'timestamp', default: null})
  reservationDate: Date;

  //from reservation.cancelationDate
  @Column({name: 'cancelation_date', type: 'timestamp', default: null})
  cancelationDate: Date;

  // from reservation.localizedDate
  @Column({name: 'localized_date', type: 'timestamp', nullable: true})
  localizedDate: Date;

  //from reservation.reservationStatus
  @Column({name: 'reservation_status', type:'varchar', default: null, enum: RESERVATION_STATUS})
  reservationStatus: string;

  //from reservation.salesChannel
  @Column({name: 'sales_channel', type: 'varchar', default: null})
  salesChannel: string;

  //from reservation.guestsQuantity
  @Column({name: 'guest_quantity', type: 'int', default: null})
  guestQuantity: number;

  //from reservation.magickey_passwd
  @Column({name: 'magickey_passwd', type: 'varchar', length: 11, nullable: true})
  magickeyPasswd: string;

  //To do from Event Table reference
  //from reservation.eventId
  @Column({name: 'event_id', type: 'int', nullable: true})
  eventId: number;

  @Column({name: 'invitee_id', type: 'int', nullable: true})
  //from reservation.inviteeId
  inviteId: number;

  //from reservation.mainGuestId
  @ManyToOne(() => Guest, {nullable: true, onDelete: 'RESTRICT'})
  @JoinColumn({name: 'main_guest_id'})
  mainGuest: Guest;

  @OneToOne(() => Registration,{onDelete: 'CASCADE'})
  @JoinColumn({name: 'registration_id'})
  registration: Registration

  @ManyToOne(() => Unit)
  @JoinColumn({name: 'unit_id'})
  unit: Unit

  // @ManyToMany(() => Guest, (guest) => guest.reservations)
  // @JoinTable({
  //   name: 'reservation_dependent',
  //   inverseJoinColumn: {name: 'dependent_id', referencedColumnName: 'id'},
  //   joinColumn: {name: 'reservations_id', referencedColumnName: 'id'},
  // })
  // dependents:Guest[]

}