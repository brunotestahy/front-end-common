import {Practitioner} from '../practitioner/practitioner';

export interface Patient {
  id?: string;
  name?: string;
  birthDate?: {
    dateTime?: number
  };
  email?: string;
  mobilePhone?: string;
  login?: string;
  fullName?: string;
  givenName?: Array<string>;
  familyName?: Array<string>;
  nameSuffix?: Array<string>;
  photo?: string;
  room?: string;
  hisAdtId?: string;
  careProviderIds?: Map<string, string>;
  careProviders?: Map<string, Practitioner>;
  cpf?: string;
}
