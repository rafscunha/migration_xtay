import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyOld } from "./Company";

@Entity("application_system", { schema: "Xtay" })
export class ApplicationSystemOld {
  @PrimaryGeneratedColumn({ type: "bigint", name: "applicationSystemId" })
  applicationSystemId: string;

  @Column("varchar", { name: "bottomEmailUrl", nullable: true, length: 255 })
  bottomEmailUrl: string | null;

  @Column("varchar", { name: "css", nullable: true, length: 10000 })
  css: string | null;

  @Column("varchar", { name: "headerEmailUrl", nullable: true, length: 255 })
  headerEmailUrl: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "senderEmail", nullable: true, length: 255 })
  senderEmail: string | null;

  @OneToMany(() => CompanyOld, (company) => company.applicationSystem)
  companies: CompanyOld[];
}
