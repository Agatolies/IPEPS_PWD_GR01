import {PayloadInterface} from "@shared/model";

export interface OrganizationUpdatePayload extends PayloadInterface{
  organization_id: string;
  name: string;
  description: string;
  actif: boolean;
}
