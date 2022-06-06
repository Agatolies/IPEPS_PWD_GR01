import {PayloadInterface} from "@shared/model";

export interface OrganizationCreatePayload extends PayloadInterface {
  name: string;
  description: string;
  actif: boolean;
}
