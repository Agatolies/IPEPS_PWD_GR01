import {IsEmpty} from "@shared/model/is-empty";

export interface Wallet extends IsEmpty {
  id: string;
  name: string;
  description: string;
  actif: boolean;
  type: string;
}
