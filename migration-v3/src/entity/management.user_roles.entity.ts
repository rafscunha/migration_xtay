import { Entity, Column,  PrimaryColumn, OneToOne, JoinColumn} from 'typeorm'
import { User } from './management.user.entity';


/**
 * from usuario_roles
 */
@Entity({ name: 'user_roles', schema: 'management' })
export class UserRoles{

  //from usuario_roles.usuario_id
  @PrimaryColumn({name: 'user_id'})
  user_id: number;

  @OneToOne(()=> User)
  @JoinColumn({name: 'user_id'})
  userId: User;

  //from usuario_roles.roles
  @Column({type: 'varchar'})
  roles: string;
}