import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerCardPageComponent } from './practitioner-card-page.component';

describe('PractitionerCardPageComponent', () => {
  let component: PractitionerCardPageComponent;
  let fixture: ComponentFixture<PractitionerCardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerCardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
