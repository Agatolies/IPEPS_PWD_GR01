import {PayloadInterface} from "@shared/model";

export interface AccountUpdatePayload extends PayloadInterface{
  account_id: string;
  firstname: string;
  lastname: string;
}
