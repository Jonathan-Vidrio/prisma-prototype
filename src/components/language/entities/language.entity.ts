import { Status } from '../../status/entities/status.entity';

export class Language {
  Id: number;
  Name: string;
  Description: string;
  Status: Status;
  createdAt: Date;
  updatedAt: Date;
}
