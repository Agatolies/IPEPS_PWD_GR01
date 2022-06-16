import {IsEmpty} from "@shared/model/is-empty";
import {DayCell} from "@shared/model";

export interface Contact extends IsEmpty {
  id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;

  deleted:boolean,
  deletedAt:Date,
  deletedBy:string,
}

export interface ContactCell {
  contact: Contact,
  cell: DayCell[]
}
