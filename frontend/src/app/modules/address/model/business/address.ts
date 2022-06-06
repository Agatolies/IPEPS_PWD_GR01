import { IsEmpty} from "@shared/model/is-empty";
import { DayCell} from "@shared/model";

export interface Address extends IsEmpty {
  id: string;
  type: string;
  road: string;
  number: string;
  box: string;
  cp: string;
  town: string;
  country: string;

  deleted: boolean,
  deletedAt: Date,
  deletedBy: string,
}

export interface AddressCell {
  address: Address,
  cell: DayCell[]
}


