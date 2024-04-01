import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
/**
 * from unit
 */
@Entity({ name: 'unit', schema: 'management' })
export class Unit{

  @PrimaryGeneratedColumn("increment")
  id: number

  //from unit.listing_pms_id
  @Column({name:'listing_pms_id', type: 'varchar'})
  listingPmsId: string;

  //from unit.name
  @Column({type: 'varchar'})
  name: string;

  //from unit.areasGroupMagikey
  @Column({name: 'areas_group_magikey', type: 'varchar'})
  areasGroupMagikey: string;

  //from unit.smartlock
  @Column({name:'smart_lock', type: 'bigint'})
  smartLock: number;

  //from unit.magikeyToken
  @Column({name:'magikey_token', type: 'varchar'})
  magikeyToken: string;

  //from unit.number
  @Column({type: 'varchar', length: 8})
  number: number;

  //from unit.guestsQuantityAllowed
  @Column({name: 'guest_quantity_allowed', type: 'int'})
  guestsQuantityAllowed: number;

  //from unit.fixedPassword
  @Column({name: 'wifi_password', type: 'varchar'})
  wifi_password: string;

  //unknown
  @Column({type: 'varchar'})
  wifi_ssid:string;

  //make a reference with properties unit table (weird)
  //from unit.category_pms_id
  @Column({type: 'bigint'})
  category_pms_id: number;

}