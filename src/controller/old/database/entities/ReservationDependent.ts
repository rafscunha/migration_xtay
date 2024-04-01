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

@Index("FKscxwmawpbcm5jteqr1ilyd7by", ["dependentId"], {})
@Index("FKo3yjfnawl7nr05uxbn82gr3ya", ["reservationId"], {})
@Entity("reservation_dependent", { schema: "Xtay" })
export class ReservationDependent {
  @PrimaryGeneratedColumn({ type: "bigint", name: "reservationDependentId" })
  reservationDependentId: string;

  @Column("varchar", { name: "fnrhId", nullable: true, length: 255 })
  fnrhId: string | null;

  @Column("bigint", { name: "dependentId", nullable: true })
  dependentId: string | null;

  @Column("bigint", { name: "reservationId", nullable: true })
  reservationId: string | null;

  @ManyToOne(
    () => Reservation,
    (reservation) => reservation.reservationDependents,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "reservationId", referencedColumnName: "reservationId" },
  ])
  reservation: Reservation;

  @ManyToOne(() => Dependent, (dependent) => dependent.reservationDependents, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "dependentId", referencedColumnName: "dependentId" }])
  dependent: Dependent;
}
