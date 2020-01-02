import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/photo.entity';
import { Hero } from './hero/hero.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HeroesModule } from './hero/heroes.module';

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
		  password:'root',
		  entities:[
			  Photo,
			  Hero
		  ],
		  synchronize:true,
	  }),
	  CatsModule,
	  PhotoModule,
	  HeroesModule
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
