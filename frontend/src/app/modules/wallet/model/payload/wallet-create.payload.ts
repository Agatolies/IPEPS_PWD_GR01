import {PayloadInterface} from "@shared/model";

export interface WalletCreatePayload extends PayloadInterface {
  name: string;
  description: string;
  actif: boolean;
  type: string;
}
