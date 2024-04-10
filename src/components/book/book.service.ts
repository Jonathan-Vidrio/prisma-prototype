import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '../../database/prisma.service';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.prisma.book.create({
      data: {
        ...createBookDto,
        PublishDate: new Date(createBookDto.PublishDate),
      },
      include: {
        Author: {
          include: {
            Status: true,
          },
        },
        Editorial: {
          include: {
            Status: true,
          },
        },
        Category: {
          include: {
            Status: true,
          },
        },
        Language: {
          include: {
            Status: true,
          },
        },
        Status: true,
      },
    });
  }
  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany({
      include: {
        Author: {
          include: {
            Status: true,
          },
        },
        Editorial: {
          include: {
            Status: true,
          },
        },
        Category: {
          include: {
            Status: true,
          },
        },
        Language: {
          include: {
            Status: true,
          },
        },
        Status: true,
      },
    });
  }

  async findOne(id: number): Promise<Book> {
    return this.prisma.book.findUnique({
      where: { Id: id },
      include: {
        Author: {
          include: {
            Status: true,
          },
        },
        Editorial: {
          include: {
            Status: true,
          },
        },
        Category: {
          include: {
            Status: true,
          },
        },
        Language: {
          include: {
            Status: true,
          },
        },
        Status: true,
      },
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    let book = { ...updateBookDto };

    if (book.PublishDate) {
      const publishDate = new Date(book.PublishDate);
      book = { ...book, PublishDate: publishDate };
    }

    return this.prisma.book.update({
      where: { Id: id },
      data: {
        ...book,
      },
      include: {
        Author: {
          include: {
            Status: true,
          },
        },
        Editorial: {
          include: {
            Status: true,
          },
        },
        Category: {
          include: {
            Status: true,
          },
        },
        Language: {
          include: {
            Status: true,
          },
        },
        Status: true,
      },
    });
  }

  async remove(id: number): Promise<Book> {
    return this.prisma.book.delete({
      where: { Id: id },
      include: {
        Author: {
          include: {
            Status: true,
          },
        },
        Editorial: {
          include: {
            Status: true,
          },
        },
        Category: {
          include: {
            Status: true,
          },
        },
        Language: {
          include: {
            Status: true,
          },
        },
        Status: true,
      },
    });
  }
}
