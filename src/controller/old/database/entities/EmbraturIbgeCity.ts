import { Column, Entity } from "typeorm";

@Entity("embratur_ibge_city", { schema: "Xtay" })
export class EmbraturIbgeCity {
  @Column("bigint", { primary: true, name: "embraturIbgeCityId" })
  embraturIbgeCityId: string;

  @Column("varchar", { name: "name", nullable: true, length: 250 })
  name: string | null;

  @Column("varchar", { name: "uf", nullable: true, length: 250 })
  uf: string | null;
}
