import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinColumn, JoinTable, OneToOne, PrimaryColumn, Index} from 'typeorm'
import { Reservation } from './reservation.reservation.entity';
import { User } from './management.user.entity';

export enum GUEST_GENDER {
  MALE,
  FEMALE,
  NON_BINARY,
  OTHERS,
}


/**
 * from main_guest or dependets
 */
@Entity('guest', { schema: 'xtay' })
export class Guest{

  @PrimaryColumn()
  id: number;

  // //Temporario
  // @Column({type: 'bigint'})
  // @Index({unique: true})
  // oldId: number

  //from main_guest.mobilePhoneNumber
  @Column({name: 'cell_phone', type: 'varchar', length: 24, nullable: false})
  cellPhone: string;

  //from main_guest.name
  @Column({name: 'full_name', type: 'varchar', length: 80, nullable: false})
  fullName: string;

  // from main_guest.birthDate
  @Column({name: 'birth_date', type: 'timestamp'})
  birthDate: Date;

  //from main_guest.gender
  @Column({type: 'varchar', enum: GUEST_GENDER})
  gender: string;

  //from main_guest.profession
  @Column({ type: 'varchar', length: 64, nullable: false})
  profession: string;

  //from main_guest.citizenship
  @Column({ type: 'varchar', nullable: false})
  citizenship: string;

  // from main_guest.profilePhotoId
  @Column({name: 'profile_photo_id', type: 'int', nullable: true})
  profilePhotoId: number;

  // from main_guest.documentPhotoId
  @Column({name: 'document_photo_id', type: 'bigint', nullable: true})
  documentPhotoId: number;

  // unknown
  @OneToOne(()=> User)
  @JoinColumn({name: 'user_id'})
  user: User;

  // unknown
  @Column({name: 'client_pms_id', type: 'bigint', nullable: true})
  clientPmsId: number;

  @ManyToMany(()=> Guest )
  @JoinTable({
    name: 'guest_dependent',
    inverseJoinColumn: {name: 'guest_id', referencedColumnName: 'id'},
    joinColumn: {name: 'dependent_id', referencedColumnName: 'id'},
  })
  guests: Guest[];

  @ManyToMany(()=> Reservation)
  @JoinTable({
    schema: 'reservation',
    name: 'reservation_dependent',
    inverseJoinColumn: {name: 'reservations_id', referencedColumnName: 'id'},
    joinColumn: {name: 'dependent_id', referencedColumnName: 'id'},
  })
  reservations: Reservation[];

  @Column({type: 'bool', default: true})
  verified: boolean
}