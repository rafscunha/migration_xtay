import { Entity, PrimaryGeneratedColumn, Column, Index, PrimaryColumn } from 'typeorm'

export enum ENUM_TYPE_CHECKIN {
  PROFILE_PHOTO,
  DOCUMENT_PHOTO,
  ESTABLISHMENT_PHOTO,
  SERVICE_ICON,
  ESTABLISHMENT_LOGO,
  BUILDING_PHOTO,
  BUILDING_LOGO,
  INVOICE_PDF
}

/**
 * From checkin_media_content
 */
@Entity({ name: 'checkin_media_content', schema: 'reservation' })
export class CheckinMediaContent{

  //from checkin_media_content.id
  @PrimaryColumn('bigint', { unique: true })
  id: number;

  //from checkin_media_content.type
  @Column({type:'enum', enum: ENUM_TYPE_CHECKIN})
  type: string;

  //from checkin_media_content.keyName
  @Column({name: 'key_name', type:'varchar'})
  keyName: string;
}