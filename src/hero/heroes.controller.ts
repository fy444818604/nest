import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Hero } from './hero.entity';
import { HeroesService } from './heroes.service';
import { ApiTags,ApiHeader } from '@nestjs/swagger';

@Crud({
  model: {
    type: Hero,
  },
})
@ApiTags('增删查改')
@ApiHeader({
  name: 'Authorization',
  description: 'Auth token'
})
@Controller('heroes')
export class HeroesController {
  constructor(public service: HeroesService) {}
}
