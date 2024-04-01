import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { Guest } from './xtay.guest.entity';

/**
 * from main_guest ot dependents
 */
@Entity({ name: 'guest_address', schema: 'xtay' })
export class GuestAddress{

  @OneToOne(()=> Guest)
  @JoinColumn({name: 'guest_id'})
  guest: Guest;

  //from main_guest.documentNumber
  @Column({name: 'document_number', type: 'varchar', length: 24, nullable: false})
  documentNumber: string

  //from main_guest.
  @Column({type: 'varchar', length: 24, nullable: false})
  city: string;

  //from main_guest.country
  @Column({type: 'varchar', length: 255, nullable: false})
  country: string;

  //from main_guest.neighborhood
  @Column({type: 'varchar', length: 80, nullable: false})
  neighborhood: string;

  //from main_guest.number
  @Column({type: 'varchar', length: 6, nullable: false})
  number: string;

  //from main_guest.state
  @Column({type: 'varchar', length: 100, nullable: false})
  state: string;

  //from main_guest.street
  @Column({type: 'varchar', length: 250, nullable: false})
  street: string;

  //from main_guest.zipCode
  @Column({type: 'varchar', length: 15, nullable: false})
  zipcode: string;

}