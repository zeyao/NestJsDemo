import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig : TypeOrmModuleOptions = {
    type : 'postgres',
    host : process.env.DB_HOST,
    port : 5555,
    username : 'postgres',
    password : 'postgres',
    database : 'postgres',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize : true
};