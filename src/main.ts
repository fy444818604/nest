import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  const options = new DocumentBuilder()
      .setTitle('测试接口')
      .setDescription('这是一个测试滴API文档')
      .setVersion('1.0')
      .addTag('接口')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  
  await app.listen(3000);
}
bootstrap();
