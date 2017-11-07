import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Practitioner } from '../practitioner/practitioner';

@Component({
  selector: 'smart-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  @Input() turnInfo: string;
  @Input() width: string;
  @Input() height: string;
  @Input() practitioners: Map<String, Practitioner>;
  @Input() menuHeader: string;
  @Input() menuTransform: string;
  @Input() emptyPractitionersMessage: string;
  @Output() open = new EventEmitter<void>();
  @Output() updateCareProviders: EventEmitter<void> = new EventEmitter<void>();

  opened: boolean;

  constructor() {
  }

  ngOnInit() {
    this.opened = false;
  }

  onShow() {
    if (!this.opened) {
      this.updateCareProviders.emit();
      this.open.emit();
      this.opened = true;
    } else {
      this.opened = false;
    }
  }

  close() {
    this.opened = false;
  }

  getKeys() {
    if (this.practitioners != null) {
      return Object.keys(this.practitioners);
    }
  }

  getCareProviderType(type: string) {
    if (type === 'assistant') {
      return 'Médico assistente';
    } else if (type === 'associated') {
      return 'Médico associado';
    } else {
      return type;
    }
  }

  getCalculatedHeight() {
    if (this.getKeys() == null || this.getKeys().length === 0) {
      return '150px';
    }
    return (this.height == null || this.height.trim().length === 0) ? null : this.height;
  }
}
