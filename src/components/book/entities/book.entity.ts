import { Author } from '../../author/entities/author.entity';
import { Category } from '../../category/entities/category.entity';
import { Editorial } from '../../editorial/entities/editorial.entity';
import { Language } from '../../language/entities/language.entity';
import { Status } from '../../status/entities/status.entity';

export class Book {
  Id: number;
  ISBN: string;
  Title: string;
  Subtitle: string;
  PublishDate: Date;
  Pages: number;
  Description: string;
  Author: Author;
  Category: Category;
  Editorial: Editorial;
  Language: Language;
  Status: Status;
  createdAt: Date;
  updatedAt: Date;
}
