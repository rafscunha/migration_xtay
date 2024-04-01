import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "./Reservation";
import { Dependent } from "./Dependent";

@Entity("main_guest", { schema: "Xtay" })
export class MainGuest {
  @PrimaryGeneratedColumn({ type: "bigint", name: "mainGuestId" })
  mainGuestId: string;

  @Column("datetime", { name: "birthDate" })
  birthDate: Date;

  @Column("varchar", { name: "citizenship", length: 250 })
  citizenship: string;

  @Column("varchar", { name: "city", length: 250 })
  city: string;

  @Column("int", { name: "codigoClienteOmie", nullable: true })
  codigoClienteOmie: number | null;

  @Column("varchar", { name: "country", length: 250 })
  country: string;

  @Column("varchar", { name: "documentNumber", length: 24 })
  documentNumber: string;

  @Column("bigint", { name: "documentPhotoId", nullable: true })
  documentPhotoId: string | null;

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

  @Column("varchar", { name: "password", length: 1000 })
  password: string;

  @Column("varchar", { name: "profession", length: 64 })
  profession: string;

  @Column("bigint", { name: "profilePhotoId", nullable: true })
  profilePhotoId: string | null;

  @Column("varchar", { name: "rg", nullable: true, length: 15 })
  rg: string | null;

  @Column("varchar", { name: "state", length: 100 })
  state: string;

  @Column("varchar", { name: "street", length: 250 })
  street: string;

  @Column("varchar", { name: "zipCode", length: 15 })
  zipCode: string;

  @OneToMany(() => Reservation, (reservation) => reservation.mainGuest)
  reservations: Reservation[];

  @OneToMany(() => Dependent, (dependent) => dependent.mainGuest)
  dependents: Dependent[];
}
