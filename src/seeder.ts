import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './messages/seeder.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(SeederService);
  await seeder.seedMessages();
  await app.close();
}

bootstrap();
