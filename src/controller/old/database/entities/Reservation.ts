import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MainGuest } from "./MainGuest";
import { Establishment } from "./Establishment";
import { Unit } from "./Unit";
import { Embratur } from "./Embratur";
import { EmbraturError } from "./EmbraturError";
import { ReservationDependent } from "./ReservationDependent";
import { WebhookError } from "./WebhookError";
import { InvoiceInformation } from "./InvoiceInformation";


@Entity("reservation", { schema: "Xtay" })
export class Reservation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "reservationId" })
  reservationId: string;

  @Column("varchar", { name: "cancelReason", nullable: true, length: 255 })
  cancelReason: string | null;

  @Column("datetime", { name: "cancelationDate", nullable: true })
  cancelationDate: Date | null;

  @Column("tinyint", {
    name: "checkin",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  checkin: boolean | null;

  @Column("datetime", { name: "checkinActionDate", nullable: true })
  checkinActionDate: Date | null;

  @Column("datetime", { name: "checkinDate", nullable: true })
  checkinDate: Date | null;

  @Column("tinyint", {
    name: "checkin_mobile",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  checkinMobile: boolean | null;

  @Column("varchar", { name: "checkinTime", nullable: true, length: 255 })
  checkinTime: string | null;

  @Column("tinyint", {
    name: "checkout",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  checkout: boolean | null;

  @Column("datetime", { name: "checkoutActionDate", nullable: true })
  checkoutActionDate: Date | null;

  @Column("datetime", { name: "checkoutDate", nullable: true })
  checkoutDate: Date | null;

  @Column("tinyint", {
    name: "checkout_mobile",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  checkoutMobile: boolean | null;

  @Column("varchar", { name: "checkoutTime", nullable: true, length: 255 })
  checkoutTime: string | null;

  @Column("varchar", { name: "clientPMSId", nullable: true, length: 255 })
  clientPmsId: string | null;

  @Column("int", { name: "eventId", nullable: true })
  eventId: number | null;

  @Column("varchar", { name: "externalIds", nullable: true, length: 255 })
  externalIds: string | null;

  @Column("varchar", { name: "fnrhId", nullable: true, length: 255 })
  fnrhId: string | null;

  @Column("int", { name: "guestsQuantity", nullable: true })
  guestsQuantity: number | null;

  @Column("int", { name: "inviteeId", nullable: true })
  inviteeId: number | null;

  @Column("datetime", { name: "localizedDate", nullable: true })
  localizedDate: Date | null;

  @Column("varchar", {
    name: "localizer",
    nullable: true,
    unique: true,
    length: 255,
  })
  localizer: string | null;

  @Column("varchar", { name: "magickey_passwd", nullable: true, length: 11 })
  magickeyPasswd: string | null;

  @Column("varchar", { name: "observation", nullable: true, length: 255 })
  observation: string | null;

  @Column("decimal", { name: "price", nullable: true, precision: 38, scale: 2 })
  price: string | null;

  @Column("datetime", { name: "reservationDate", nullable: true })
  reservationDate: Date | null;

  @Column("varchar", {
    name: "reservation_pms_id",
    nullable: true,
    unique: true,
    length: 255,
  })
  reservationPmsId: string | null;

  @Column("tinyint", { name: "reservationStatus", nullable: true })
  reservationStatus: number | null;

  @Column("varchar", { name: "salesChannel", nullable: true, length: 255 })
  salesChannel: string | null;

  @Column("varchar", { name: "category_pms_id", nullable: true, length: 255 })
  categoryPmsId: string | null;

  @Column("bigint", { name: "embraturId", nullable: true, unique: true })
  embraturId: string | null;

  @Column("bigint", { name: "establishmentId", nullable: true })
  establishmentId: string | null;

  @Column("varchar", { name: "listing_pms_id", nullable: true, length: 255 })
  listingPmsId: string | null;

  @Column("bigint", { name: "mainGuestId", nullable: true })
  mainGuestId: string | null;

  @ManyToOne(() => MainGuest, (mainGuest) => mainGuest.reservations, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "mainGuestId", referencedColumnName: "mainGuestId" }])
  mainGuest: MainGuest;

  @ManyToOne(
    () => Establishment,
    (establishment) => establishment.reservations,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "establishmentId", referencedColumnName: "establishmentId" },
  ])
  establishment: Establishment;

  @ManyToOne(() => Unit, (unit) => unit.reservations, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "category_pms_id", referencedColumnName: "listingPmsId" },
  ])
  categoryPms: Unit;

  @ManyToOne(() => Unit, (unit) => unit.reservations2, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "listing_pms_id", referencedColumnName: "listingPmsId" },
  ])
  listingPms: Unit;

  @OneToOne(() => Embratur, (embratur) => embratur.reservation, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "embraturId", referencedColumnName: "embraturId" }])
  embratur: Embratur;

  @OneToMany(() => EmbraturError, (embraturError) => embraturError.reservation)
  embraturErrors: EmbraturError[];

  @OneToMany(
    () => ReservationDependent,
    (reservationDependent) => reservationDependent.reservation
  )
  reservationDependents: ReservationDependent[];

  @OneToMany(() => WebhookError, (webhookError) => webhookError.reservation)
  webhookErrors: WebhookError[];

  @OneToMany(
    () => InvoiceInformation,
    (invoiceInformation) => invoiceInformation.reservation
  )
  invoiceInformations: InvoiceInformation[];
}
