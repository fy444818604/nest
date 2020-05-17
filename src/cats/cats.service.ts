import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CatInterface } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto'

@Injectable()
export class CatsService {
	constructor(
	    @InjectRepository(Cat)
	    private readonly cats: Repository<Cat>,
	) {}
	
	create(createCatDto: CreateCatDto): Promise<Cat> {
		const cat = new Cat();
		cat.menu_id = createCatDto.menu_id;
		cat.menu_text = createCatDto.menu_text;
		cat.menu_icon = createCatDto.menu_icon;
		cat.menu_href = createCatDto.menu_href;
		
		return this.cats.save(cat);
	}
	
	async update(id: number,CreateCatDto: CreateCatDto): Promise<Cat> {
		let catUpdate = await this.cats.findOne(CreateCatDto.menu_id)
		// const cat = new Cat();
		// cat.menu_id = CreateCatDto.menu_id;
		catUpdate.menu_text = CreateCatDto.menu_text;
		catUpdate.menu_icon = CreateCatDto.menu_icon;
		catUpdate.menu_href = CreateCatDto.menu_href;
		
		return this.cats.save(catUpdate);
	}

	async findAllCat(): Promise<Cat[]> {
	    return await this.cats.find();
	}
	
	async findOneCat(menu_id: string): Promise<Cat> {
	    return await this.cats.findOne(menu_id);
	}
	
	async removeCat(menu_id: string): Promise<void> {
	    await this.cats.delete(menu_id);
	}
	
	// private readonly cats: CatInterface[] = [{
	// 	name:'张三1',
	// 	age:5,
	// 	breed:'adsas'
	// }];
	
	// create(cat: CatInterface) {
	// 	this.cats.push(cat);
	// }
	
	// findAllCat(): CatInterface[] {
	// 	return this.cats;
	// }
}
