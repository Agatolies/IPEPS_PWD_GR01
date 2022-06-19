import {PageFilter, PayloadInterface, SortFilter} from "@shared/model";

export interface ContactSearchPayload extends PayloadInterface{
  contact_id?: string;
  lastname?: string;
  firstname?: string;
  email?: string;
  phone?: string;
  term?: number;

  allFields?: string;
  page?: PageFilter;
  sort?: SortFilter;

  deleted?:boolean;
  deletedAt?:Date;
  deletedBy?:string;
}
