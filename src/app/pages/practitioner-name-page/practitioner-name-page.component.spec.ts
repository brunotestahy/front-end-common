import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerNamePageComponent } from './practitioner-name-page.component';

describe('PractitionerNamePageComponent', () => {
  let component: PractitionerNamePageComponent;
  let fixture: ComponentFixture<PractitionerNamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerNamePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
