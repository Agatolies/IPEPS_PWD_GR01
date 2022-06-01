import { PageFilter, PayloadInterface, SortFilter } from '@shared/model';

export interface EmployeeSearchPayload extends PayloadInterface {
  employee_id?: string;
  lastname?: string;
  firstname?: string;
  modality?: string;
  term?: number;
  category?: string;
  subdivision?: string;
  gender?: string;
  matricule?: string;
  rank?: string;

  allFields?: string;
  page?: PageFilter;
  sort?: SortFilter

  deleted?:boolean;
  deletedAt?:Date;
  deletedBy?:string;
}
