import { DataSource } from "typeorm";
import { User } from "../entity/management.user.entity";
import { Guest } from "../entity/xtay.guest.entity";
import { GuestDocument } from "../entity/xtay.guest_document.entity";
import { GuestAddress } from "../entity/xtay.guest_address.entity";
import { Dependent } from "../entities-old/Dependent";
import { MainGuest } from "../entities-old/MainGuest";
import { ReservationDependent } from "../entities-old/ReservationDependent";
import { ReservationOld } from "../entities-old/Reservation";
import { Reservation } from "../entity/reservation.reservation.entity";

export async function migrationsReservationDependent(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Reservation Dependents Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldDependent = mariadb.getRepository(Dependent);
  const repositoryGuest = postgres.getRepository(Guest);
  const repositoryUser = postgres.getRepository(User);

  const repositoryOldReservationDependent = mariadb.getRepository(ReservationDependent)
  const repositoryOldReservation = mariadb.getRepository(ReservationOld);
  const repositoryReservation = postgres.getRepository(Reservation);

  const [listOldDependent, countOld] = await repositoryOldDependent.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldDependent))/1024)} KB`)

  for (const old of listOldDependent) {
    //pegando a lista com todas as reservas associadas a um determinaldo dependente(old)
    const reservationDependents = await repositoryOldReservationDependent.find({where: {dependent: old}})
    if (reservationDependents) {
      //const listOfReservationOld = await repositoryOldReservationDependent.find({where: {dependent: old}})

      //pega o registro do dependente na tebal gues
      const guest = await repositoryGuest.findOne({where: {id: 100000 + Number(old.dependentId)}})
      if (guest == null) {
        console.log(`>> migrationsReservationDependent >>: old dependent id: ${old.dependentId} `)  
        continue
      };

      //varre todas reservas que o dependente esta associado
      for (const reservation of reservationDependents){
        // const reservationOld = await repositoryOldReservation.findOne({where: { reservationId: reservation.reservationId }})
        // const newReservation = await repositoryReservation.findOne({where: {reservationPms: reservationOld.reservationPmsId}})
        const newReservation = await repositoryReservation.findOne({where: {id: reservation.reservationId}})
        //adicionar um controle de se ja exite o dependente associado, não adiciona outro
        guest.reservations = [...(guest.reservations||[]), newReservation];
      }
      //guest.clientPmsId = null;
      try{
        await repositoryGuest.save(guest);
      } catch (e){
        if (toShow) console.error(e);
        continue;
      }
    }
  }
  const countMigrated =  await repositoryUser.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
