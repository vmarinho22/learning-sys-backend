import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    return this.prisma.users.create({
      data: createUserDto
    });
  }

  findAll(): Promise<Users[]> {
    return this.prisma.users.findMany({
      include: {
        historic: {
          include: {
            training: true
          }
        }
      }
    });
  }

  findOne(id: string): Promise<Users> {
    return this.prisma.users.findUnique({
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

  update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    return this.prisma.users.update({
      where: {
        id
      },
      data: updateUserDto
    });
  }

  remove(id: string) {
    return this.prisma.users.delete({
      where: {
        id
      }
    });
  }
}
