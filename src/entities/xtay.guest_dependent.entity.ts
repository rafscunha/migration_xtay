import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm'
import { Registration } from './reservation.registration.entity';
import { Guest } from './xtay.guest.entity';

@Entity({ name: 'guest_dependent', schema: 'xtay' })
export class GuestDependent{

  @OneToOne(()=> Guest)
  @JoinColumn({name: 'guest_id'})
  guest: Guest;

  @OneToOne(()=> Guest)
  @JoinColumn({name: 'dependent_id'})
  dependent: Guest;


}