import { IsEmpty} from "@shared/model/is-empty";

export interface Address extends IsEmpty {
  id: string;
  type: string;
  road: string;
  number: string;
  box: string;
  cp: string;
  town: string;
  country: string;
}


