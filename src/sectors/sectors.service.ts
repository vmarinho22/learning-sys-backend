import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Injectable()
export class SectorsService {
  constructor(private prisma: PrismaService) {}

  create(createSectorDto: CreateSectorDto) {
    return this.prisma.sector.create({
      data: createSectorDto
    });
  }

  findAll() {
    return this.prisma.sector.findMany();
  }

  findOne(id: number) {
    return this.prisma.sector.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateSectorDto: UpdateSectorDto) {
    return this.prisma.sector.update({
      where: {
        id
      },
      data: updateSectorDto
    });
  }

  remove(id: number) {
    return this.prisma.sector.delete({
      where: {
        id
      }
    });
  }
}
