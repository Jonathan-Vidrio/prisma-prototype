import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from '../../database/prisma.service';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.prisma.author.create({
      data: {
        ...createAuthorDto,
        BirthDate: new Date(createAuthorDto.BirthDate),
      },
      include: { Status: true },
    });
  }

  async findAll(): Promise<Author[]> {
    return this.prisma.author.findMany({
      include: {
        Book: true,
        Status: true,
      },
    });
  }

  async findOne(id: number): Promise<Author> {
    return this.prisma.author.findUnique({
      where: { Id: id },
      include: {
        Status: true,
        Book: true,
      },
    });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    let author = { ...updateAuthorDto };

    if (author.BirthDate) {
      const birthDate = new Date(author.BirthDate);
      author = { ...author, BirthDate: birthDate };
    }

    return this.prisma.author.update({
      where: { Id: id },
      data: author,
      include: { Status: true },
    });
  }

  async remove(id: number): Promise<Author> {
    return this.prisma.author.delete({
      where: { Id: id },
      include: { Status: true },
    });
  }
}
