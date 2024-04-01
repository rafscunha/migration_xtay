import { DataSource } from "typeorm";
import { Registration } from "../entity/reservation.registration.entity";
import { ReservationOld } from "../entities-old/Reservation";
import { Reservation } from "../entity/reservation.reservation.entity";
import { InvoiceInformationOld } from "../entities-old/InvoiceInformation";
import { InvoiceInformation } from "../entity/management.invoice_information.entity";

export async function migrationsInvoiceInformation(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Invoice information Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldReservation = mariadb.getRepository(ReservationOld);
  const repositoryReservation = postgres.getRepository(Reservation);
  
  const repositoryOldInvoice = mariadb.getRepository(InvoiceInformationOld);
  const repositoryInvoice = postgres.getRepository(InvoiceInformation);

  const [listOldInvoice, countOld] = await repositoryOldInvoice.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldInvoice))/1024)} KB`)


  for (const old of listOldInvoice) {

    const invoice = new InvoiceInformation();
    invoice.id = Number(old.id);
    invoice.autoSend = old.autoSend || false;
    invoice.contribuientIcms = old.contribuinteIcms;
    invoice.optanteSimplesNacional = old.optanteSimplesNacional || false;
    const reservationOld = await repositoryOldReservation.findOne({where: {reservationId: old.reservationId}})
    const reservation = await repositoryReservation.findOne({where:{reservationPms: reservationOld.reservationPmsId}})
    invoice.reservation = reservation;
    try{
      await repositoryInvoice.insert(invoice);
    }catch(e){
      if (toShow) console.error(e);
      continue;
    }

  }
  const countMigrated =  await repositoryInvoice.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
