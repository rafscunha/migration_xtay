import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm'

/**
 * From checkin_media_content
 */
@Entity({ name: 'checking_media_content', schema: 'reservation' })
export class CheckinMediaContent{

  //from checkin_media_content.id
  @PrimaryGeneratedColumn("increment")
  id: number;

  //from checkin_media_content.type
  @Column({type:'varchar'})
  type: Date;

  //from checkin_media_content.keyName
  @Column({name: 'key_name', type:'varchar'})
  keyName: Date;
}