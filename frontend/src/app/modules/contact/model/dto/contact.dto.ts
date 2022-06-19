
//contrat auquel les classes l'implémentant seront soumis
export interface ContactDto{
  contact_id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  address: string;

  deleted:boolean,
  deletedAt:Date,
  deletedBy:string,
}
