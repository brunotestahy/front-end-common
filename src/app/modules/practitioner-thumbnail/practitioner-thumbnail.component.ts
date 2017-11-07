import { Component, OnInit, Input } from '@angular/core';
import { Practitioner } from '../practitioner/practitioner';

@Component({
  selector: 'smart-practitioner-thumbnail',
  templateUrl: './practitioner-thumbnail.component.html',
  styleUrls: ['./practitioner-thumbnail.component.css']
})
export class PractitionerThumbnailComponent implements OnInit {

  @Input() practitioner: Practitioner;
  @Input() border: string;
  @Input() width: string;
  @Input() height: string;
  @Input() borderRadius: string;

  constructor() { }

  ngOnInit() {
  }

  strIsEmpty(str: string): boolean {
    return str == null ? true : str.trim().length === 0;
  }

  arrIsEmpty(arr: Array<any>): boolean {
    return arr == null ? true : arr.length === 0;
  }

  getInitials(): string {
    let initials = '';
    let firstGivenName = '';
    if (!this.arrIsEmpty(this.practitioner.givenName)) {
      firstGivenName = this.practitioner.givenName[0];
    }
    let lastFamilyName = '';
    if (!this.arrIsEmpty(this.practitioner.familyName)) {
      lastFamilyName = this.practitioner.familyName[this.practitioner.familyName.length - 1];
    }
    if (!this.strIsEmpty(firstGivenName)) {
      initials = firstGivenName.charAt(0);
    }
    if (!this.strIsEmpty(lastFamilyName)) {
      initials += lastFamilyName.charAt(0);
    }
    return initials;
  }

  getBackgroundPhoto() {
    let photo = '';
    if (this.practitioner != null) {
      if (this.practitioner.photo != null && this.practitioner.photo.length !== 0) {
        photo = this.practitioner.photo;
      }
    }
    return photo;
  }


}
