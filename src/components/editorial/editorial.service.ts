import { Injectable } from '@nestjs/common';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { UpdateEditorialDto } from './dto/update-editorial.dto';
import { PrismaService } from '../../database/prisma.service';
import { Editorial } from './entities/editorial.entity';

@Injectable()
export class EditorialService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEditorialDto: CreateEditorialDto): Promise<Editorial> {
    return this.prisma.editorial.create({
      data: { ...createEditorialDto },
      include: { Status: true },
    });
  }

  async findAll(): Promise<Editorial[]> {
    return this.prisma.editorial.findMany({
      include: {
        Book: true,
        Status: true,
      },
    });
  }

  async findOne(id: number): Promise<Editorial> {
    return this.prisma.editorial.findUnique({
      where: { Id: id },
      include: {
        Status: true,
        Book: true,
      },
    });
  }

  async update(
    id: number,
    updateEditorialDto: UpdateEditorialDto,
  ): Promise<Editorial> {
    return this.prisma.editorial.update({
      where: { Id: id },
      data: { ...updateEditorialDto },
      include: { Status: true },
    });
  }

  async remove(id: number): Promise<Editorial> {
    return this.prisma.editorial.delete({
      where: { Id: id },
      include: { Status: true },
    });
  }
}
