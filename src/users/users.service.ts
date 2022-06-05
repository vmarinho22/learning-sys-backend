import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto
    });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        historic: {
          include: {
            training: true
          }
        }
      }
    });
  }

  findOne(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        historic: {
          include: {
            training: true
          }
        }
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto
    });
  }

  remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
