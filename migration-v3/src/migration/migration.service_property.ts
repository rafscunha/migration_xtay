import { DataSource } from "typeorm";
import { ServicePropertyOld } from "../entities-old/ServiceProperty";
import { ServiceProperty } from "../entity/management.service_property.entity";
import { Properties } from "../entity/xtay.properties.entity";

export async function migrationsServiceProperty(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of serviceProperty Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldServiceProperty = mariadb.getRepository(ServicePropertyOld);
  const repositoryServiceProperty = postgres.getRepository(ServiceProperty);
  const repositoryProperty = postgres.getRepository(Properties);

  const [listOldServiceProperty, countOld] = await repositoryOldServiceProperty.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldServiceProperty))/1024)} KB`)

  for (const old of listOldServiceProperty) {

    let service = new ServiceProperty();
    service.id = old.id;
    service.name = old.name;
    service.price = null; //unknown;
    service.description = old.description;
    try{
      await repositoryServiceProperty.insert(service);
      const properties = await repositoryProperty.find({where: {propertyPmsId: old.propertyId}})
      service.properties = properties
      await repositoryServiceProperty.save(service);
    } catch (e) {
      if (toShow) console.error(e);
      continue;
    }

  }
  const countMigrated =  await repositoryServiceProperty.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
