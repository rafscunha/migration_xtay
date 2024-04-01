import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reservation } from "./Reservation";

@Index("FKmjwt9097fhjwufsu6x29b17dk", ["reservationId"], {})
@Entity("webhook_error", { schema: "Xtay" })
export class WebhookError {
  @PrimaryGeneratedColumn({ type: "bigint", name: "webhookErrorId" })
  webhookErrorId: string;

  @Column("datetime", { name: "dateError", nullable: true })
  dateError: Date | null;

  @Column("varchar", { name: "errorType", nullable: true, length: 255 })
  errorType: string | null;

  @Column("varchar", { name: "messageError", nullable: true, length: 255 })
  messageError: string | null;

  @Column("varchar", { name: "webhookType", nullable: true, length: 255 })
  webhookType: string | null;

  @Column("bigint", { name: "reservationId", nullable: true })
  reservationId: string | null;

  @ManyToOne(() => Reservation, (reservation) => reservation.webhookErrors, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "reservationId", referencedColumnName: "reservationId" },
  ])
  reservation: Reservation;
}
