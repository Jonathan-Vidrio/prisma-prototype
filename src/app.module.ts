import { Module } from '@nestjs/common';
import { BookModule } from './components/book/book.module';
import { AuthorModule } from './components/author/author.module';
import { CategoryModule } from './components/category/category.module';
import { EditorialModule } from './components/editorial/editorial.module';
import { LanguageModule } from './components/language/language.module';
import { StatusModule } from './components/status/status.module';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    CategoryModule,
    EditorialModule,
    LanguageModule,
    StatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
