import {PayloadInterface} from "@shared/model";

export interface TransactionCreatePayload extends PayloadInterface {
  type: string;
  amount: number;
}
