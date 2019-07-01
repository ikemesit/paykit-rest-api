import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): string {
    return 'all Users';
  }

  @Get(':id')
  getUser(@Param('id') id): string {
    return `get specific user`;
  }

  @Post()
  createUser(): string {
    return 'create new user';
  }

  @Put()
  updateUser(): string {
    return 'updates user';
  }

  @Delete()
  deleteUser(): string {
    return 'deletes User';
  }
}
