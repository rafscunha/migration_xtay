import { Column, Entity } from "typeorm";

@Entity("embratur_reason", { schema: "Xtay" })
export class EmbraturReason {
  @Column("bigint", { primary: true, name: "embraturReasonId" })
  embraturReasonId: string;

  @Column("varchar", { name: "name", nullable: true, length: 250 })
  name: string | null;
}
