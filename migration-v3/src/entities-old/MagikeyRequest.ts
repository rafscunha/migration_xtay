import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("magikey_request", { schema: "Xtay" })
export class MagikeyRequestOld {
  @PrimaryGeneratedColumn({ type: "bigint", name: "magikeyRequestId" })
  magikeyRequestId: string;

  @Column("varchar", { name: "action", nullable: true, length: 255 })
  action: string | null;

  @Column("datetime", { name: "dateRequest", nullable: true })
  dateRequest: Date | null;

  @Column("bigint", { name: "eventId", nullable: true })
  eventId: number | null;

  @Column("bigint", { name: "reservationId", nullable: true })
  reservationId: number | null;

  @Column("bit", { name: "sendEmail" })
  sendEmail: boolean;

  @Column("bit", { name: "success" })
  success: boolean;
}
