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
import { EstablishmentConfig } from "./EstablishmentConfig";
import { Company } from "./Company";
import { Reservation } from "./Reservation";

@Index("UK_957uo1o0nfyaeaokjjly6sp23", ["establishmentConfigId"], {
  unique: true,
})
@Index("FKjyje4rmmgk85macx1icleuc5b", ["companyId"], {})
@Entity("establishment", { schema: "Xtay" })
export class Establishment {
  @PrimaryGeneratedColumn({ type: "bigint", name: "establishmentId" })
  establishmentId: string;

  @Column("bit", { name: "automaticCalculation", nullable: true })
  automaticCalculation: boolean | null;

  @Column("varchar", {
    name: "chaveAcessoEmbratur",
    nullable: true,
    length: 255,
  })
  chaveAcessoEmbratur: string | null;

  @Column("bit", { name: "checkinWeb", nullable: true })
  checkinWeb: boolean | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "documentNumber", nullable: true, length: 255 })
  documentNumber: string | null;

  @Column("tinyint", { name: "establishmentType", nullable: true })
  establishmentType: number | null;

  @Column("varchar", { name: "expediaPropertyId", nullable: true, length: 255 })
  expediaPropertyId: string | null;

  @Column("varchar", {
    name: "instanceWhatsAppId",
    nullable: true,
    length: 255,
  })
  instanceWhatsAppId: string | null;

  @Column("varchar", { name: "lastMinuteHour", nullable: true, length: 255 })
  lastMinuteHour: string | null;

  @Column("varchar", { name: "magikeyToken", nullable: true, length: 255 })
  magikeyToken: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "passwordStays", nullable: true, length: 255 })
  passwordStays: string | null;

  @Column("bigint", { name: "photoId", nullable: true })
  photoId: string | null;

  @Column("varchar", { name: "tokenAmplifiqueme", nullable: true, length: 255 })
  tokenAmplifiqueme: string | null;

  @Column("varchar", {
    name: "tokenAutomaticCheckin",
    nullable: true,
    length: 255,
  })
  tokenAutomaticCheckin: string | null;

  @Column("varchar", { name: "tokenWhatsApp", nullable: true, length: 255 })
  tokenWhatsApp: string | null;

  @Column("varchar", { name: "urlPhoto", nullable: true, length: 255 })
  urlPhoto: string | null;

  @Column("varchar", { name: "userStays", nullable: true, length: 255 })
  userStays: string | null;

  @Column("bigint", { name: "companyId", nullable: true })
  companyId: string | null;

  @Column("bigint", {
    name: "establishmentConfigId",
    nullable: true,
    unique: true,
  })
  establishmentConfigId: string | null;

  @OneToOne(
    () => EstablishmentConfig,
    (establishmentConfig) => establishmentConfig.establishment,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    {
      name: "establishmentConfigId",
      referencedColumnName: "establishmentConfigId",
    },
  ])
  establishmentConfig: EstablishmentConfig;

  @ManyToOne(() => Company, (company) => company.establishments, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "companyId", referencedColumnName: "companyId" }])
  company: Company;

  @OneToMany(() => Reservation, (reservation) => reservation.establishment)
  reservations: Reservation[];
}
