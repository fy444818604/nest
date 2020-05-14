import { Controller, Get, Post, Req, Body, Param, Query, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { Request } from 'express';
// import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { CatInterface } from './interfaces/cat.interface';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/create-cat.dto'
import { ApiBody, ApiTags, ApiHeader, ApiSecurity, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UsePipes } from '@nestjs/common'

@ApiTags('cats')
// @ApiHeader({
//   name: 'Authorization',
//   description: 'Auth token'
// })
// @ApiSecurity('basic')
@ApiBearerAuth()
@Controller('cats')
export class CatsController {
	constructor(private readonly catsService:CatsService){}
	
	@Post('/add')
	async create(@Body() createCatDto:CreateCatDto): Promise<Cat> {
		// throw new BadRequestException()
		// throw new HttpException({
		// 	status: HttpStatus.FORBIDDEN,
		// 	error: '报错啦'
		// }, HttpStatus.FORBIDDEN)
		return this.catsService.create(createCatDto);
	}
	
	@Get('/update/:menu_id')
	// @ApiQuery({
	// 	name:''
	// })
	async update(@Param('menu_id') menu_id: number, @Query() createCatDto:CreateCatDto): Promise<Cat> {
		return this.catsService.update(menu_id,createCatDto);
	}
	
	@Get()
	async findAllCat(): Promise<Cat[]> {
		return this.catsService.findAllCat();
	}
	
	@Get('/findOne/:menu_id')
	@ApiParam({ name: 'menu_id', description: '根据ID查询' })
	async findOneCat(@Param('menu_id') params): Promise<Cat> {
		return this.catsService.findOneCat(params);
	}
	
	@Post('/removeCat/:menu_id')
	async removeCat(@Param() params): Promise<void> {
		return this.catsService.removeCat(params.menu_id)
	}
}
