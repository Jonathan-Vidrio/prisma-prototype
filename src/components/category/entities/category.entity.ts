import { Status } from '../../status/entities/status.entity';

export class Category {
  Id?: number;
  Name: string;
  Description: string;
  Status: Status;
  createdAt: Date;
  updatedAt: Date;
}
