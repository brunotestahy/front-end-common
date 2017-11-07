import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerFormPageComponent } from './practitioner-form-page.component';

describe('PractitionerFormPageComponent', () => {
  let component: PractitionerFormPageComponent;
  let fixture: ComponentFixture<PractitionerFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
