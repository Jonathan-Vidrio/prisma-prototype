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
      select: {
        Id: true,
        FirstName: true,
        LastName: true,
        Pseudonym: true,
        BirthDate: true,
        Nationality: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findAll(): Promise<Author[]> {
    return this.prisma.author.findMany({
      select: {
        Id: true,
        FirstName: true,
        LastName: true,
        Pseudonym: true,
        BirthDate: true,
        Nationality: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: number): Promise<Author> {
    return this.prisma.author.findUnique({
      where: { Id: id },
      select: {
        Id: true,
        FirstName: true,
        LastName: true,
        Pseudonym: true,
        BirthDate: true,
        Nationality: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
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
      select: {
        Id: true,
        FirstName: true,
        LastName: true,
        Pseudonym: true,
        BirthDate: true,
        Nationality: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async remove(id: number): Promise<Author> {
    return this.prisma.author.delete({
      where: { Id: id },
      select: {
        Id: true,
        FirstName: true,
        LastName: true,
        Pseudonym: true,
        BirthDate: true,
        Nationality: true,
        Status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
