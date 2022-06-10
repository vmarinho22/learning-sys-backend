import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentsService {
  constructor(private prisma: PrismaService) {}

  create(createContentDto: CreateContentDto) {
    return this.prisma.content.create({
      data: createContentDto
    });
  }

  findAll() {
    return this.prisma.content.findMany();
  }

  findOne(id: number) {
    return this.prisma.content.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.prisma.content.update({
      where: {
        id
      },
      data: updateContentDto
    });
  }

  remove(id: number) {
    return this.prisma.content.delete({
      where: {
        id
      }
    });
  }
}
