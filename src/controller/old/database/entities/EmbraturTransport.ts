import { Column, Entity } from "typeorm";

@Entity("embratur_transport", { schema: "Xtay" })
export class EmbraturTransport {
  @Column("bigint", { primary: true, name: "embraturTransportId" })
  embraturTransportId: string;

  @Column("varchar", { name: "name", nullable: true, length: 250 })
  name: string | null;
}
