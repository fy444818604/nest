import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty()
  @IsNotEmpty({ message: '菜单ID不能为空' })
  @IsNumber()
  menu_id: number;
  
  @ApiProperty()
  @IsString()
  menu_text: string;
	  
  @ApiProperty({
	  required: false,
  })
  menu_icon: string;
  
  @ApiProperty({
  	  required: false,
    })
  menu_href: string;
}