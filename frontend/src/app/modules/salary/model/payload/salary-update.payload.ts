import {PayloadInterface} from "@shared/model";

export interface SalaryUpdatePayload extends PayloadInterface {
  id: string;
  type: string;
  billing_date: Date;
  amount: number;
  periodicity: number;
}
