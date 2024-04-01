import { DataSource } from "typeorm";
import { Usuarios } from "../entities-old/Usuarios";
import { User } from "../entity/management.user.entity";

export async function migrationsUser(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of User Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldUser = mariadb.getRepository(Usuarios);
  const repositoryUser = postgres.getRepository(User);

  const [listOldUser, countOld] = await repositoryOldUser.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldUser))/1024)} KB`)

  for (const old of listOldUser) {
    const user = new User()
    user.id = old.id;
    console.log(`migration User: ${old.id}`)
    user.email = old.email;
    user.password = old.password;
    user.username = old.usuarioName;
    user.recordDate = old.dataDeRegistro;
    user.accountNonExpired = old.accountNonExpired;
    user.accountNonLocked = old.accountNonLocked;
    user.credentialsNonExpired = old.credentialsNonExpired;
    user.active = old.enabled;
    try{
      await repositoryUser.insert(user);
    }catch(e) {
      if (toShow) console.error(e);
      continue;
    }
    
  }
  const countMigrated =  await repositoryUser.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
