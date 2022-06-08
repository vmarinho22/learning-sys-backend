import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    };

    const createdUser = await this.prisma.user.create({
      data: user
    });

    delete createdUser['password'];

    return createdUser;
  }

  async findAll(): Promise<User[]> {
    const fetcheduser = await this.prisma.user.findMany({
      include: {
        historic: {
          include: {
            training: true
          }
        }
      }
    });

    const filteredUsers = fetcheduser?.map((item) => {
      delete item['password'];
      return item;
    });

    return filteredUsers;
  }

  async findByMail(mail: string): Promise<User> {
    const fetchedUser = await this.prisma.user.findUnique({
      where: {
        mail
      }
    });

    return fetchedUser;
  }

  async findOne(id: number): Promise<User> {
    const fetchedUser = await this.prisma.user.findUnique({
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

    delete fetchedUser['password'];

    return fetchedUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto
    });

    delete updatedUser['password'];

    return updatedUser;
  }

  async remove(id: number): Promise<User> {
    const deletedUser = await this.prisma.user.delete({
      where: {
        id
      }
    });

    delete deletedUser['password'];

    return deletedUser;
  }
}
