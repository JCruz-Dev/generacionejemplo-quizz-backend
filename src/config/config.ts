import * as Joi from 'joi';
import type { ConfigModuleOptions } from '@nestjs/config';
import { AppRegistres, dataBaseRegistres } from './namespaces';

export const appConfig: ConfigModuleOptions = {
  isGlobal: true,
  load: [AppRegistres, dataBaseRegistres],
  envFilePath: '.env',
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .required(),
    APP_PORT: Joi.number().required().default(3001),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_PORT: Joi.number().required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_SYNCHRONIZE: Joi.boolean().required().default(false),
    DATABASE_LOGGING: Joi.boolean().required().default(false),
  }),
};
