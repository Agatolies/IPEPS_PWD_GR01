import { PayloadInterface } from "@shared/model";

export interface AddressCreatePayload extends PayloadInterface {
  type: string;
  road: string;
  number: string;
  box: string;
  cp: string;
  town: string;
  country: string;

  deleted: boolean;
  deletedAt: Date;
  deletedBy: string;
}
