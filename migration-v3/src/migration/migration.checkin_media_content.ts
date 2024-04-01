import { DataSource, In, MetadataWithSuchNameAlreadyExistsError, Not } from "typeorm";
import { CheckinMediaContentOld } from "../entities-old/CheckinMediaContent";
import { CheckinMediaContent, ENUM_TYPE_CHECKIN } from "../entity/reservation.checkin_media_content.entity";

export async function migrationsCheckinMediaContent(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of CheckinMediaContent Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldCheckinMediaContent = mariadb.getRepository(CheckinMediaContentOld);
  const repositoryCheckinMediaContent = postgres.getRepository(CheckinMediaContent);

  const  [listOldMediaContent,countOld] = await repositoryOldCheckinMediaContent.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldMediaContent))/1024)} KB`)

  for (const old of listOldMediaContent){
    const media = new CheckinMediaContent();
    media.id = old.id;
    media.keyName = old.keyName;
    media.type = ENUM_TYPE_CHECKIN[old.type]
    try{
      await repositoryCheckinMediaContent.insert(media);
    }catch(e){
      if (toShow) console.error(e);
      continue;
    }
  }

  const countMigrated =  await repositoryCheckinMediaContent.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
