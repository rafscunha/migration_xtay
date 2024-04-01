import { Entity, PrimaryGeneratedColumn, Column, Index, PrimaryColumn } from 'typeorm'

/**
 * from reservation
 */
@Entity({ name: 'registration', schema: 'reservation' })
export class Registration{

  @PrimaryColumn('bigint', { unique: true })
  id: number;

  //from reservation.checkinDate
  @Column({name: 'checkin_date', type:'timestamp', default: null})
  checkInDate: Date;

  //from reservation.checkoutDate
  @Column({name: 'checkout_date', type:'timestamp', default: null})
  checkOutDate: Date;

  //from reservation.checkinTime
  @Column({name: 'checkin_time', type:'varchar', default: null})
  checkIntTime: string;

  //from reservation.checkoutTime
  @Column({name: 'checkout_time', type:'varchar', default: null})
  checkOutTime: string;

  //from reservation.checkinActionDate
  @Column({name: 'checkin_action_date', type:'timestamp', default: null})
  checkInActionDate: Date;

  //from reservation.checkoutActionDate
  @Column({name: 'checkout_action_date', type:'timestamp', default: null})
  checkOutActionDate: Date;

  //from reservation.checkin
  @Column({name: 'checkin', type:'bool', default: false})
  checkIn: boolean;

  //from reservation.checkout
  @Column({name: 'checkout', type:'bool', default: false})
  checkOut: boolean;

  //from reservation.checkin_mobile
  @Column({name: 'checkin_mobile', type:'bool', default: false})
  checkInMobile: boolean;

  //from reservation.checkout_mobile
  @Column({name: 'checkout_mobile', type:'bool', default: false})
  checkOutMobile: boolean;


}