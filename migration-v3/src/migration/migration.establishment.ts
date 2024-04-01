import { DataSource } from "typeorm";
import { EstablishmentConfig } from "../entity/xtay.establishment_config.entity";
import { EstablishmentOld } from "../entities-old/Establishment";
import { Establishment } from "../entity/xtay.establishment.entity";
import { Company } from "../entity/xtay.company.entity";


export async function migrationsEstablishment(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Establishment Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  const repositoryOldEstablishment = mariadb.getRepository(EstablishmentOld);
  const repositoryCompany = postgres.getRepository(Company);
  const repositoryEstablishmentConfig = postgres.getRepository(EstablishmentConfig);
  const repositoryEstablishment = postgres.getRepository(Establishment);
  const [listOldEstablishment, countOld] = await repositoryOldEstablishment.findAndCount();
  console.log(`To migration: ${countOld}`)

  for (const app of listOldEstablishment) {
    const establishment = new Establishment();

    establishment.id = Number(app.establishmentId);
    establishment.name = app.name;
    establishment.documentNumber = app.documentNumber;
    establishment.description = app.description;
    //establishment.userStay = app.userStays;
    establishment.passwordStays = app.passwordStays;
    establishment.establishmentType = app.establishmentType;
    establishment.company = await repositoryCompany.findOne({ where: {id: Number(app.companyId)} });
    //establishment.establishmentConfig = await repositoryEstablishmentConfig.findOne({ where: {id: Number(app.establishmentConfigId)} })
    try{
      await repositoryEstablishment.insert(establishment);
    } catch(e) {
      if (toShow) console.error(e);
      continue;
    }
  }
  const countMigrated =  await repositoryEstablishment.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}