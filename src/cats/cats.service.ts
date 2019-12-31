import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
	private readonly cats: Cat[] = [{
		name:'张三',
		age:5,
		breed:'adsas'
	}];
	
	create(cat: Cat) {
		this.cats.push(cat);
	}
	
	findAll(): Cat[] {
		return this.cats;
	}
}
