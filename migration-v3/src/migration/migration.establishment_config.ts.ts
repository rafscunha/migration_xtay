import { DataSource } from "typeorm";
import { EstablishmentConfigOld } from "../entities-old/EstablishmentConfig";
import { EstablishmentConfig } from "../entity/xtay.establishment_config.entity";
import { EstablishmentConfigContacts } from "../entity/xtay.establishment_config_contacts.entity";
import { EstablishmentConfigAddress } from "../entity/xtay.establishment_config_address.entity";


export async function migrationsEstablishmentConfig(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of EstablishmentConfig Table ...')
  console.log('Starting migration of EstablishmentConfigContact Table ...')
  console.log('Starting migration of EstablishmentConfigAddress Table ...')
  const repositoryOldEstablishmentConfig = mariadb.getRepository(EstablishmentConfigOld);
  const repositoryEstablishmentConfig = postgres.getRepository(EstablishmentConfig);
  const repositoryEstablishmentContact = postgres.getRepository(EstablishmentConfigContacts);
  const repositoryEstablishmentAddress = postgres.getRepository(EstablishmentConfigAddress);
  const [listOldEstablishmentConfig, countOld] = await repositoryOldEstablishmentConfig.findAndCount();
  console.log(`To migration: ${countOld}`)
  const toShow = process.env.TO_LOG == 'true' || false

  // await repositoryEstablishmentContact.delete({})
  // await repositoryEstablishmentAddress.delete({})
  // await repositoryEstablishmentConfig.delete({})

  for (const app of listOldEstablishmentConfig) {
    const contact = new EstablishmentConfigContacts();
    const address = new EstablishmentConfigAddress();
    const establishmentConfig = new EstablishmentConfig();

    establishmentConfig.id = app.establishmentConfigId;
    establishmentConfig.information = app.information;
    establishmentConfig.addrWebsite = app.addrWebsite;
    establishmentConfig.timeZone = app.timeZone;
    establishmentConfig.checkin = app.checkin;
    establishmentConfig.checkout = app.checkout;
    establishmentConfig.urlItunes = app.urlItunes;
    establishmentConfig.urlPlayStore = app.urlPlayStore;
    establishmentConfig.urlWeb = app.urlWeb;
    establishmentConfig.hasPaymentGateway = app.hasPaymentGateway;
    establishmentConfig.hasAirbnbAutomaticPayment = app.hasAirbnbAutomaticPayment;
    establishmentConfig.hasBookingAutomaticPayment = app.hasBookingAutomaticPayment;
    establishmentConfig.hasBuklyBookingAutomaticPayment = app.hasBuklyBookingAutomaticPayment;
    //establishmentConfig.checkingWeb = app.checkinWeb;
    establishmentConfig.hasOwnerInvoice = app.hasOwnerInvoice;
    establishmentConfig.minimalPrice = establishmentConfig.minimalPrice || 0;
    try{
      await repositoryEstablishmentConfig.insert(establishmentConfig);
  
      contact.contactType = "" //unknown
      contact.establishment_id = establishmentConfig.id;
      contact.information = app.information;
      await repositoryEstablishmentContact.insert(contact);
  
      address.establishment_id = establishmentConfig.id;
      address.city = app.city;
      address.country = app.country;
      address.neighborhood = ''; //unknown
      address.number = app.addrNumber;
      address.state = app.state;
      address.street = app.address;
      address.zipcode = app.cep;
      await repositoryEstablishmentAddress.insert(address);
    } catch(e) {
      if (toShow) console.error(e);
      continue;
    }

  }
  const countMigrated =  await repositoryEstablishmentConfig.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}