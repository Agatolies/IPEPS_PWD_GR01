import {PayloadInterface} from "@shared/model";

export interface TransactionUpdatePayload extends PayloadInterface {
  id: string;
  type: string;
  amount: number;
}
