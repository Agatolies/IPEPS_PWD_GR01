import {PayloadInterface} from "@shared/model";

export interface AddressUpdatePayload extends PayloadInterface {
  id: string;
  type: string;
  road: string;
  number: string;
  box: string;
  cp: string;
  town: string;
  country: string;
}
