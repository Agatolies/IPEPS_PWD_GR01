export interface ContactUpdatePayload {
  contact_id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;

  deleted:boolean,
  deletedAt:Date,
  deletedBy:string,
}
