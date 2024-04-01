import { DataSource } from "typeorm";
import { User } from "../entity/management.user.entity";
import { Token } from "../entity/management.token.entity";
import { Authentication } from "../entities-old/Authentication";

export async function migrationsToken(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of Token Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldToken = mariadb.getRepository(Authentication)
  const repositoryToken = postgres.getRepository(Token);
  const repositoryUser = postgres.getRepository(User);

  const [listOldToken, countOld] = await repositoryOldToken.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldToken))/1024)} KB`)

  for (const old of listOldToken) {
    const token = new Token();
    token.id = Number(old.authenticationId);
    token.token = old.token;
    token.expired = old.expirationDate;
    token.revoked = null;
    token.tokenType = null;
    token.user = await repositoryUser.findOne({where: {username: old.username}});
    
    try{
      await repositoryToken.insert(token);
    }catch(e){
      if (toShow) console.error(e);
      continue;
    }
  }
  const countMigrated =  await repositoryToken.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
