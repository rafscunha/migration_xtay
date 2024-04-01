import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ReservationOld } from "./Reservation";
import { PropertiesOld } from "./Properties";

@Index("FK4rxew0bxnetbq4ln3391fvnum", ["propertyPmsId"], {})
@Entity("unit", { schema: "Xtay" })
export class UnitOld {
  @Column("varchar", { primary: true, name: "listing_pms_id", length: 255 })
  listingPmsId: string;

  @Column("bigint", { name: "areasGroupMagikey", nullable: true })
  areasGroupMagikey: string | null;

  @Column("varchar", { name: "fixedPassword", nullable: true, length: 255 })
  fixedPassword: string | null;

  @Column("int", { name: "guestsQuantityAllowed", nullable: true })
  guestsQuantityAllowed: number | null;

  @Column("varchar", { name: "magikeyToken", nullable: true, length: 255 })
  magikeyToken: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "number", nullable: true, length: 8 })
  number: string | null;

  @Column("bigint", { name: "smartlock", nullable: true })
  smartlock: string | null;

  @Column("varchar", { name: "property_pms_id", nullable: true, length: 255 })
  propertyPmsId: string | null;

  @OneToMany(() => ReservationOld, (reservation) => reservation.categoryPms)
  reservations: ReservationOld[];

  @OneToMany(() => ReservationOld, (reservation) => reservation.listingPms)
  reservations2: ReservationOld[];

  @ManyToOne(() => PropertiesOld, (properties) => properties.units, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "property_pms_id", referencedColumnName: "propertyPmsId" },
  ])
  propertyPms: PropertiesOld;
}
