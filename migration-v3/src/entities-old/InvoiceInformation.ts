import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReservationOld } from "./Reservation";

@Index("FKgqsvw397pjd5yejxbevffy813", ["reservationId"], {})
@Entity("invoice_information", { schema: "Xtay" })
export class InvoiceInformationOld {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bit", { name: "autoSend", nullable: true })
  autoSend: boolean | null;

  @Column("varchar", { name: "city", length: 250 })
  city: string;

  @Column("bit", { name: "contribuinteIcms", nullable: true })
  contribuinteIcms: boolean | null;

  @Column("varchar", { name: "country", length: 240 })
  country: string;

  @Column("varchar", { name: "documentNumber", length: 24 })
  documentNumber: string;

  @Column("tinyint", { name: "documentType" })
  documentType: number;

  @Column("varchar", { name: "name", nullable: true, length: 80 })
  name: string | null;

  @Column("varchar", { name: "neighborhood", nullable: true, length: 80 })
  neighborhood: string | null;

  @Column("varchar", { name: "number", length: 6 })
  number: string;

  @Column("bit", { name: "optanteSimplesNacional", nullable: true })
  optanteSimplesNacional: boolean | null;

  @Column("varchar", { name: "state", length: 5 })
  state: string;

  @Column("varchar", { name: "street", length: 250 })
  street: string;

  @Column("varchar", { name: "zipCode", length: 15 })
  zipCode: string;

  @Column("bigint", { name: "reservation_id" })
  reservationId: number;

  @ManyToOne(
    () => ReservationOld,
    (reservation) => reservation.invoiceInformations,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "reservation_id", referencedColumnName: "reservationId" },
  ])
  reservation: ReservationOld;
}
