import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Index, PrimaryColumn} from 'typeorm'
import { Properties } from './xtay.properties.entity';


/**
 * from usuarios
 */
@Entity({ name: 'user', schema: 'management' })
export class User{

  //from usuarios.id
  @PrimaryColumn()
  id: number

  //from usuarios.email
  @Column({type: 'varchar', length: 100, nullable: false})
  email: string;

  //from usuarios.password
  @Column({type: 'varchar', length: 80, nullable: false})
  password: string;

  //from usuarios.usuario_name
  @Column({type: 'varchar', length: 80, nullable: false})
  @Index({unique: true})
  username: string;

  //from usuarios.data_de_registro
  @Column({name: 'record_date', type: 'date', default: () => 'NOW()'})
  recordDate: Date;

  //from usuarios.account_non_expired
  @Column({name: 'account_non_expired',type: 'bool', default: true})
  accountNonExpired: boolean;
  
  //from usuarios.account_non_locked
  @Column({name: 'account_non_locked',type: 'bool', default: true})
  accountNonLocked: boolean;

  //from usuarios.credentials_non_expired
  @Column({name: 'credentials_non_expired',type: 'bool', default: true})
  credentialsNonExpired: boolean;

  //from usuarios.enabled
  @Column({type: 'bool', default: true})
  active: boolean;

  // @Column({type: 'bool', default: true})
  // verified: boolean;

}