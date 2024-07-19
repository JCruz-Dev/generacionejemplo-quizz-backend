import { ConfigModule, ConfigService } from '@nestjs/config';
import type { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

const config = {
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('database.host'),
    port: configService.get<number>('database.port'),
    username: configService.get<string>('database.username'),
    password: configService.get<string>('database.password'),
    database: configService.get<string>('database.database'),
    logging: configService.get<boolean>('database.logging'),
    synchronize: configService.get<boolean>('database.synchronize'),
    autoLoadEntities: true,
  }),
} satisfies TypeOrmModuleAsyncOptions;
export default config;
