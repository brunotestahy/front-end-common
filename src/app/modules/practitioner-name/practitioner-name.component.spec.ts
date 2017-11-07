import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerNameComponent } from './practitioner-name.component';

describe('PractitionerNameComponent', () => {
  let component: PractitionerNameComponent;
  let fixture: ComponentFixture<PractitionerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
