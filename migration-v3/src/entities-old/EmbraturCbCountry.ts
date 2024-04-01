import { Column, Entity } from "typeorm";

@Entity("embratur_cb_country", { schema: "Xtay" })
export class EmbraturCbCountry {
  @Column("bigint", { primary: true, name: "embraturCbCountryId" })
  embraturCbCountryId: string;

  @Column("varchar", { name: "name", nullable: true, length: 250 })
  name: string | null;
}
