import { PayloadInterface } from '@shared/model';

export interface EmployeeCreatePayload extends PayloadInterface {
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
