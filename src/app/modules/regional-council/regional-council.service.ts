import { Injectable } from '@angular/core';
import { REGIONAL_COUNCIL } from './regional-council';

@Injectable()
export class RegionalCouncilService {

  constructor() { }

  getRegionalCouncil(practitioner) {
    if (practitioner.practitionerRoles) {
      return REGIONAL_COUNCIL[practitioner.practitionerRoles[0]];
    }
  }
}
