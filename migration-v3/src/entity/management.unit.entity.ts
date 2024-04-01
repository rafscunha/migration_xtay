import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Index, PrimaryColumn} from 'typeorm'
import { Properties } from './xtay.properties.entity';
/**
 * from unit
 */
@Entity({ name: 'unit', schema: 'management' })
export class Unit{

  @PrimaryColumn()
  id: number;

  //from unit.listing_pms_id
  @Column({name:'listing_pms_id', type: 'varchar', nullable: true})
  @Index({unique: true})
  listingPmsId: string;

  //from unit.name
  @Column({type: 'varchar', nullable: true})
  name: string;

  //from unit.areasGroupMagikey
  @Column({name: 'areas_group_magikey', type: 'varchar', nullable: true})
  areasGroupMagikey: string;

  //from unit.smartlock
  @Column({name:'smart_lock', type: 'varchar', nullable: true})
  smartLock: string;

  //from unit.magikeyToken
  @Column({name:'magikey_token', type: 'varchar', nullable: true})
  magikeyToken: string;

  //from unit.number
  @Column({type: 'varchar', length: 8, nullable: true})
  number: string;

  //from unit.guestsQuantityAllowed
  @Column({name: 'guest_quantity_allowed', type: 'int', nullable: true})
  guestsQuantityAllowed: number;

  //from unit.fixedPassword
  @Column({name: 'wifi_password', type: 'varchar', nullable: true})
  wifi_password: string;

  //unknown
  @Column({type: 'varchar', nullable: true})
  wifi_ssid:string;

  //make a reference with properties unit table (weird)
  //from unit.category_pms_id
  @Column({type: 'varchar'})
  category_pms_id: string;


  @ManyToMany(()=> Properties)
  @JoinTable({
    name: 'properties_units',
    inverseJoinColumn: {name: 'properties_id', referencedColumnName: 'id'},
    joinColumn: {name: 'unit_id', referencedColumnName: 'id'},
  })
  properties: Properties[];

}