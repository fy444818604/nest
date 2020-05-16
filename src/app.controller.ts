import { Controller, Get, Request, Body, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './auth/dto/login.dto'

@ApiTags('token获取')
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() loginDto:LoginDto) {
	  console.log(loginDto)
      return this.authService.login(loginDto);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
      return req.user;
  }

}
