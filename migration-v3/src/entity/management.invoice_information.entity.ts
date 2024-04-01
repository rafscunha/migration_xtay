import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { Reservation } from './reservation.reservation.entity';

/**
 * FROM invoice_information
 */
@Entity({ name: 'invoice_information', schema: 'management' })
export class InvoiceInformation{

  @PrimaryColumn('bigint', { unique: true })
  id: number;

  @OneToOne(()=> Reservation)
  @JoinColumn({name: 'reservation_id'})
  reservation: Reservation

  //from invoice_information.autoSend
  @Column({name: 'auto_send' ,type: 'bool', default: null})
  autoSend: boolean;

  //from invoice_information.contribuinteIcms
  @Column({name: 'contribuinte_icms' ,type: 'bool', default: null})
  contribuientIcms: boolean;

  //from invoice_information.optanteSimplesNacional
  @Column({name: 'optante_simples_nacional' ,type: 'bool', default: null})
  optanteSimplesNacional: boolean;

}