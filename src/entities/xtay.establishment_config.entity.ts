import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

/**
 * from establishment_config
 */
@Entity({ name: 'establishment_config', schema: 'xtay' })
export class EstablishmentConfig{

  @PrimaryGeneratedColumn("increment")
  id: number;

  //from establishment_config.information
  @Column({ type: 'varchar'})
  information: string;

  //from establishment_config.addr_website
  @Column({name:'addr_website', type: 'varchar'})
  addrWebsite: string;

  //from establishment_config.timeZone
  @Column({name:'time_zone', type: 'varchar'})
  timeZone: string;

  //from establishment_config.checkin
  @Column({name:'checkin', type: 'varchar'})
  checkin: string;

  //from establishment_config.checkout
  @Column({name:'checkout', type: 'varchar'})
  checkout: string;

  //from establishment_config.urlItunes
  @Column({name:'url_itunes', type: 'varchar'})
  urlItunes: string;

  //from establishment_config.urlPlayStore
  @Column({name:'url_play_store', type: 'varchar'})
  urlPlayStore: string;

  //from establishment_config.urlWeb
  @Column({name:'url_web', type: 'varchar'})
  urlWeb: string;

  //from establishment_config.has_payment_gateway or hasPaymentGateway
  @Column({name:'has_payment_gateway', type: 'bool'})
  hasPaymentGateway: boolean;

  //from establishment_config.has_airbnb_automatic_payment or hasAirbnbAutomaticPayment
  @Column({name:'has_airbnb_automatic_payment', type: 'bool'})
  hasAirbnbAutomaticPayment: boolean;

  //from establishment_config.has_booking_automatic_payment or hasBookingAutomaticPayment
  @Column({name:'has_booking_automatic_payment', type: 'bool'})
  hasBookingAutomaticPayment: boolean;

  //from establishment_config.has_bukly_booking_automatic_payment or hasBuklyBookingAutomaticPayment
  @Column({name:'has_bukly_booking_automatic_payment', type: 'bool'})
  hasBuklyBookingAutomaticPayment: boolean;

  //from establishment_config.checkinWeb
  @Column({name:'checking_web', type: 'bool'})
  checkingWeb: boolean;

  //from establishment_config.has_owner_invoice or hasOwnerInvoice
  @Column({name:'has_owner_invoice', type: 'bool'})
  hasOwnerInvoice: boolean;

  //from establishment_config.minimal_price
  @Column({name:'minimal_price', type: 'decimal', precision: 2, scale: 19})
  minimalPrice: number;

}