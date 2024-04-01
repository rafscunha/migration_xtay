import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ReservationOld } from "./Reservation";

@Entity("embratur", { schema: "Xtay" })
export class Embratur {
  @PrimaryGeneratedColumn({ type: "bigint", name: "embraturId" })
  embraturId: string;

  @Column("varchar", { name: "bgstdscpais", nullable: true, length: 250 })
  bgstdscpais: string | null;

  @Column("varchar", { name: "bgstdscpaisdest", nullable: true, length: 250 })
  bgstdscpaisdest: string | null;

  @Column("varchar", { name: "snidcidadeibge", nullable: true, length: 250 })
  snidcidadeibge: string | null;

  @Column("varchar", {
    name: "snidcidadeibgedest",
    nullable: true,
    length: 250,
  })
  snidcidadeibgedest: string | null;

  @Column("varchar", { name: "snmotvia", nullable: true, length: 250 })
  snmotvia: string | null;

  @Column("varchar", { name: "sntiptran", nullable: true, length: 250 })
  sntiptran: string | null;

  @OneToOne(() => ReservationOld, (reservation) => reservation.embratur)
  reservation: ReservationOld;
}
