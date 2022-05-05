import {CredentialDto, TokenDto} from '@security/model';
import {DtoInterface} from '@shared/model';

export interface SigninResponse extends DtoInterface {
  user: CredentialDto;
  token: TokenDto;
}
