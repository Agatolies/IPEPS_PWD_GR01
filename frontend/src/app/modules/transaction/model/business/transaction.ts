import { IsEmpty } from "@shared/model/is-empty";

export interface Transaction extends IsEmpty {
  id: string;
  type: string;
  amount: number;
}
