import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EmbraturError } from "./EmbraturError";
import { ReservationDependent } from "./ReservationDependent";
import { MainGuest } from "./MainGuest";

@Index("FKm7gks8u3slt53om5bx2umshq0", ["mainGuestId"], {})
@Entity("dependent", { schema: "Xtay" })
export class Dependent {
  @PrimaryGeneratedColumn({ type: "bigint", name: "dependentId" })
  dependentId: string;

  @Column("datetime", { name: "birthDate" })
  birthDate: Date;

  @Column("varchar", { name: "citizenship", length: 250 })
  citizenship: string;

  @Column("varchar", { name: "city", length: 250 })
  city: string;

  @Column("varchar", { name: "country", length: 250 })
  country: string;

  @Column("varchar", { name: "documentNumber", length: 24 })
  documentNumber: string;

  @Column("tinyint", { name: "documentType" })
  documentType: number;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "expeditor", nullable: true, length: 64 })
  expeditor: string | null;

  @Column("tinyint", { name: "gender", nullable: true })
  gender: number | null;

  @Column("varchar", { name: "mobilePhoneNumber", length: 24 })
  mobilePhoneNumber: string;

  @Column("varchar", { name: "name", length: 80 })
  name: string;

  @Column("varchar", { name: "neighborhood", length: 80 })
  neighborhood: string;

  @Column("varchar", { name: "nickname", nullable: true, length: 80 })
  nickname: string | null;

  @Column("varchar", { name: "number", length: 6 })
  number: string;

  @Column("varchar", { name: "profession", length: 64 })
  profession: string;

  @Column("varchar", { name: "rg", nullable: true, length: 15 })
  rg: string | null;

  @Column("varchar", { name: "state", length: 100 })
  state: string;

  @Column("varchar", { name: "street", length: 250 })
  street: string;

  @Column("varchar", { name: "zipCode", length: 15 })
  zipCode: string;

  @Column("bigint", { name: "mainGuestId", nullable: true })
  mainGuestId: string | null;

  @OneToMany(() => EmbraturError, (embraturError) => embraturError.dependent)
  embraturErrors: EmbraturError[];

  @OneToMany(
    () => ReservationDependent,
    (reservationDependent) => reservationDependent.dependent
  )
  reservationDependents: ReservationDependent[];

  @ManyToOne(() => MainGuest, (mainGuest) => mainGuest.dependents, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "mainGuestId", referencedColumnName: "mainGuestId" }])
  mainGuest: MainGuest;
}
