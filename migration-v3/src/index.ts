import { AppDataSource, OldAppDataSource } from "./data-source"
import { migrationsApplicationSystem } from "./migration/migration.application_system";
import { migrationsCheckinMediaContent } from "./migration/migration.checkin_media_content";
import { migrationsCompany } from "./migration/migration.company";
import { migrationsDependent } from "./migration/migration.dependent";
import { migrationsEmail } from "./migration/migration.email";
import { migrationsEstablishment } from "./migration/migration.establishment";
import { migrationsEstablishmentConfig } from "./migration/migration.establishment_config.ts";
import { migrationsGuest } from "./migration/migration.guest";
import { migrationsInvoiceInformation } from "./migration/migration.invoice_information";
import { migrationsMagikeyRequest } from "./migration/migration.magikey_request";
import { migrationsProperties } from "./migration/migration.properties";
import { migrationsRegistration } from "./migration/migration.registration";
import { migrationsReservationDependent } from "./migration/migration.reservation_dependent";
import { migrationsServiceProperty } from "./migration/migration.service_property";
import { migrationsToken } from "./migration/migration.token";
import { migrationsUnit } from "./migration/migration.unit";
import { migrationsUnitProperties } from "./migration/migration.unit_properties";
import { migrationsUser } from "./migration/migration.user";
import { migrationsUserRoles } from "./migration/migration.user_roles";



const migration = async () => {

    const postgres = await AppDataSource.initialize()
    
    const mariadb = await OldAppDataSource.initialize()

    const listOfMigrations = [
        migrationsApplicationSystem, //idempotente
        migrationsCompany, //idempotente
        migrationsEstablishmentConfig, //idempotente
        migrationsEstablishment, //idempotente
        migrationsCheckinMediaContent, //idempotente
        migrationsEmail, //idempotente
        migrationsProperties, //idempotente
        migrationsServiceProperty, //idempotente
        migrationsUnit, //idempotente
        migrationsUser, //idempotente
        migrationsUserRoles, //idempotente
        migrationsToken, //idempotente
        migrationsGuest, //idempotente
        migrationsDependent, //idempotente
        migrationsRegistration, //idempotente
        migrationsInvoiceInformation,  //idempotente
        migrationsMagikeyRequest, //idempotente
        migrationsReservationDependent, //idempotente
        migrationsUnitProperties //idempotente
    ]

    for (const op of listOfMigrations) {
        await op(postgres, mariadb);
    }

    console.log('Finish Migration ...')

    postgres.destroy()
    mariadb.destroy()
    return;
}

Promise.resolve(migration()).catch(error => console.error(error))