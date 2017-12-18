import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationReminderComponent } from './evaluation-reminder.component';

describe('CardComponent', () => {
  let component: EvaluationReminderComponent;
  let fixture: ComponentFixture<EvaluationReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
