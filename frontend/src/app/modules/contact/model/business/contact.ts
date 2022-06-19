import {IsEmpty} from "@shared/model/is-empty";
import {DayCell} from "@shared/model";

//contrat auquel les classes l'implémentant seront soumis
export interface Contact extends IsEmpty {
  id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  address:string;

  deleted:boolean,
  deletedAt:Date,
  deletedBy:string,
}

export interface ContactCell {
  contact: Contact,
  cell: DayCell[]
}
