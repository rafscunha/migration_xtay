import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UsuarioRoles } from "./UsuarioRoles";

@Index("uc_usuarios_usuario_name", ["usuarioName"], { unique: true })
@Entity("usuarios", { schema: "Xtay" })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: number;

  @Column("varchar", { name: "usuario_name", unique: true, length: 80 })
  usuarioName: string;

  @Column("varchar", { name: "first_name", length: 50 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 100 })
  lastName: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("varchar", { name: "password", length: 80 })
  password: string;

  @Column("date", { name: "data_de_registro" })
  dataDeRegistro: Date;

  @Column("bit", { name: "account_non_expired" })
  accountNonExpired: boolean;

  @Column("bit", { name: "account_non_locked" })
  accountNonLocked: boolean;

  @Column("bit", { name: "credentials_non_expired" })
  credentialsNonExpired: boolean;

  @Column("bit", { name: "enabled" })
  enabled: boolean;

  @OneToMany(() => UsuarioRoles, (usuarioRoles) => usuarioRoles.usuario)
  usuarioRoles: UsuarioRoles[];
}
