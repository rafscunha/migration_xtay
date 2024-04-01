import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("checkin_config", { schema: "Xtay" })
export class CheckinConfig {
  @PrimaryGeneratedColumn({ type: "bigint", name: "checkinConfigId" })
  checkinConfigId: string;

  @Column("varchar", {
    name: "emailCheckinConfig",
    nullable: true,
    length: 255,
  })
  emailCheckinConfig: string | null;
}
