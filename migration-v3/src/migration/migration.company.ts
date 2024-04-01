import { DataSource } from "typeorm";
import { CompanyOld } from "../entities-old/Company";
import { Company } from "../entity/xtay.company.entity";

export async function migrationsCompany(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Company Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldCompany = mariadb.getRepository(CompanyOld);
  const repositoryCompany = postgres.getRepository(Company);
  const [listOldCompany, countOldCompany] = await repositoryOldCompany.findAndCount();
  console.log(`To migration: ${countOldCompany}`)

  for (const oldCompany of listOldCompany) {
    const company = new Company();
    company.id = Number(oldCompany.companyId);
    company.appName = oldCompany.appName;
    //company.applicationSystem = oldCompany.applicationSystem;
    company.description = oldCompany.description;
    company.documentNumber = oldCompany.documentNumber;
    company.name = oldCompany.name;
    try{
      await repositoryCompany.insert(company);
    } catch (e) {
      if (toShow) console.error(e);
      continue;
    }
  }
  const countMigrated =  await repositoryCompany.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
