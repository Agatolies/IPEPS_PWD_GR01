import {PayloadInterface} from "@shared/model";

export interface WalletCreatePayload extends PayloadInterface {
  name: string;
  type: string;
  description: string;
  actif: boolean;
  employeeId: string;
  organizationId: string;
}
