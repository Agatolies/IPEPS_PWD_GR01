import {CredentialDto, TokenDto} from '@security/model';
import {DtoInterface} from '@shared/model';
import {AccountDto} from "@account/model";

export interface SigninResponse extends DtoInterface {
  account: AccountDto;
  user: CredentialDto;
  token: TokenDto;
}
