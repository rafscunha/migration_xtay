import { DataSource } from "typeorm";
import { ReservationOld } from "../entities-old/Reservation";
import { Reservation } from "../entity/reservation.reservation.entity";
import { MagikeyRequest } from "../entity/management.magikey_request.entity";
import { MagikeyRequestOld } from "../entities-old/MagikeyRequest";

export async function migrationsMagikeyRequest(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Magikey Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldReservation = mariadb.getRepository(ReservationOld);
  const repositoryReservation = postgres.getRepository(Reservation);
  const repositoryMagikey = postgres.getRepository(MagikeyRequest);
  const repositoryOldMagikey = mariadb.getRepository(MagikeyRequestOld);

  const [listOldMagikey, countOld] = await repositoryOldMagikey.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldMagikey))/1024)} KB`)


  for (const old of listOldMagikey) {

    const magikey = new MagikeyRequest();
    magikey.id = Number(old.magikeyRequestId);
    magikey.action = old.action;
    magikey.dateRequest = old.dateRequest;
    magikey.sendEmail = old.sendEmail;
    magikey.success = old.success;
    //magikey.eventId = old.eventId;
    // const reservationOld = await repositoryOldReservation.findOne({where: {reservationId: old.reservationId}})
    // const reservation = await repositoryReservation.findOne({where:{reservationPms: reservationOld.reservationPmsId}})
    const reservation = await repositoryReservation.findOne({where:{id: old.reservationId}})
    try{
      magikey.eventId = old.eventId || reservation?.eventId || 0;
    }catch {
      console.log(old, reservation)
    }
    //console.log(`1-> ${old.eventId} | 2-> ${reservation?.eventId}`)
    magikey.reservation = reservation;
    try{
      await repositoryMagikey.insert(magikey);
    }catch(e){
      if (toShow) console.error(e);
      continue;
    }

  }
  const countMigrated =  await repositoryMagikey.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
