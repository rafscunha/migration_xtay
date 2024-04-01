import { DataSource } from "typeorm";
import { Usuarios } from "../entities-old/Usuarios";
import { User } from "../entity/management.user.entity";
import { UserRoles } from "../entity/management.user_roles.entity";
import { UsuarioRoles } from "../entities-old/UsuarioRoles";

export async function migrationsUserRoles(postgres: DataSource, mariadb: DataSource): Promise<void>{
  console.log('\nStarting migration of UserRoles Table ...')
  const toShow = process.env.TO_LOG == 'true' || false
  
  const repositoryOldUserRoles = mariadb.getRepository(UsuarioRoles)
  const repositoryUserRoles = postgres.getRepository(UserRoles);
  
  const repositoryUser = postgres.getRepository(User);
  const repositoryOldUser = mariadb.getRepository(Usuarios);

  const [listOldUserRoles, countOld] = await repositoryOldUserRoles.findAndCount();
  console.log(`To migration: ${countOld} - Size: ${Math.round(Buffer.byteLength(JSON.stringify(listOldUserRoles))/1024)} KB`)
  console.log(listOldUserRoles)
  for (const old of listOldUserRoles) {
    const roles = new UserRoles();
    roles.roles = old.roles;
    // const oldUser = await repositoryOldUser.findOne({where: {id: Number(old.usuarioId)}})
    // roles.userId = await repositoryUser.findOne({where: {username: oldUser.usuarioName}})
    roles.user_id = old.usuarioId
    //console.log(`Antes: ${old.usuarioId} - Agora: ${roles.user_id}`);
   
    await repositoryUserRoles.save(roles);
    console.log(roles)
  }
  const countMigrated =  await repositoryUserRoles.count()
  console.log(`Migrated ${countMigrated} - Complete`)
}
