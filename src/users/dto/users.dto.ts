import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UsersDto {
	@ApiProperty()
	userId: number;
	
	@ApiProperty()
	username: string;
	
	@ApiProperty()
	password: string;
	
	@ApiProperty()
	school: string;
	
	@ApiProperty()
	phone: string;
	
	@ApiProperty()
	name: string;
}