import { DataSource, MoreThan } from "typeorm";
import { Registration } from "../entity/reservation.registration.entity";
import { ReservationOld } from "../entities-old/Reservation";
import { RESERVATION_STATUS, Reservation } from "../entity/reservation.reservation.entity";
import { MainGuest } from "../entities-old/MainGuest";
import { Guest } from "../entity/xtay.guest.entity";
import { User } from "../entity/management.user.entity";
import { Unit } from "../entity/management.unit.entity";

export async function migrationsRegistration(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Registration and Registration Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldReservation = mariadb.getRepository(ReservationOld);
  const repositoryRegistration = postgres.getRepository(Registration);
  const repositoryReservation = postgres.getRepository(Reservation);
  const repositoryOldMainGuest = mariadb.getRepository(MainGuest);
  const repositoryGuest = postgres.getRepository(Guest);
  const repositoryUser = postgres.getRepository(User);
  const repositoryUnit = postgres.getRepository(Unit);
  
  const [listOldReservation, countOld] = await repositoryOldReservation
    .createQueryBuilder('reservation')
    .getManyAndCount()
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldReservation))/1024)} KB`)


  for (const old of listOldReservation) {

    const registration =  new Registration();
    registration.id = old.reservationId;
    registration.checkInDate = old.checkinDate;
    registration.checkOutDate = old.checkoutDate;
    registration.checkOutTime = old.checkoutTime;
    registration.checkIntTime = old.checkinTime;
    registration.checkInActionDate = old.checkinActionDate;
    registration.checkOutActionDate = old.checkoutActionDate;
    registration.checkIn = old.checkin;
    registration.checkOut = old.checkout;
    registration.checkInMobile = old.checkinMobile;
    registration.checkOutMobile = old.checkoutMobile;
    try{
      await repositoryRegistration.insert(registration);
  
      const reservation = new Reservation();
      reservation.id = old.reservationId;
      reservation.reservationPms = old.reservationPmsId; 
      reservation.localizer= old.localizer;
      reservation.reservationPrice = old.price;
      reservation.reservationDate = old.reservationDate;
      reservation.cancelationDate = old.cancelationDate;
      reservation.localizedDate = old.localizedDate;
      reservation.reservationStatus = RESERVATION_STATUS[old.reservationStatus];
      reservation.salesChannel = old.salesChannel;
      reservation.guestQuantity = old.guestsQuantity;
      reservation.magickeyPasswd = old.magickeyPasswd;
      reservation.eventId = old.eventId;
      await repositoryReservation.insert(reservation);
      
      if (!!old.mainGuestId){
        // const mainGuest = await repositoryOldMainGuest.findOne({where: {mainGuestId: old.mainGuestId}});
        // const user = await repositoryUser.findOne({where: {email: mainGuest.email}});
        // const guest = await repositoryGuest.findOne({where: {user: user}});
        const guest = await repositoryGuest.findOne({where: {id: old.mainGuestId}});
        reservation.mainGuest = guest;
      }
  
      reservation.registration = registration;
      reservation.unit = await repositoryUnit.findOne({where: {listingPmsId: old.listingPmsId}})
      await repositoryReservation.save(reservation);

    } catch(e) {
      if (toShow) console.error(e);
      continue;
    }

  }
  const countMigrated =  await repositoryRegistration.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
