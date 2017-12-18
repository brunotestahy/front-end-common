import { Practitioner } from '../practitioner/practitioner';
import { Patient } from '../patient/patient';

export interface Rating {
    id?: string;
    version?: string;
    hisAdtId?: string;
    date?: {
      dateTime: string;
    }
    rating?: number;
    comment?: string;
    reasons?: Array<string>;
    patientId?: string;
    patient?: Patient;
    practitionerId?: string;
    practitioner?: Practitioner;
}
