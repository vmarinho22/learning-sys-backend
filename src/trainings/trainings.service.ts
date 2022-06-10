import { PrismaService } from '@database';
import { Injectable } from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Injectable()
export class TrainingsService {
  constructor(private prisma: PrismaService) {}

  create(createTrainingDto: CreateTrainingDto) {
    return this.prisma.training.create({
      data: createTrainingDto
    });
  }

  findAll() {
    return this.prisma.training.findMany();
  }

  findOne(id: number) {
    return this.prisma.training.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateTrainingDto: UpdateTrainingDto) {
    return this.prisma.training.update({
      where: {
        id
      },
      data: updateTrainingDto
    });
  }

  remove(id: number) {
    return this.prisma.training.delete({
      where: {
        id
      }
    });
  }
}
