import {TransactionDto} from "./transaction.dto";

export interface WalletDto {

  wallet_id: string;
  name: string;
  description: string;
  actif: boolean;
  type: string;
  transactions: TransactionDto[];
}
