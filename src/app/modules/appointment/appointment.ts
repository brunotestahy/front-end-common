import {Practitioner} from '../practitioner/practitioner';

export interface Appointment {
    id?: string;
    version?: string;
    status?: string;
    type?: string;
    description?: string;
    period?: {
        startDate?: {
            dateTime?: string
        };
        endDate?: {
            dateTime?: string
        }
    };
    repetitionPeriod?: {
        startDate?: {
            dateTime?: string
        };
        endDate?: {
            dateTime?: string
        }
    };
    comment?: string;
    patientId?: string;
    owner?: string;
    practitionerIds?: Array<string>;
    practitioners?: Array<Practitioner>;
    motiveRef?: string;
    motive?: any;
    allDayLong?: boolean;
    context?: string;
}
