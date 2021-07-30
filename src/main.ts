import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
      .setTitle('MMMO Master Server')
      .setDescription('Manages all server instances and clients connecting to them.')
      .setVersion('0.1.0')
      .addTag('mmmo server web api')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  
  await app.listen(port, () => console.log(`Server started on port = ${port}`));
}
bootstrap();