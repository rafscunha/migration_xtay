import { DataSource } from "typeorm";
import { User } from "../entity/management.user.entity";
import { GUEST_GENDER, Guest } from "../entity/xtay.guest.entity";
import { GuestDocument } from "../entity/xtay.guest_document.entity";
import { GuestAddress } from "../entity/xtay.guest_address.entity";
import { Dependent } from "../entities-old/Dependent";
import { MainGuest } from "../entities-old/MainGuest";

export async function migrationsDependent(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Guest (dependents) Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldDependent = mariadb.getRepository(Dependent);
  const repositoryOldMainGuest = mariadb.getRepository(MainGuest);
  const repositoryGuest = postgres.getRepository(Guest);
  const repositoryUser = postgres.getRepository(User);
  const repositoryGuestDocument = postgres.getRepository(GuestDocument);
  const repositoryGuestAddress = postgres.getRepository(GuestAddress);

  const [listOldDependent, countOld] = await repositoryOldDependent.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldDependent))/1024)} KB`)


  for (const old of listOldDependent) {
    let guest = new Guest();
    guest.id = 100000 + Number(old.dependentId);
    //console.log('>>', 1000000 + old.dependentId, ' : ', 1000000 + Number(old.dependentId) ) 
    guest.cellPhone = old.mobilePhoneNumber;
    guest.fullName = old.name;
    guest.birthDate = old.birthDate;
    guest.gender = old.gender ? GUEST_GENDER[old.gender] : GUEST_GENDER[GUEST_GENDER.OTHERS];
    guest.profession = old.profession;
    guest.citizenship = old.citizenship;
    guest.profilePhotoId = null;
    guest.documentPhotoId = null;
    guest.clientPmsId = null; // unknown
    guest.verified = true;

    //TODO: aqui vai mudar isso
    // const mainGuest = await repositoryOldMainGuest.findOne({where: {mainGuestId: old.mainGuestId}});
    // const user = await repositoryUser.findOne({where: {email: mainGuest.email}});
    // const newGuest = await repositoryGuest.find({where: {user: user}});
    const newGuest = await repositoryGuest.find({where: {id: old.mainGuestId}});
    guest.reservations = []

    try{
      //await repositoryGuest.insert(guest);
      guest.guests = newGuest
      await repositoryGuest.save(guest);

      const document = new GuestDocument();
      document.guest = guest;
      document.documentNumber = old.documentNumber;
      document.documentType = old.documentType;
      await repositoryGuestDocument.insert(document);
  
      const address = new GuestAddress();
      address.guest = guest;
      address.city = old.city;
      address.country = old.country;
      address.neighborhood = old.neighborhood;
      address.number = old.number;
      address.state = old.state;
      address.street = old.street;
      address.zipcode = old.zipCode;
      await repositoryGuestAddress.insert(address)
      
    }catch( e ){
      if (toShow) console.error(e);
      continue;
    }


  }
  const countMigrated =  await repositoryUser.count()
  console.log(`Migrated ${countMigrated} / ${countOld} - Complete`)
}
