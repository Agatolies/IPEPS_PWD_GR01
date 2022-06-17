import {TransactionDto} from "../../../transaction/model";

export interface WalletDto {

  wallet_id: string;
  name: string;
  description: string;
  actif: boolean;
  type: string;
  transactions: TransactionDto[];
}
