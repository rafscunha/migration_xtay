import { DataSource } from "typeorm";
import { Properties } from "../entity/xtay.properties.entity";
import { UnitOld } from "../entities-old/Unit";
import { Unit } from "../entity/management.unit.entity";

export async function migrationsUnit(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Unit Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldUnit = mariadb.getRepository(UnitOld);
  const repositoryUnit = postgres.getRepository(Unit);
  const repositoryProperty = postgres.getRepository(Properties);

  const [listOldUnit, countOld] = await repositoryOldUnit.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldUnit))/1024)} KB`)

  let index = 1;
  for (const old of listOldUnit) {

    let unit = new Unit();
    unit.id = index;
    unit.listingPmsId = old.listingPmsId;
    unit.name = old.name;
    unit.areasGroupMagikey = old.areasGroupMagikey || '';
    unit.smartLock = old.smartlock || '';
    unit.magikeyToken = old.magikeyToken;
    unit.number = old.number;
    unit.guestsQuantityAllowed = old.guestsQuantityAllowed;
    unit.wifi_password = old.fixedPassword;
    unit.wifi_ssid = null;//unknown
    unit.category_pms_id = old.propertyPmsId;
    index += 1;
    
    try{
      await repositoryUnit.insert(unit);
    } catch(e){
      if (toShow) console.error(e);
      continue;
    }
  }
  const countMigrated =  await repositoryUnit.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
