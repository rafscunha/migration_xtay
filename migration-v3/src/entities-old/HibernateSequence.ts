import { Column, Entity } from "typeorm";

@Entity("hibernate_sequence", { schema: "Xtay" })
export class HibernateSequence {
  @Column("bigint", { name: "next_val", nullable: true })
  nextVal: string | null;
}
