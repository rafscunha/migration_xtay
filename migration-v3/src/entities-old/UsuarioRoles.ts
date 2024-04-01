import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Usuarios } from "./Usuarios";

@Index("fk_usuario_roles_on_usuario", ["usuarioId"], {})
@Entity("usuario_roles", { schema: "Xtay" })
export class UsuarioRoles {

  @PrimaryColumn("bigint", { name: "usuario_id" })
  usuarioId: number;

  @Column("varchar", { name: "roles", nullable: true, length: 30 })
  roles: string | null;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.usuarioRoles, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: Usuarios;
}
