import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Establishment } from "./Establishment";

@Entity("establishment_config", { schema: "Xtay" })
export class EstablishmentConfig {
  @PrimaryGeneratedColumn({ type: "bigint", name: "establishmentConfigId" })
  establishmentConfigId: string;

  @Column("varchar", { name: "addrNumber", nullable: true, length: 255 })
  addrNumber: string | null;

  @Column("varchar", { name: "addrWebsite", nullable: true, length: 255 })
  addrWebsite: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "cellPhone", nullable: true, length: 255 })
  cellPhone: string | null;

  @Column("varchar", { name: "cep", nullable: true, length: 255 })
  cep: string | null;

  @Column("varchar", { name: "checkin", nullable: true, length: 255 })
  checkin: string | null;

  @Column("bit", { name: "checkinWeb", nullable: true })
  checkinWeb: boolean | null;

  @Column("varchar", { name: "checkout", nullable: true, length: 255 })
  checkout: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("decimal", {
    name: "comissionSplit",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  comissionSplit: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("varchar", { name: "district", nullable: true, length: 255 })
  district: string | null;

  @Column("bit", { name: "hasAirbnbAutomaticPayment", nullable: true })
  hasAirbnbAutomaticPayment: boolean | null;

  @Column("bit", { name: "hasBookingAutomaticPayment", nullable: true })
  hasBookingAutomaticPayment: boolean | null;

  @Column("bit", { name: "hasBuklyBookingAutomaticPayment", nullable: true })
  hasBuklyBookingAutomaticPayment: boolean | null;

  @Column("bit", { name: "hasOwnerInvoice", nullable: true })
  hasOwnerInvoice: boolean | null;

  @Column("bit", { name: "hasPaymentGateway", nullable: true })
  hasPaymentGateway: boolean | null;

  @Column("bit", { name: "hasSplit", nullable: true })
  hasSplit: boolean | null;

  @Column("bit", { name: "hasWebhook", nullable: true })
  hasWebhook: boolean | null;

  @Column("varchar", { name: "helpEmail", nullable: true, length: 255 })
  helpEmail: string | null;

  @Column("varchar", { name: "information", nullable: true, length: 1000 })
  information: string | null;

  @Column("varchar", {
    name: "linkMotorReservaEstablishment",
    nullable: true,
    length: 255,
  })
  linkMotorReservaEstablishment: string | null;

  @Column("varchar", { name: "logo", nullable: true, length: 255 })
  logo: string | null;

  @Column("decimal", {
    name: "minimalPrice",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  minimalPrice: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("varchar", { name: "sellerId", nullable: true, length: 255 })
  sellerId: string | null;

  @Column("varchar", { name: "sellerIdSplit", nullable: true, length: 255 })
  sellerIdSplit: string | null;

  @Column("varchar", { name: "state", nullable: true, length: 255 })
  state: string | null;

  @Column("varchar", { name: "timeZone", nullable: true, length: 255 })
  timeZone: string | null;

  @Column("varchar", { name: "urlItunes", nullable: true, length: 255 })
  urlItunes: string | null;

  @Column("varchar", { name: "urlPlayStore", nullable: true, length: 255 })
  urlPlayStore: string | null;

  @Column("varchar", { name: "urlWeb", nullable: true, length: 255 })
  urlWeb: string | null;

  @Column("bigint", { name: "establishment_config_id" })
  establishmentConfigId: string;

  @Column("varchar", { name: "addr_number", nullable: true, length: 255 })
  addrNumber: string | null;

  @Column("varchar", { name: "addr_website", nullable: true, length: 255 })
  addrWebsite: string | null;

  @Column("varchar", { name: "cell_phone", nullable: true, length: 255 })
  cellPhone: string | null;

  @Column("bit", { name: "checkin_web", nullable: true })
  checkinWeb: boolean | null;

  @Column("decimal", {
    name: "comission_split",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  comissionSplit: string | null;

  @Column("bit", { name: "has_airbnb_automatic_payment", nullable: true })
  hasAirbnbAutomaticPayment: boolean | null;

  @Column("bit", { name: "has_booking_automatic_payment", nullable: true })
  hasBookingAutomaticPayment: boolean | null;

  @Column("bit", {
    name: "has_bukly_booking_automatic_payment",
    nullable: true,
  })
  hasBuklyBookingAutomaticPayment: boolean | null;

  @Column("bit", { name: "has_owner_invoice", nullable: true })
  hasOwnerInvoice: boolean | null;

  @Column("bit", { name: "has_payment_gateway", nullable: true })
  hasPaymentGateway: boolean | null;

  @Column("bit", { name: "has_split", nullable: true })
  hasSplit: boolean | null;

  @Column("bit", { name: "has_webhook", nullable: true })
  hasWebhook: boolean | null;

  @Column("varchar", { name: "help_email", nullable: true, length: 255 })
  helpEmail: string | null;

  @Column("varchar", {
    name: "link_motor_reserva_establishment",
    nullable: true,
    length: 255,
  })
  linkMotorReservaEstablishment: string | null;

  @Column("decimal", {
    name: "minimal_price",
    nullable: true,
    precision: 19,
    scale: 2,
  })
  minimalPrice: string | null;

  @Column("varchar", { name: "seller_id", nullable: true, length: 255 })
  sellerId: string | null;

  @Column("varchar", { name: "seller_id_split", nullable: true, length: 255 })
  sellerIdSplit: string | null;

  @Column("varchar", { name: "time_zone", nullable: true, length: 255 })
  timeZone: string | null;

  @Column("varchar", { name: "url_itunes", nullable: true, length: 255 })
  urlItunes: string | null;

  @Column("varchar", { name: "url_play_store", nullable: true, length: 255 })
  urlPlayStore: string | null;

  @Column("varchar", { name: "url_web", nullable: true, length: 255 })
  urlWeb: string | null;

  @OneToOne(
    () => Establishment,
    (establishment) => establishment.establishmentConfig
  )
  establishment: Establishment;
}
