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
      select: {
        Id: true,
        Name: true,
        Address: true,
        Phone: true,
        Email: true,
        Website: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findAll(): Promise<Editorial[]> {
    return this.prisma.editorial.findMany({
      select: {
        Id: true,
        Name: true,
        Address: true,
        Phone: true,
        Email: true,
        Website: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: number): Promise<Editorial> {
    return this.prisma.editorial.findUnique({
      where: { Id: id },
      select: {
        Id: true,
        Name: true,
        Address: true,
        Phone: true,
        Email: true,
        Website: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
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
      select: {
        Id: true,
        Name: true,
        Address: true,
        Phone: true,
        Email: true,
        Website: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async remove(id: number): Promise<Editorial> {
    return this.prisma.editorial.delete({
      where: { Id: id },
      select: {
        Id: true,
        Name: true,
        Address: true,
        Phone: true,
        Email: true,
        Website: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
