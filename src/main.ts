import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);

  app.enableCors();

  const configService = app.get(ConfigService);
  logger.debug(`app -> ${JSON.stringify(configService.get('app'))} `);
  logger.debug(`database -> ${JSON.stringify(configService.get('database'))} `);
  const config = new DocumentBuilder()
    .setTitle('Generacion Ejemplo API')
    .setDescription('La API de Quizz para Generacion ejemplo')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = configService.get<string>('app.port');
  await app.listen(port);

  logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}
bootstrap();
