import "reflect-metadata"
import { DataSource } from "typeorm"
import { Guest } from "./entity/xtay.guest.entity"
import { Reservation } from "./entity/reservation.reservation.entity"
import { Unit } from "./entity/management.unit.entity"
import { Registration } from "./entity/reservation.registration.entity"
import { Properties } from "./entity/xtay.properties.entity"
import { ServiceProperty } from "./entity/management.service_property.entity"
import { PropertiesAddress } from "./entity/xtay.properties_address.entity"
import { GuestDocument } from "./entity/xtay.guest_document.entity"
import { GuestAddress } from "./entity/xtay.guest_address.entity"
import { Establishment } from "./entity/xtay.establishment.entity"
import { EstablishmentConfig } from "./entity/xtay.establishment_config.entity"
import { EstablishmentConfigContacts } from "./entity/xtay.establishment_config_contacts.entity"
import { EstablishmentConfigAddress } from "./entity/xtay.establishment_config_address.entity"
import { Company } from "./entity/xtay.company.entity"
import { ApplicationSystem } from "./entity/xtay.application_system.entity"
import { CheckinMediaContent } from "./entity/reservation.checkin_media_content.entity"
import { MagikeyRequest } from "./entity/management.magikey_request.entity"
import { InvoiceInformation } from "./entity/management.invoice_information.entity"
import { Email } from "./entity/management.email.entity"
import { User } from "./entity/management.user.entity"
import { UserRoles } from "./entity/management.user_roles.entity"
import { Token } from "./entity/management.token.entity"

import { ApplicationSystemOld } from "./entities-old/ApplicationSystem"
import { Authentication } from "./entities-old/Authentication"
import { CheckinMediaContentOld } from "./entities-old/CheckinMediaContent"
import { CompanyOld } from "./entities-old/Company"
import { Dependent } from "./entities-old/Dependent"
import { EmailOld } from "./entities-old/Email"
import { Embratur } from "./entities-old/Embratur"
import { EmbraturCbCountry } from "./entities-old/EmbraturCbCountry"
import { EmbraturError } from "./entities-old/EmbraturError"
import { EmbraturIbgeCity } from "./entities-old/EmbraturIbgeCity"
import { EmbraturReason } from "./entities-old/EmbraturReason"
import { EmbraturTransport } from "./entities-old/EmbraturTransport"
import { EstablishmentOld } from "./entities-old/Establishment"
import { EstablishmentConfigOld } from "./entities-old/EstablishmentConfig"
import { HibernateSequence } from "./entities-old/HibernateSequence"
import { InvoiceInformationOld } from "./entities-old/InvoiceInformation"
import { MagikeyRequestOld } from "./entities-old/MagikeyRequest"
import { MainGuest } from "./entities-old/MainGuest"
import { OauthClientDetails } from "./entities-old/OauthClientDetails"
import { PropertiesOld } from "./entities-old/Properties"
import { ReservationOld } from "./entities-old/Reservation"
import { ReservationDependent } from "./entities-old/ReservationDependent"
import { ServicePropertyOld } from "./entities-old/ServiceProperty"
import { UnitOld } from "./entities-old/Unit"
import { UsuarioRoles } from "./entities-old/UsuarioRoles"
import { Usuarios } from "./entities-old/Usuarios"
import { WebhookError } from "./entities-old/WebhookError"

require('dotenv').config();

const entities = [
    Guest, 
    Reservation,
    Unit, 
    Registration, 
    Properties, 
    ServiceProperty, 
    PropertiesAddress,
    GuestDocument, 
    GuestAddress, 
    Establishment, 
    EstablishmentConfig, 
    EstablishmentConfigContacts,
    EstablishmentConfigAddress,
    Company,
    ApplicationSystem,
    CheckinMediaContent,
    MagikeyRequest,
    InvoiceInformation,
    Email,
    User,
    UserRoles,
    Token
];

console.log(process.env.NEW_DB_HOST, process.env.NEW_DB_PORT, process.env.NEW_DB_USER, process.env.NEW_DB_PASSWD, process.env.NEW_DB_NAME)


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.NEW_DB_HOST,
    port: Number(process.env.NEW_DB_PORT),
    username: process.env.NEW_DB_USER,
    password: process.env.NEW_DB_PASSWD,
    database: process.env.NEW_DB_NAME,
    synchronize: false,
    logging: false,
    entities: entities,
    migrations: [],
    subscribers: [],
    ssl: process.env.OLD_BD_SSL == 'false'? false : {
        rejectUnauthorized: false,
      },
      extra: {
          trustedConnection: true,
          trustServerCertificate: true,
      },
})



const oldEntities = [
    ApplicationSystemOld,
    Authentication,
    CheckinMediaContentOld,
    CompanyOld,
    Dependent,
    EmailOld,
    Embratur,
    EmbraturCbCountry,
    EmbraturError,
    EmbraturIbgeCity,
    EmbraturReason,
    EmbraturTransport,
    EstablishmentOld,
    EstablishmentConfigOld,
    InvoiceInformationOld,
    MagikeyRequestOld,
    MainGuest,
    OauthClientDetails,
    PropertiesOld,
    ReservationOld,
    ReservationDependent,
    ServicePropertyOld,
    UnitOld,
    UsuarioRoles,
    Usuarios,
    WebhookError

]


export const OldAppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.OLD_DB_HOST,
    port: Number(process.env.OLD_DB_PORT),
    username: process.env.OLD_DB_USER,
    password: process.env.OLD_DB_PASSWD,
    database: process.env.OLD_DB_NAME,
    synchronize:false,
    logging: false,
    entities: oldEntities,
    migrations: [],
    subscribers: [],
})

