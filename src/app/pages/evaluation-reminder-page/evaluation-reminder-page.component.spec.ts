import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationReminderPageComponent } from './evaluation-reminder-page.component';

describe('CardPageComponent', () => {
  let component: EvaluationReminderPageComponent;
  let fixture: ComponentFixture<EvaluationReminderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationReminderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationReminderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
