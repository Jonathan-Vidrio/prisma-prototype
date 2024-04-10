import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from '../../database/prisma.service';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    return this.prisma.status.create({
      data: { ...createStatusDto },
    });
  }

  async findAll(): Promise<Status[]> {
    return this.prisma.status.findMany({
      include: {
        Book: true,
      },
    });
  }

  async findOne(id: number): Promise<Status> {
    return this.prisma.status.findUnique({
      where: { Id: id },
      include: {
        Book: true,
      },
    });
  }

  async update(id: number, updateStatusDto: UpdateStatusDto): Promise<Status> {
    return this.prisma.status.update({
      where: { Id: id },
      data: { ...updateStatusDto },
    });
  }

  async remove(id: number): Promise<Status> {
    return this.prisma.status.delete({
      where: { Id: id },
    });
  }
}
