import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Establishment } from "./Establishment";
import { ApplicationSystem } from "./ApplicationSystem";

@Index("FK5fm4jny8mj0ac9a7ttsco0426", ["applicationSystemId"], {})
@Entity("company", { schema: "Xtay" })
export class Company {
  @PrimaryGeneratedColumn({ type: "bigint", name: "companyId" })
  companyId: string;

  @Column("varchar", { name: "appName", nullable: true, length: 255 })
  appName: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("varchar", { name: "documentNumber", nullable: true, length: 255 })
  documentNumber: string | null;

  @Column("varchar", { name: "expediaId", nullable: true, length: 255 })
  expediaId: string | null;

  @Column("varchar", { name: "expediaPassword", nullable: true, length: 255 })
  expediaPassword: string | null;

  @Column("varchar", { name: "expediaUser", nullable: true, length: 255 })
  expediaUser: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("bigint", { name: "applicationSystemId", nullable: true })
  applicationSystemId: string | null;

  @OneToMany(() => Establishment, (establishment) => establishment.company)
  establishments: Establishment[];

  @ManyToOne(
    () => ApplicationSystem,
    (applicationSystem) => applicationSystem.companies,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    {
      name: "applicationSystemId",
      referencedColumnName: "applicationSystemId",
    },
  ])
  applicationSystem: ApplicationSystem;
}
