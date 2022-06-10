import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import { CreateHistoricDto } from './dto/create-historic.dto';
import { UpdateHistoricDto } from './dto/update-historic.dto';

@Injectable()
export class HistoricsService {
  constructor(private prisma: PrismaService) {}

  create(createHistoricDto: CreateHistoricDto) {
    return this.prisma.historic.create({
      data: createHistoricDto
    });
  }

  findAll() {
    return this.prisma.historic.findMany();
  }

  findOne(id: number) {
    return this.prisma.historic.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateHistoricDto: UpdateHistoricDto) {
    return this.prisma.historic.update({
      where: {
        id
      },
      data: updateHistoricDto
    });
  }

  remove(id: number) {
    return this.prisma.historic.delete({
      where: {
        id
      }
    });
  }
}
