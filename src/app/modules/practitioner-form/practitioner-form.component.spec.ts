import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerFormComponent } from './practitioner-form.component';

describe('PractitionerFormComponent', () => {
  let component: PractitionerFormComponent;
  let fixture: ComponentFixture<PractitionerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
