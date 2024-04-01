import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, JoinTable} from 'typeorm'

/**
 * from main_guest or dependets
 */
@Entity('guest', { schema: 'xtay' })
export class Guest{

  @PrimaryGeneratedColumn("increment")
  id: number;

  //from main_guest.mobilePhoneNumber
  @Column({name: 'cell_phone', type: 'varchar', length: 24, nullable: false})
  cellPhone: string;

  //from main_guest.name
  @Column({name: 'full_name', type: 'varchar', length: 80, nullable: false})
  full_name: string;

  // from main_guest.birthDate
  @Column({name: 'birth_date', type: 'date'})
  birthDate: Date;

  //from main_guest.gender
  @Column({type: 'bool', default: null})
  gender: boolean;

  //from main_guest.profession
  @Column({ type: 'varchar', length: 64, nullable: false})
  profession: string;

  //from main_guest.citizenship
  @Column({ type: 'varchar', nullable: false})
  citizenship: string;

  // from main_guest.profilePhotoId
  @Column({name: 'profile_photo_id', type: 'bigint'})
  profilePhotoId: number;

  // from main_guest.documentPhotoId
  @Column({name: 'document_photo_id', type: 'bigint'})
  documentPhotoId: number;

  // unknown
  @Column({name: 'user_id', type: 'bigint'})
  user_id: number;

  // from unknown.
  @Column({name: 'client_pms_id', type: 'bigint'})
  client_pms_id: number;

  @ManyToMany(()=> Guest, (guest) => guest.dependents)
  @JoinTable({
    name: 'guest_dependent',
    joinColumn: {name: 'guest_id', referencedColumnName: 'id'},
    inverseJoinColumn: {name: 'dependent_id', referencedColumnName: 'id'},
  })
  guests: Guest[];

  @ManyToMany(() => Guest, (guest) => guest.guests)
  @JoinTable({
    name: 'guest_dependent',
    joinColumn: {name: 'dependent_id', referencedColumnName: 'id'},
    inverseJoinColumn: {name: 'guest_id', referencedColumnName: 'id'},
  })
  dependents: Guest[];

}