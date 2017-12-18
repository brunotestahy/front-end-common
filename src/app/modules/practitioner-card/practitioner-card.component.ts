import { Component, OnInit, Input } from '@angular/core';
import { Practitioner } from '../practitioner/practitioner';
import { RegionalCouncilService } from '../regional-council/regional-council.service';

@Component({
  selector: 'smart-practitioner-card',
  templateUrl: './practitioner-card.component.html',
  styleUrls: ['./practitioner-card.component.css']
})
export class PractitionerCardComponent implements OnInit {

  @Input() practitioner: Practitioner;

  /**
   * Key:   PractitionerRole code
   * value: i18n value for the given code
   */
  @Input() roleMap: Map<string, string>;
  @Input() selected: boolean;

  regionalCouncil: string;

  constructor(private regionalCouncilService: RegionalCouncilService) { }

  ngOnInit() {
    this.regionalCouncil = this.regionalCouncilService.getRegionalCouncil(this.practitioner);
  }

  getRoleLabels(): string {
    const roles = new Array<string>();
    if (
        this.roleMap != null
        && this.practitioner != null
        && this.practitioner.practitionerRoles != null
      ) {
      for (const roleCode of this.practitioner.practitionerRoles) {
        roles.push(this.roleMap[roleCode]);
      }
    }
    return roles.join(', ');
  }

}
