import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

/**
 * from properties
 */
@Entity({ name: 'properties', schema: 'xtay' })
export class Properties{

  @PrimaryGeneratedColumn("increment")
  id?: number;

  //from properties.propertyPMSId
  @Column({name:'property_pms_id', type: 'varchar'})
  propertyPmsId?: string;

  //from properties.name
  @Column({type: 'varchar'})
  name?: string;

  //from properties.description
  @Column({type: 'varchar'})
  description?: string;

  //from properties.politic_url
  @Column({name:'politic_url', type: 'varchar'})
  politicUrl?: string;

  //from properties.image_url
  @Column({name:'image_url', type: 'varchar'})
  imageUrl?: string;

  //from properties.emailRecepcao
  @Column({name:'email_recepcao', type: 'varchar'})
  emailRecepcao?: string;

  //from properties.timeZone
  @Column({name:'time_zone', type: 'varchar'})
  timeZone?: string;

}