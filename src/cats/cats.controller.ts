import { Controller, Get, Post, Req, Body, Param } from '@nestjs/common';
import { Request } from 'express';
// import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService:CatsService){}
	@Post()
	async create(@Body() params)	{
		this.catsService.create(params);
	}
	@Get()
	async findAll(): Promise<Cat[]> {
		console.log(123)
		return this.catsService.findAll();
	}
}
