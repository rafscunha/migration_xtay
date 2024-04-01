import { Entity, OneToOne, JoinColumn} from 'typeorm'
import { Guest } from './xtay.guest.entity';
import { Reservation } from './reservation.reservation.entity';


@Entity({ name: 'reservation_dependent', schema: 'xtay' })
export class ReservationDependent{

  @OneToOne(()=> Reservation)
  @JoinColumn({name: 'reservation_id'})
  reservation: Reservation;

  @OneToOne(()=> Guest)
  @JoinColumn({name: 'dependent_id'})
  dependent: Guest;

}