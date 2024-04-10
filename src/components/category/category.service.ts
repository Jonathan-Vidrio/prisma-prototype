import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../../database/prisma.service';
import { Language } from '../language/entities/language.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Language> {
    return this.prisma.category.create({
      data: { ...createCategoryDto },
      include: { Status: true },
    });
  }

  async findAll(): Promise<Language[]> {
    return this.prisma.category.findMany({
      include: {
        Book: true,
        Status: true,
      },
    });
  }

  async findOne(id: number): Promise<Language> {
    return this.prisma.category.findUnique({
      where: { Id: id },
      include: {
        Status: true,
        Book: true,
      },
    });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Language> {
    return this.prisma.category.update({
      where: { Id: id },
      data: { ...updateCategoryDto },
      include: { Status: true },
    });
  }

  async remove(id: number): Promise<Language> {
    return this.prisma.category.delete({
      where: { Id: id },
      include: { Status: true },
    });
  }
}
