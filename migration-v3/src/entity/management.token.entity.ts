import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Index, OneToMany, OneToOne, JoinColumn, PrimaryColumn} from 'typeorm'
import { Properties } from './xtay.properties.entity';
import { User } from './management.user.entity';


/**
 * from authentication
 */
@Entity({ name: 'token', schema: 'management' })
export class Token{

  //from authentication.authenticationId
  @PrimaryColumn('bigint', { unique: true })
  id?: number

  //from authentication.email
  @Column({type: 'timestamp'})
  expired?: Date;

  @Column({type: 'bool', default: false})
  revoked?: boolean;

  //from authentication.token
  @Column({type: 'varchar'})
  token?: string;

  @Column({name: 'token_type',type: 'varchar'})
  tokenType?: string;

  @OneToOne(()=> User)
  @JoinColumn({name:'user_id'})
  user: User;

}