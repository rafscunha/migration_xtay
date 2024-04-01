TRUNCATE TABLE xtay.application_system CASCADE;
TRUNCATE TABLE xtay.company CASCADE;
TRUNCATE TABLE xtay.establishment CASCADE;
TRUNCATE TABLE xtay.establishment_config CASCADE;
TRUNCATE TABLE xtay.establishment_config_address CASCADE;
TRUNCATE TABLE xtay.establishment_config_contacts CASCADE;
TRUNCATE TABLE xtay.guest CASCADE;
TRUNCATE TABLE xtay.guest_address CASCADE;
TRUNCATE TABLE xtay.guest_contact CASCADE;
TRUNCATE TABLE xtay.guest_dependent CASCADE;
TRUNCATE TABLE xtay.guest_document CASCADE;
TRUNCATE TABLE management.email CASCADE;
TRUNCATE TABLE management.invoice_information CASCADE;
TRUNCATE TABLE management.magikey_request CASCADE;
TRUNCATE TABLE management.properties CASCADE;
TRUNCATE TABLE management.properties_address CASCADE;
TRUNCATE TABLE management.properties_services CASCADE;
TRUNCATE TABLE management.properties_units CASCADE;
TRUNCATE TABLE management.properties_services CASCADE;
TRUNCATE TABLE management.service_property CASCADE;
TRUNCATE TABLE management.token CASCADE;
TRUNCATE TABLE management."user" CASCADE;
TRUNCATE TABLE management.user_roles CASCADE;
TRUNCATE TABLE management.properties_units CASCADE;
TRUNCATE TABLE management.unit CASCADE;
TRUNCATE TABLE reservation.registration CASCADE;
TRUNCATE TABLE reservation.reservation CASCADE;
TRUNCATE TABLE reservation.reservation_dependent CASCADE;
TRUNCATE TABLE reservation.checkin_media_content CASCADE;


ALTER TABLE reservation.reservation DROP CONSTRAINT uc_reservation_main_guest;

ALTER TABLE reservation.reservation_dependent DROP CONSTRAINT uc_reservation_dependent_dependent;