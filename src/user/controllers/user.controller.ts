import {
  Controller,
  Get,
  Post,
  // Patch,
  // Delete,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // /users
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) data: CreateUserDto) {
    return this.userService.create(data);
  }
}
