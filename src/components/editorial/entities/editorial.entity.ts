import { Status } from '../../status/entities/status.entity';

export class Editorial {
  Id: number;
  Name: string;
  Address: string;
  Phone: string;
  Email: string;
  Website: string;
  Status: Status;
  createdAt: Date;
  updatedAt: Date;
}
