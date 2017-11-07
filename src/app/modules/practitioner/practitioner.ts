import { Address } from '../model/address';
import { Contact } from '../model/contact';

export interface Practitioner {
  id?: string;
  version?: string;
  gender?: string;
  name?: string;
  rg?: string;
  rgdateOfIssue?: string;
  rgissuingBody?: string;
  nationality?: string;
  naturalnessState?: string;
  naturalnessCity?: string;
  identifiers?: Map<string, string>;
  addresses?: Array<Address>;
  contacts?: Array<Contact>;
  birthDate?: {
    dateTime?: number
  };
  email?: string;
  mobilePhone?: string;
  login?: string;
  addressOffice?: string;
  sharedEncounters?: Array<string>;
  active?: boolean;
  practitionerRoles?: Array<string>;
  fullName?: string;
  givenName?: Array<string>;
  familyName?: Array<string>;
  nameSuffix?: Array<string>;
  crm?: string;
  crmUF?: string;
  photo?: string;
  cpf?: string;
}
