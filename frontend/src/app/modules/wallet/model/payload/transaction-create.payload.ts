import {PayloadInterface} from "@shared/model";

export interface TransactionCreatePayload extends PayloadInterface {
  amount: number;
  documentId: string;
  walletFromId: string;
  walletToId: string;
}
