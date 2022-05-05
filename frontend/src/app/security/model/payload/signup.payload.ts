import {PayloadInterface} from '@shared/model';

export interface SignupPayload extends PayloadInterface {
  username: string;
  password: string;
}
