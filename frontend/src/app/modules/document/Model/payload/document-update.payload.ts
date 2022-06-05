
export interface DocumentUpdatePayload  {
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;

  deleted: boolean;
}
