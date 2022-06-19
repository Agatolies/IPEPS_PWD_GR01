import {PageFilter, PayloadInterface, SortFilter} from "@shared/model";

export interface ContactCreatePayload extends PayloadInterface{
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  address: string;

  allFields: string;
  page: PageFilter;
  sort: SortFilter;

  deleted:boolean;
  deletedAt:Date;
  deletedBy:string;
}
