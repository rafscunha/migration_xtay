import { Column, Entity } from "typeorm";

@Entity("authentication", { schema: "Xtay" })
export class Authentication {
  @Column("bigint", { primary: true, name: "authenticationId" })
  authenticationId: string;

  @Column("datetime", { name: "expirationDate", nullable: true })
  expirationDate: Date | null;

  @Column("varchar", { name: "token", nullable: true, length: 255 })
  token: string | null;

  @Column("varchar", { name: "username", nullable: true, length: 255 })
  username: string | null;
}
