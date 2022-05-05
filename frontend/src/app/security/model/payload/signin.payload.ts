import {PayloadInterface} from '@shared/model';

export interface SigninPayload extends PayloadInterface {
  username: string;
  password: string;
}
