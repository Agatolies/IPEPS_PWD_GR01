import {PayloadInterface} from "@shared/model";

export interface SalaryCreatePayload extends PayloadInterface {
  type: string;
  billing_date: Date;
  amount: number;
  periodicity: number;
}
