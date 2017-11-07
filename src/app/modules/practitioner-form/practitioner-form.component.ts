import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Practitioner } from '../practitioner/practitioner';
import { PractitionerRole } from '../practitioner/practitioner-role';
import { UFS } from '../model/ufs';
import { PractitionerService } from '../practitioner/practitioner.service';
import { NgForm } from '@angular/forms';
import { PracticionerFormFields } from './form.fields';

@Component({
  selector: 'smart-practitioner-form',
  templateUrl: './practitioner-form.component.html',
  styleUrls: ['./practitioner-form.component.css']
})
export class PractitionerFormComponent implements OnInit {

  @Input() opened: boolean;

  @Input() practitionerRoleLabel: string;
  @Input() givenNameLabel: string;
  @Input() familyNameLabel: string;
  @Input() nameSuffixLabel: string;
  @Input() crmLabel: string;
  @Input() crmUFLabel: string;
  @Input() saveLabel: string;
  @Input() cancelLabel: string;
  @Input() cpfLabel: string;
  @Input() birthdateLabel: string;

  @Input() title: string;

  @Input() thumbnailPlaceHolder: string;
  @Input() givenNamePlaceHolder: string;
  @Input() familyNamePlaceHolder: string;
  @Input() nameSuffixPlaceHolder: string;
  @Input() crmPlaceHolder: string;
  @Input() cpfPlaceHolder: string;

  @Input() successMessage: string;
  @Input() errorMessage: string;

  @Output() overlayClick = new EventEmitter<void>();
  @Output() practitionerSaved = new EventEmitter<Practitioner>();

  loading: boolean;
  success: boolean;
  error: boolean;

  roles: Array<PractitionerRole> = [];

  practitionerPhoto: Practitioner;

  fields: PracticionerFormFields;

  ufs = UFS;

  private _practitioner: Practitioner;

  @Input() set practitioner(value: Practitioner) {
    this._practitioner = value;
    this.resetPractitioner();
  }

  get practitioner(): Practitioner {
    return this._practitioner;
  }

  constructor(private practitionerService: PractitionerService) { }

  private resetPractitioner() {
    this.practitionerPhoto = { photo: this.practitioner.photo };
    const givenName = this.practitioner.givenName;
    const familyName = this.practitioner.familyName;
    const nameSuffix = this.practitioner.nameSuffix;
    const roles = this.practitioner.practitionerRoles;
    this.fields = {
      givenName: givenName != null && givenName.length !== 0 ? givenName.join(' ') : null,
      familyName: familyName != null && familyName.length !== 0 ? familyName.join(' ') : null,
      nameSuffix: nameSuffix != null && nameSuffix.length !== 0 ? nameSuffix.join(' ') : null,
      role: roles != null && roles.length !== 0 ? roles[0] : null,
      crm: this.practitioner.crm,
      crmUF: this.practitioner.crmUF,
      cpf: this.practitioner.cpf,
      birthdate: null
    };
    this.loading = false;
    this.success = false;
    this.error = false;
  }

  ngOnInit() {
    this.practitionerService.fectchRoles().subscribe((roles: Array<PractitionerRole>) => this.roles = roles);
  }

  onOverlayClick() {
    this.overlayClick.emit();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.loading = true;

    const practitionerToSave: Practitioner = {
      ...this.practitioner,
      ...this.practitionerPhoto,
      givenName: this.fields.givenName.toUpperCase().trim().split(' '),
      familyName: this.fields.familyName.toUpperCase().trim().split(' '),
      nameSuffix: this.fields.nameSuffix  == null ? [] : this.fields.nameSuffix.toUpperCase().trim().split(' '),
      practitionerRoles: [this.fields.role],
      crm: this.fields.crm.trim().replace(/[^0-9]/g, ''),
      crmUF: this.fields.crmUF.trim(),
      cpf: this.fields.cpf.trim().replace(/[^0-9]/g, ''),
    };

    practitionerToSave.fullName = practitionerToSave.givenName
      .concat(practitionerToSave.familyName)
      .concat(practitionerToSave.nameSuffix)
      .join(' ');

    this.practitionerService.save(practitionerToSave).subscribe(
      (id: string) => {
        this.loading = false;
        this.success = true;
        this.error = false;
        setTimeout(() => {
          this.success = false;
          practitionerToSave.id = id;
          this.practitionerSaved.emit(practitionerToSave);
        }, 4000);
      },
      () => {
        this.loading = false;
        this.error = true;
      }
    );
  }

}
