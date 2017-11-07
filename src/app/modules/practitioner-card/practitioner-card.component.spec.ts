import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerCardComponent } from './practitioner-card.component';

describe('PractitionerCardComponent', () => {
  let component: PractitionerCardComponent;
  let fixture: ComponentFixture<PractitionerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
