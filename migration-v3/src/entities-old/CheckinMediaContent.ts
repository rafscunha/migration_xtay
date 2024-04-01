import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("checkin_media_content", { schema: "Xtay" })
export class CheckinMediaContentOld {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: number;

  @Column("varchar", { name: "keyName", nullable: true, length: 255 })
  keyName: string | null;

  @Column("tinyint", { name: "type", nullable: true })
  type: number | null;
}
