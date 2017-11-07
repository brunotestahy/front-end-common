import { EnumEventCategory } from './enum-event-category';

export interface Scheduler {
  header?: {
    left: string,
    center: string,
    right: string
  };
  newEventHeader?: {
    active: boolean,
    title1?: string,
    title2?: string,
    buttonLabel?: string,
    patientName?: string
  };
  i18nLanguage?: {
    active: boolean
  };
  allDayText?: string;
  practitioner?: {
    thumbnail?: {
      height: string,
      width: string,
      border: string,
      photo: string
    }
  };
  events?: [{
    title?: string,
    start?: string,
    end?: string,
    allDay?: boolean,
    editable?: boolean,
    backgroundColor?: string,
    category?: EnumEventCategory
  }];
  color?: string;
  textColor?: string;
  borderColor?: string;
  editable?: boolean;
  aspectRatio?: number;
  slotEventOverlap?: boolean;
  defaultView?: string;
  scrollTime?: string;
  timeFormat?: string;
  options?: {
    theme?: boolean,
    themeSystem?: string,
    slotLabelFormat?: string
  };
}
