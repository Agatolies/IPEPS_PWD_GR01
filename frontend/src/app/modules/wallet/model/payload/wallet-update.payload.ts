import {PayloadInterface} from "@shared/model";

export interface WalletUpdatePayload extends PayloadInterface {
  id: string;
  name: string;
  description: string;
  actif: boolean;
  type: string;
}
