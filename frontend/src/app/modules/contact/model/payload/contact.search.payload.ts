import {PageFilter, PayloadInterface, SortFilter} from "@shared/model";

//payload = donnée transmise pour chercher contact
// ? = variable facultative - valeur non définie lorsqu’ils ne seront pas utilisés
export interface ContactSearchPayload extends PayloadInterface{
  contact_id?: string;
  lastname?: string;
  firstname?: string;
  email?: string;
  phone?: string;
  address?:string;

  allFields?: string;
  page?: PageFilter;
  sort?: SortFilter;

  deleted?:boolean;
  deletedAt?:Date;
  deletedBy?:string;
}
