import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/photo.entity';
import { PhotoController } from './photo/photo.controller';
import { Hero } from './hero/hero.entity';
import { Cat } from './cats/cat.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HeroesModule } from './hero/heroes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { APP_PIPE, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ValidationPipe } from './common/pipe/validation.pipe'
// import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [
	  ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public'),
	  }),
	  TypeOrmModule.forRoot({
		  type:'mysql',
		  host:'localhost',
		  port:3306,
		  database:'test',
		  username:'root',
		  password:'Smile_5201314',
		  entities:[__dirname + '/**/*.entity{.ts,.js}'],
		  // autoLoadEntities: true,
		  synchronize:true,
	  }),
	  CatsModule,
	  PhotoModule,
	  HeroesModule,
	  AuthModule,
	  UsersModule
  ],
  controllers: [AppController],
  providers: [
	  AppService,
	  {
		provide: APP_PIPE,
		useClass: ValidationPipe
	  }
  ],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer){
		consumer
			.apply(LoggerMiddleware)
			.exclude(
			    { path: 'cats', method: RequestMethod.GET },
			    { path: 'cats', method: RequestMethod.POST },
			    'cats*',
			  )
			.forRoutes(CatsController,PhotoController);
	}
}
