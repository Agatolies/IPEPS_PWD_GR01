import {PayloadInterface} from "@shared/model";

export interface AccountSearchPayload extends PayloadInterface{
  account_id?: string;
  firstname?: string;
  lastname?: string;
}
