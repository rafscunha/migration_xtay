import { Column, Entity, OneToMany } from "typeorm";
import { ServicePropertyOld } from "./ServiceProperty";
import { UnitOld } from "./Unit";

@Entity("properties", { schema: "Xtay" })
export class PropertiesOld {
  @Column("varchar", { primary: true, name: "propertyPMSId", length: 255 })
  propertyPmsId: string;

  @Column("varchar", { name: "addrNumber", nullable: true, length: 255 })
  addrNumber: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "cep", nullable: true, length: 255 })
  cep: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("varchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "emailRecepcao", nullable: true, length: 255 })
  emailRecepcao: string | null;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  imageUrl: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "neighborhood", nullable: true, length: 255 })
  neighborhood: string | null;

  @Column("varchar", { name: "politic_url", nullable: true, length: 255 })
  politicUrl: string | null;

  @Column("varchar", { name: "state", nullable: true, length: 255 })
  state: string | null;

  @Column("varchar", { name: "timeZone", nullable: true, length: 255 })
  timeZone: string | null;

  @OneToMany(
    () => ServicePropertyOld,
    (serviceProperty) => serviceProperty.property
  )
  serviceProperties: ServicePropertyOld[];

  @OneToMany(() => UnitOld, (unit) => unit.propertyPms)
  units: UnitOld[];
}
