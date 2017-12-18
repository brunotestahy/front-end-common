import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCalendarComponent } from './rules-calendar.component';

describe('SearchHeaderComponent', () => {
  let component: RulesCalendarComponent;
  let fixture: ComponentFixture<RulesCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
