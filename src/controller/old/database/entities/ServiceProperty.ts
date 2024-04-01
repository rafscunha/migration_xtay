import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Properties } from "./Properties";

@Index("FKckcx33yks7171a0q7hu28n6er", ["propertyId"], {})
@Entity("service_property", { schema: "Xtay" })
export class ServiceProperty {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "property_id", length: 255 })
  propertyId: string;

  @ManyToOne(() => Properties, (properties) => properties.serviceProperties, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "property_id", referencedColumnName: "propertyPmsId" }])
  property: Properties;
}
