import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reservation } from "./Reservation";
import { Dependent } from "./Dependent";

@Index("UK_b8d72c7426jsh3sqekmkmp9bw", ["fnrhSendQueueId"], { unique: true })
@Index("FKdcqni3ov8hfi4um87sp6asf3b", ["dependentId"], {})
@Index("FK2s605qt4lq4baa7xngh2h9373", ["reservationId"], {})
@Entity("embratur_error", { schema: "Xtay" })
export class EmbraturError {
  @PrimaryGeneratedColumn({ type: "bigint", name: "embraturErrorId" })
  embraturErrorId: string;

  @Column("varchar", { name: "action", nullable: true, length: 255 })
  action: string | null;

  @Column("datetime", { name: "dateError", nullable: true })
  dateError: Date | null;

  @Column("varchar", {
    name: "fnrhSendQueueId",
    nullable: true,
    unique: true,
    length: 255,
  })
  fnrhSendQueueId: string | null;

  @Column("bigint", { name: "mainGuestId", nullable: true })
  mainGuestId: string | null;

  @Column("varchar", { name: "messageError", nullable: true, length: 255 })
  messageError: string | null;

  @Column("bigint", { name: "dependentId", nullable: true })
  dependentId: string | null;

  @Column("bigint", { name: "reservationId", nullable: true })
  reservationId: string | null;

  @ManyToOne(() => Reservation, (reservation) => reservation.embraturErrors, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "reservationId", referencedColumnName: "reservationId" },
  ])
  reservation: Reservation;

  @ManyToOne(() => Dependent, (dependent) => dependent.embraturErrors, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "dependentId", referencedColumnName: "dependentId" }])
  dependent: Dependent;
}
