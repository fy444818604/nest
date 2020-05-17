import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
	@ApiProperty()
	@IsNotEmpty({ message: '账号不能为空' })
	@IsString()
	username:string
	
	@ApiProperty()
	@IsNotEmpty({ message: '密码不能为空' })
	@IsString()
	password:string
}