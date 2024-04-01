import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email", { schema: "Xtay" })
export class EmailOld {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: number;

  @Column("varchar", { name: "awsID", nullable: true, length: 255 })
  awsId: string | null;

  @Column("longtext", { name: "body", nullable: true })
  body: string | null;

  @Column("int", { name: "countRetryAws", nullable: true })
  countRetryAws: number | null;

  @Column("int", { name: "countRetrySendgrid", nullable: true })
  countRetrySendgrid: number | null;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("varchar", { name: "emailFrom", nullable: true, length: 255 })
  emailFrom: string | null;

  @Column("varchar", { name: "emailTo", nullable: true, length: 255 })
  emailTo: string | null;

  @Column("varchar", { name: "nameFile", nullable: true, length: 255 })
  nameFile: string | null;

  @Column("varchar", { name: "pathFile", nullable: true, length: 255 })
  pathFile: string | null;

  @Column("varchar", { name: "sendGridID", nullable: true, length: 255 })
  sendGridId: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 255 })
  status: string | null;

  @Column("varchar", { name: "statusAws", nullable: true, length: 255 })
  statusAws: string | null;

  @Column("varchar", { name: "statusSendGrid", nullable: true, length: 255 })
  statusSendGrid: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;
}
