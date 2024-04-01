import { DataSource } from "typeorm";
import { ApplicationSystem } from "../entity/xtay.application_system.entity";
import { ApplicationSystemOld } from "../entities-old/ApplicationSystem";


export async function migrationsApplicationSystem(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of ApplicationSystem Table ...')
  const repositoryOldApplicationSystem = mariadb.getRepository(ApplicationSystemOld);
  const repositoryApplicationSystem = postgres.getRepository(ApplicationSystem);
  const [listOldApplicationSystem, countOld] = await repositoryOldApplicationSystem.findAndCount();
  console.log(`To migration: ${countOld}`)
  const toShow = process.env.TO_LOG == 'true' || false

  for (const app of listOldApplicationSystem) {
    const applicationSystem = new ApplicationSystem();
    applicationSystem.id = Number(app.applicationSystemId);
    applicationSystem.css = app.css;
    applicationSystem.name = app.name;
    //applicationSystem.buttonEmailUrl = app.bottomEmailUrl;
    applicationSystem.headerEmailUrl = app.headerEmailUrl;
    applicationSystem.senderEmail = app.senderEmail;
    try {
      await repositoryApplicationSystem.insert(applicationSystem);
    } catch (e) {
      if (toShow) console.error(e);
      continue;
    }
  }
  const countMigrated =  await repositoryApplicationSystem.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}