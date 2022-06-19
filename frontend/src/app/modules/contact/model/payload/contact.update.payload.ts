import {PageFilter, SortFilter} from "@shared/module/data-list/model";

export interface ContactUpdatePayload {
  contact_id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  address: string;

  deleted:boolean;
  deletedAt:Date;
  deletedBy:string;
}
