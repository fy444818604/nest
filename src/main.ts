import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipe/validation.pipe'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  
  const options = new DocumentBuilder()
      .setTitle('测试接口')
      .setDescription('这是一个测试滴API文档')
      .setVersion('1.0')
      .addTag('接口')
	  // .addSecurity('basic', {
	  //   type: 'http',
	  //   scheme: 'basic'
	  // })
	  .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
