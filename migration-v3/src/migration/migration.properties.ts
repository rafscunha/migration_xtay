import { DataSource } from "typeorm";
import { PropertiesOld } from "../entities-old/Properties";
import { Properties } from "../entity/xtay.properties.entity";
import { PropertiesAddress } from "../entity/xtay.properties_address.entity";

export async function migrationsProperties(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Properties and PropertiesAddress Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldProperty = mariadb.getRepository(PropertiesOld);
  const repositoryProperty = postgres.getRepository(Properties);
  const repositoryPropertyAddress = postgres.getRepository(PropertiesAddress)

  const [listOldProperty, countOld] = await repositoryOldProperty.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldProperty))/1024)} KB`)

  let i = 1
  for (const old of listOldProperty) {
    let property = new Properties();
    property.id = i;
    property.propertyPmsId = old.propertyPmsId;
    property.name = old.name;
    property.description = old.description;
    property.politicUrl = old.politicUrl;
    property.imageUrl = old.imageUrl;
    property.emailRecepcao = old.emailRecepcao;
    property.timeZone = old.timeZone;
    i += 1;
    try{
      await repositoryProperty.insert(property);
      const address = new PropertiesAddress();
      address.properties_id = property.id
      address.city = old.city;
      address.country = old.country;
      address.neighborhood = old.neighborhood;
      address.number = old.addrNumber;
      address.state = old.state;
      address.street = old.address;
      address.zipcode = old.cep;
  
      await repositoryPropertyAddress.insert(address)
    } catch(e) {
      if (toShow) console.error(e);
      continue;
    }

  }
  const countMigrated =  await repositoryProperty.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
