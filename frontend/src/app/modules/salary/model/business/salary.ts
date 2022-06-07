import {IsEmpty} from "@shared/model/is-empty";

export interface Salary extends IsEmpty {
  id: string;
  type: string;
  billing_date: Date;
  amount: number;
  periodicity: number;
}
