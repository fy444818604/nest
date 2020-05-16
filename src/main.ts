import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipe/validation.pipe'
import { TransformInterceptor } from './common/interceptor/transform.interceptor'
import { JwtStrategy } from './auth/jwt.strategy'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  
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
  const document = SwaggerModule.createDocument(app, options,{
	ignoreGlobalPrefix: false
  });
  SwaggerModule.setup('api', app, document);
  
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  // app.useGlobalGuards(new JwtStrategy());
  
  await app.listen(3000);
}
bootstrap();
