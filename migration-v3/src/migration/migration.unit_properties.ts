import { DataSource } from "typeorm";
import { Properties } from "../entity/xtay.properties.entity";
import { UnitOld } from "../entities-old/Unit";
import { Unit } from "../entity/management.unit.entity";

export async function migrationsUnitProperties(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Unit Properties Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryUnit = postgres.getRepository(Unit);
  const repositoryProperty = postgres.getRepository(Properties);

  const [listUnit, countOld] = await repositoryUnit.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listUnit))/1024)} KB`)


  for (const unit of listUnit) {

    const properties = await repositoryProperty.find({where: {propertyPmsId: unit.category_pms_id}})
    unit.properties = properties;
    
    try{
      await repositoryUnit.save(unit);
    } catch(e){
      if (toShow) console.error(e);
      continue;
    }
  }
  const countMigrated =  await repositoryUnit.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
