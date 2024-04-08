import { Status } from '../../status/entities/status.entity';

export class Author {
  Id: number;
  FirstName: string;
  LastName: string;
  Pseudonym: string;
  BirthDate: Date;
  Nationality: string;
  Status: Status;
  createdAt: Date;
  updatedAt: Date;
}
