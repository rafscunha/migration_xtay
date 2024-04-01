import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { Guest } from './xtay.guest.entity';

/**
 * from main_guest or dependets
 */
@Entity({ name: 'guest_document', schema: 'xtay' })
export class GuestDocument{

  @OneToOne(()=> Guest)
  @JoinColumn({name: 'guest_id'})
  guest: Guest;

  //from main_guest.documentNumber
  @Column({name: 'document_number', type: 'varchar', length: 24, nullable: false})
  documentNumber: string

  //from main_guest.documentType
  @Column({name: 'document_type', type: 'tinyint'})
  documentType: string

}