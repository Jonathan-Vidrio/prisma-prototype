import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { PrismaService } from '../../database/prisma.service';
import { Language } from './entities/language.entity';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Injectable()
export class LanguageService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLanguageDto: CreateLanguageDto): Promise<Language> {
    return this.prisma.language.create({
      data: { ...createLanguageDto },
      include: { Status: true },
    });
  }

  async findAll(): Promise<Language[]> {
    return this.prisma.language.findMany({
      include: {
        Book: true,
        Status: true,
      },
    });
  }

  async findOne(id: number): Promise<Language> {
    return this.prisma.language.findUnique({
      where: { Id: id },
      include: {
        Status: true,
        Book: true,
      },
    });
  }

  async update(
    id: number,
    updateLanguageDto: UpdateLanguageDto,
  ): Promise<Language> {
    return this.prisma.language.update({
      where: { Id: id },
      data: { ...updateLanguageDto },
      include: { Status: true },
    });
  }

  async remove(id: number): Promise<Language> {
    return this.prisma.language.delete({
      where: { Id: id },
      include: { Status: true },
    });
  }
}
