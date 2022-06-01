import { IsEmpty } from '@shared/model/is-empty';
import { DayCell } from '@shared/model';

export interface Employee extends IsEmpty {
  id: string;
  lastname: string;
  firstname: string;
  modality: string;
  term: number;
  category: string;
  subdivision: string;
  gender: string;
  matricule: string;
  rank: string;

  deleted:boolean,
  deletedAt:Date,
  deletedBy:string,
}

export interface EmployeeCell {
  employee: Employee,
  cell: DayCell[]
}
