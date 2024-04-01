import { DataSource } from "typeorm";
import { EmailOld } from "../entities-old/Email";
import { Email } from "../entity/management.email.entity";

export async function migrationsEmail(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Email Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldEmail = mariadb.getRepository(EmailOld);
  const repositoryEmail = postgres.getRepository(Email);
  const [listOldEmail, countOld] = await repositoryOldEmail.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldEmail))/1024)} KB`)


  for (const old of listOldEmail) {
    const email = new Email;
    email.id = old.id;
    email.emailFrom = old.emailFrom;
    email.emailTo = old.emailTo;
    email.subject = old.subject;
    email.body = old.body;
    email.sendGridId = old.sendGridId || "";
    email.countRetrySendGrid = old.countRetrySendgrid;
    email.emailDate = old.date;
    try{
      await repositoryEmail.insert(email);
    } catch(e) {
      if (toShow) console.error(e);
      continue;
    }

  }
  const countMigrated =  await repositoryEmail.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
