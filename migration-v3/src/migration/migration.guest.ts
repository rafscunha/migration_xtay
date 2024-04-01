import { DataSource, InsertResult } from "typeorm";
import { User } from "../entity/management.user.entity";
import { MainGuest } from "../entities-old/MainGuest";
import { GUEST_GENDER, Guest } from "../entity/xtay.guest.entity";
import { GuestDocument } from "../entity/xtay.guest_document.entity";
import { GuestAddress } from "../entity/xtay.guest_address.entity";

export async function migrationsGuest(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Guest (main_guest) Table ...')
  
  const repositoryOldGuest = mariadb.getRepository(MainGuest);
  const repositoryGuest = postgres.getRepository(Guest);
  const repositoryUser = postgres.getRepository(User);
  const repositoryGuestDocument = postgres.getRepository(GuestDocument);
  const repositoryGuestAddress = postgres.getRepository(GuestAddress);
  const toShow = process.env.TO_LOG == 'true' || false

  const [listOldGuest, countOld] = await repositoryOldGuest.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldGuest))/1024)} KB`)


  // await repositoryGuestDocument.delete({})
  // await repositoryGuestAddress.delete({})
  // await repositoryGuest.delete({});
  const verificado = []

  for (const old of listOldGuest) {
    let guest = new Guest();
    guest.id = old.mainGuestId;
    guest.cellPhone = old.mobilePhoneNumber;
    guest.fullName = old.name;
    guest.birthDate = verificaDataValida(old.birthDate)? old.birthDate : null;

    guest.gender = old.gender ? GUEST_GENDER[old.gender] : GUEST_GENDER[GUEST_GENDER.OTHERS];
    guest.profession = old.profession;
    guest.citizenship = old.citizenship;
    guest.profilePhotoId = old.profilePhotoId;
    guest.documentPhotoId = old.documentPhotoId;
    guest.clientPmsId = null // unknown
    guest.verified = true;
    let user = await repositoryUser.findOne({where: {email: old.email}})
    if (user){
      user.password = old.password;
      await repositoryUser.save(user);
    }else{
      user = new User();
      user.id = Number(10000 + guest.id);
      user.email = old.email;
      user.password = old.password;
      user.username = old.email;
      user.accountNonExpired = true;
      user.accountNonLocked = true;
      user.credentialsNonExpired = true;
      user.active = true;
      // user.verified = true;
      try{
        await repositoryUser.insert(user);
      } catch (e) {
        console.log(user);
        if (toShow) console.error(e);
        continue;

      }
    }
    guest.user = user;
    try{
      await repositoryGuest.insert(guest);
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

      //console.log(`User ANtes: ${old.mainGuestId} - Depois : ${guest.id}`)

    }catch( e ){
      if (!verificado.includes(old.email)){
        const count = await repositoryOldGuest.count({where: {email : old.email}})
        console.log(`${old.email} -> ${count}`)
        verificado.push(old.email)
        if (count === 1) if (toShow) console.error(e)
      }
      continue;
    }

  }
  const countMigrated =  await repositoryUser.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}


function verificaDataValida(dataStr) {
  const dateObj: any = new Date(dataStr);

  return !isNaN(dateObj) && dateObj.toString() !== 'Invalid Date';
}